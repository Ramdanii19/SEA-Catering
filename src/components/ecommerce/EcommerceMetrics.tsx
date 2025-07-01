// components/ecommerce/EcommerceMetrics.tsx
import React from "react";

type Props = {
  title: string;
  total: number;
  prefix?: string;
};

export const EcommerceMetrics = ({ title, total, prefix }: Props) => {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-2xl font-bold text-primary">
        {prefix || ""}{total.toLocaleString()}
      </p>
    </div>
  );
};
