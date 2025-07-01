"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Subscription = {
  id: number;
  phone_number: string;
  allergies: string;
  delivery_days: string;
  meal_type: string[];
  total_harga: number;
  status_subscription: "active" | "paused" | "cancelled";
  meal_plan: {
    id: number;
    name: string;
    price: number;
  };
};

export default function AllSubscriptions() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const jwt = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;

  const fetchSubscriptions = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscriptions?populate=meal_plan`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const json = await res.json();
      setSubscriptions(json.data || []);
    } catch (err) {
      console.error("❌ Error fetching subscriptions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const updateStatus = async (id: number, newStatus: Subscription["status_subscription"]) => {
    if (!jwt) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscriptions/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          data: {
            status_subscription: newStatus,
          },
        }),
      });

      if (!res.ok) throw new Error("Gagal memperbarui status");

      await fetchSubscriptions(); // refresh data
    } catch (err) {
      console.error("❌ Gagal update:", err);
      alert("Gagal memperbarui status langganan");
    }
  };

  return (
    <div className="pt-28 px-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">Semua Langganan Pengguna</h1>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data langganan...</p>
      ) : subscriptions.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada data langganan</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subscriptions.map((sub) => {
            const plan = sub.meal_plan;

            return (
              <Card key={sub.id} className="shadow-md">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-primary">
                    {plan?.name ?? "Paket Tidak Diketahui"}
                  </h3>
                  <p>
                    <span className="font-medium">Jenis Makanan:</span>{" "}
                    {sub.meal_type.join(", ")}
                  </p>
                  <p>
                    <span className="font-medium">Hari:</span>{" "}
                    {sub.delivery_days}
                  </p>
                  <p>
                    <span className="font-medium">Telepon:</span>{" "}
                    {sub.phone_number}
                  </p>
                  <p>
                    <span className="font-medium">Alergi:</span>{" "}
                    {sub.allergies}
                  </p>
                  <p>
                    <span className="font-medium">Total:</span>{" "}
                    Rp{Number(sub.total_harga).toLocaleString()}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    {sub.status_subscription}
                  </p>

                  {/* Tombol berdasarkan status */}
                  <div className="pt-4 flex flex-col gap-2">
                    {sub.status_subscription === "active" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-yellow-600 border-yellow-500 hover:bg-yellow-100"
                          onClick={() => updateStatus(sub.id, "paused")}
                        >
                          Tunda Langganan
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(sub.id, "cancelled")}
                        >
                          Batalkan Langganan
                        </Button>
                      </>
                    )}

                    {sub.status_subscription === "paused" && (
                      <>
                        <Button
                          size="sm"
                          variant="default"
                          onClick={() => updateStatus(sub.id, "active")}
                        >
                          Aktifkan Langganan
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => updateStatus(sub.id, "cancelled")}
                        >
                          Batalkan Langganan
                        </Button>
                      </>
                    )}

                    {sub.status_subscription === "cancelled" && (
                      <p className="text-red-500 text-sm font-medium">
                        Langganan telah dibatalkan.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
