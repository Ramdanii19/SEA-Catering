'use client';

import { useEffect, useState } from 'react';
import { EcommerceMetrics } from '@/components/ecommerce/EcommerceMetrics';

type Subscription = {
  id: number;
  status_subscription: string;
  total_harga: number;
  createdAt: string;
  updatedAt: string;
};

export default function DashboardMetrics() {
  const [data, setData] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  const today = new Date().toISOString().split('T')[0]; // Format: '2025-07-01'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/subscriptions?populate=*`);
        const json = await res.json();
        const subscriptions = json.data || [];
        setData(subscriptions);
      } catch (err) {
        console.error('❌ Gagal fetch data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getDate = (iso: string) => new Date(iso.replace('Z', '')).toISOString().split('T')[0];

  const langgananBaru = data.filter(
    (sub) => getDate(sub.createdAt) === today
  ).length;

  const pendapatan = data.reduce((sum, sub) => sum + Number(sub.total_harga || 0), 0);

  const reaktivasi = data.filter(
    (sub) =>
      sub.status_subscription === 'active' &&
      new Date(sub.updatedAt) > new Date(sub.createdAt)
  ).length;

  const aktif = data.filter((sub) => sub.status_subscription === 'active').length;

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-6 text-primary">Statistik Langganan</h2>
      {loading ? (
        <p className="text-gray-500">Memuat...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <EcommerceMetrics title="Langganan Baru" total={langgananBaru} />
          <EcommerceMetrics title="Pendapatan Total" total={pendapatan} prefix="Rp" />
          <EcommerceMetrics title="Reaktivasi" total={reaktivasi} />
          <EcommerceMetrics title="Langganan Aktif" total={aktif} />
        </div>
      )}
    </div>
  );
}
