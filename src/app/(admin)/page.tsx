import type { Metadata } from "next";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import React from "react";

export const metadata: Metadata = {
  title:
    "Dashboard",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <EcommerceMetrics title="Langganan" total={26} />
      <EcommerceMetrics title="Langganan" total={26} />
      <EcommerceMetrics title="Pendapatan" total={25000000} />
      <EcommerceMetrics title="Reaktivasi" total={5} />
    </div>
  );
}
