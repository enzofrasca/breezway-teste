import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { InstanceData } from "@/lib/api";

interface QRDisplayProps {
  data: InstanceData | null;
  status: "connected" | "connecting" | "error";
}

export function QRDisplay({ data, status }: QRDisplayProps) {
  return (
    <Card className="w-full max-w-md p-6 space-y-4 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">QR Code Connection</h2>
        <StatusBadge status={status} />
      </div>
      
      <div className="border rounded-lg p-4 bg-gray-50">
        {status === "connecting" ? (
          <div className="h-48 flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Loading QR Code...</div>
          </div>
        ) : status === "error" ? (
          <div className="h-48 flex items-center justify-center">
            <div className="text-red-500">Failed to load QR Code</div>
          </div>
        ) : data ? (
          <div className="space-y-4">
            <div className="text-sm font-medium text-gray-500">
              Pairing Code: <span className="text-black">{data.pairingCode}</span>
            </div>
            <div className="bg-white p-4 rounded border">
              <pre className="text-xs overflow-auto">{data.code}</pre>
            </div>
            <div className="text-sm text-gray-500">
              Connection count: {data.count}
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
}