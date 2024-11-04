import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { connectInstance, InstanceData } from "@/lib/api";
import { QRDisplay } from "@/components/QRDisplay";

const POLLING_INTERVAL = 5000; // 5 seconds

const Index = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["instance"],
    queryFn: connectInstance,
    refetchInterval: POLLING_INTERVAL,
  });

  const status = isLoading ? "connecting" : error ? "error" : "connected";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Breezway QR Code Display
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Real-time QR code connection status and monitoring
          </p>
        </div>

        <div className="flex justify-center">
          <QRDisplay data={data} status={status} />
        </div>
      </div>
    </div>
  );
};

export default Index;