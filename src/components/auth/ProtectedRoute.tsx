"use client";

import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return <>{children}</>;
}