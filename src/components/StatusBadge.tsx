import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "connected" | "connecting" | "error";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusStyles = {
    connected: "bg-green-100 text-green-800 border-green-200",
    connecting: "bg-blue-100 text-blue-800 border-blue-200",
    error: "bg-red-100 text-red-800 border-red-200",
  };

  const statusText = {
    connected: "Connected",
    connecting: "Connecting...",
    error: "Connection Error",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        statusStyles[status],
        className
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-1.5",
        {
          "bg-green-500": status === "connected",
          "bg-blue-500": status === "connecting",
          "bg-red-500": status === "error",
        }
      )} />
      {statusText[status]}
    </span>
  );
}