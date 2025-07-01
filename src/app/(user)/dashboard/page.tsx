"use client";

import Card from "@/components/custom-ui/Card";
import InputIcons from "@/components/custom-ui/InputIcons";
import Title from "@/components/custom-ui/Title";
import Ulasan from "@/components/custom-ui/Ulasan";
import Footer from "@/components/dashboard/Footer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRepeat, FaTruckFast } from "react-icons/fa6";
import { IoIosNutrition } from "react-icons/io";

import { useAuth } from "@/context/AuthContext";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!user) {
      alert("Silakan login terlebih dahulu untuk mengirim ulasan.");
      return;
    }

    if (!message.trim()) {
      alert("Masukkan ulasan terlebih dahulu.");
      return;
    }
    if (rating < 1 || rating > 5) {
      alert("Rating harus antara 1 sampai 5.");
      return;
    }


    const jwt = localStorage.getItem("jwt");

    const payload = {
      data: {
        review: [
          {
            type: "paragraph",
            children: [
              {
                text: message,
                type: "text",
              },
            ],
          },
        ],
        rating,
        users_permissions_user: user.id,
      },
    };

    try {
      setIsSubmitting(true);
      const res = await fetch("http://localhost:1337/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Terima kasih atas ulasan Anda!");
        setMessage("");
        setRating(5);
        setHasSubmitted(true);
        setRefreshTrigger(prev => prev + 1); // 🔁 Trigger refresh untuk <Ulasan />
      } else {
        const err = await res.json();
        alert("Gagal mengirim ulasan: " + err?.error?.message);
      }
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Terjadi kesalahan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchExistingReview = async () => {
      const jwt = localStorage.getItem("jwt");
      if (!user || !jwt) return;

      try {
        const res = await fetch(
          `http://localhost:1337/api/testimonials?filters[users_permissions_user][id][$eq]=${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        const json = await res.json();
        if (Array.isArray(json.data) && json.data.length > 0) {
          setHasSubmitted(true);
        }
      } catch (err) {
        console.error("Gagal cek ulasan user:", err);
      }
    };

    if (user) fetchExistingReview();
  }, [user]);



  if (loading) return null;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-screen mb-10 relative">
        <div className="absolute h-screen w-7/12 -z-50">
          <Image src="/Cover.png" fill alt="cover" />
        </div>
        <div className="absolute right-0 top-0 h-screen w-3/4 -z-40">
          <Image src="/BG-Hero.png" fill alt="bg-hero" />
        </div>
        <div className="flex justify-between h-full max-w-full overflow-hidden">
          <div className="flex flex-col gap-4 justify-center px-6">
            <p className="text-5xl font-extrabold text-primary">
              Healthy Food, Anytime, Anywhere
            </p>
            <p className="text-lg font-medium text-[#484848]">
              No need to leave your home, healthy meals are ready to be delivered to your doorstep.
            </p>
            <p className="text-lg font-medium text-[#484848]">
              We are ready to deliver quickly throughout Indonesia.
            </p>
            <div className="mt-4">
              <InputIcons
                type="string"
                placeholder="Find Food Here..."
                icon={<FaSearch />}
              />
            </div>
          </div>
          <div className="-mt-10 -mr-20">
            <Image
              src="/makanan.png"
              alt="makanan"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 md:px-16 md:py-20 bg-white">
        <div className="flex-1">
          <Image
            src="/images/healthy-food.jpg"
            alt="Healthy Food"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience <span className="text-primary">Healthy Food,</span> Anytime, Anywhere
          </h2>
          <p className="text-gray-600">
            Welcome to SEA Catering, your trusted choice for healthy and delicious meals delivered to your door.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-primary rounded-lg p-4">
              <h3 className="text-primary font-bold text-xl">Delivery Nationwide</h3>
              <p className="text-sm text-gray-700 mt-2">
                We deliver to every region in Indonesia — from city centers to remote areas.
              </p>
            </div>
            <div className="border border-primary rounded-lg p-4">
              <h3 className="text-primary font-bold text-xl">Quality Assured</h3>
              <p className="text-sm text-gray-700 mt-2">
                Our meals are curated by nutrition experts, prepared fresh daily, and packaged with care.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full mb-20">
        <Title
          title="Our Features"
          subtitle="Lets check our service below you will get best service"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
          <Card
            icon={<FaTruckFast size={150} />}
            title="Fast delivery"
            deskripsi="You can fast order with delivery service, wait for minute then your food will come"
          />
          <Card
            icon={<IoIosNutrition size={150} />}
            title="Nutritional Info"
            deskripsi="Complete nutritional info based on the subscription package you choose."
          />
          <Card
            icon={<FaRepeat size={150} />}
            title="Subscription"
            deskripsi="Subscription packages available to suit your healthy lifestyle needs."
          />
        </div>
      </div>

      {/* Testimonials Display */}
      <div className="w-full mb-20">
        <Title
          title="Customer Reviews"
          subtitle="Customer approved healthy meals"
        />
        <Ulasan refreshTrigger={refreshTrigger} />
      </div>

      {/* Testimonial Form (Only when user is logged in) */}
      {user && (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow mb-24">
          <h3 className="text-xl font-semibold mb-4 text-center">Tinggalkan Ulasan</h3>

          <div className="space-y-4">
            <div>
              <Label htmlFor="message">Pesan Ulasan</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis ulasan Anda di sini..."
                disabled={hasSubmitted}
                className={hasSubmitted ? "opacity-60 cursor-not-allowed" : ""}
              />
            </div>
            <div>
              <Label htmlFor="rating">Rating (1 - 5)</Label>
              <input
                id="rating"
                type="number"
                min={1}
                max={5}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                disabled={hasSubmitted}
                className={`border px-3 py-2 rounded-md w-full ${hasSubmitted ? "opacity-60 cursor-not-allowed" : ""
                  }`}
              />
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || hasSubmitted}
              className="w-full"
            >
              {hasSubmitted
                ? "Ulasan Terkirim"
                : isSubmitting
                  ? "Mengirim..."
                  : "Kirim Ulasan"}
            </Button>

            {hasSubmitted && (
              <p className="text-center text-green-600 font-medium">
                Anda sudah pernah mengirim ulasan. Terima kasih!
              </p>
            )}
          </div>
        </div>
      )}

      {/* Footer harus tetap berada DI DALAM return */}
      <div className="mx-[-40px]">
        <Footer />
      </div>
    </div> // Menutup div utama
  );
};

export default Dashboard;
