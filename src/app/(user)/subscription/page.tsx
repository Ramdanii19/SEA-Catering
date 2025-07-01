"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Subscription = () => {
  const { user, loading } = useAuth();

  const [mealPlans, setMealPlans] = useState<
    { id: number; name: string; price: number }[]
  >([]);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [phone, setPhone] = useState("");
  const [allergies, setAllergies] = useState("");
  const [mealTypes, setMealTypes] = useState<string[]>([]);
  const [deliveryDays, setDeliveryDays] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchMealPlans = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/meal-plans`);
        const json = await res.json();

        /* eslint-disable @typescript-eslint/no-explicit-any */
        const data = json.data.map((item: any) => ({
          id: item.id,
          name: item.name ?? "Unknown",
          price: item.price ?? 0,
        }));

        setMealPlans(data);
      } catch (err) {
        console.error("❌ Error fetching meal plans:", err);
      }
    };

    fetchMealPlans();
  }, []);

  const handleCheckbox = (
    value: string,
    current: string[],
    setter: (val: string[]) => void
  ) => {
    setter(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  const calculateTotal = (): number => {
    const plan = mealPlans.find((p) => p.id === selectedPlan);
    if (!plan) return 0;
    return plan.price * getFinalMealTypes().length * deliveryDays.length * 4.3;
  };

  const getFinalMealTypes = (): string[] => {
    const types: string[] = [];
    if (mealTypes.includes("Sarapan")) types.push("Breakfast");
    if (mealTypes.includes("Makan Siang")) types.push("Lunch");
    if (mealTypes.includes("Makan Malam")) types.push("Dinner");
    return types;
  };

  const handleSubmit = async () => {
    if (!selectedPlan || mealTypes.length === 0 || deliveryDays.length === 0) {
      alert("Pilih paket, jenis makanan, dan hari pengiriman terlebih dahulu.");
      return;
    }

    const jwt = localStorage.getItem("jwt");
    const total = calculateTotal();

    const payload = {
      data: {
        phone_number: phone,
        allergies,
        meal_plan: selectedPlan,
        meal_type: getFinalMealTypes(),
        delivery_days: deliveryDays.join(", "),
        status_subscription: "active",
        total_harga: total,
      },
    };

    try {
      setIsSubmitting(true);
      const res = await fetch(`h${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Langganan berhasil!");
        setPhone("");
        setAllergies("");
        setSelectedPlan(null);
        setMealTypes([]);
        setDeliveryDays([]);
      } else {
        const err = await res.json();
        alert("Gagal: " + err?.error?.message || "Terjadi kesalahan.");
      }
    } catch (err) {
      console.error("❌ Gagal menyimpan:", err);
      alert("Terjadi kesalahan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <div className="pt-28 text-center">Loading...</div>;
  if (!user) return <div className="pt-28 text-center">Silakan login dahulu.</div>;

  return (
    <div className="pt-28 px-4 flex justify-center animate-fade-in">
      <div className="bg-white dark:bg-gray-900 border shadow-xl rounded-2xl p-8 w-full max-w-3xl space-y-6">
        <h2 className="text-center text-3xl font-bold text-primary">
          Langganan Makanan Sehat
        </h2>
        <p className="text-center text-muted-foreground">Halo, <span className="font-medium">{user.username}</span>! Isi detail langgananmu.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label>No. Telepon</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="08123456789"
            />
          </div>

          <div>
            <Label>Paket Makanan</Label>
            <Select
              onValueChange={(val) => setSelectedPlan(Number(val))}
              value={selectedPlan?.toString()}
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih paket" />
              </SelectTrigger>
              <SelectContent>
                {mealPlans.map((plan) => (
                  <SelectItem key={plan.id} value={plan.id.toString()}>
                    {plan.name} – Rp{plan.price.toLocaleString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-full">
            <Label>Jenis Makanan</Label>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                "Sarapan",
                "Makan Siang",
                "Makan Malam",
              ].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <Checkbox
                    checked={mealTypes.includes(type)}
                    onCheckedChange={() =>
                      handleCheckbox(type, mealTypes, setMealTypes)
                    }
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="col-span-full">
            <Label>Hari Pengiriman</Label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map(
                (day) => (
                  <label key={day} className="flex items-center gap-2">
                    <Checkbox
                      checked={deliveryDays.includes(day)}
                      onCheckedChange={() =>
                        handleCheckbox(day, deliveryDays, setDeliveryDays)
                      }
                    />
                    {day}
                  </label>
                )
              )}
            </div>
          </div>

          <div className="col-span-full">
            <Label>Alergi</Label>
            <Textarea
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="Contoh: Udang, Kacang..."
            />
          </div>

          <div className="col-span-full flex justify-between items-center py-4 border-t">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-xl font-bold text-primary">Rp{calculateTotal().toLocaleString()}</span>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={handleSubmit} disabled={isSubmitting} className="w-full text-lg">
            {isSubmitting ? "Mengirim..." : "Konfirmasi Pesanan"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
