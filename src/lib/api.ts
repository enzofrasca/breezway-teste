import { toast } from "sonner";
import { getStoredUser } from "./auth";

const API_KEY = '5133cb400267675bb5d5711c141ef126';

export interface InstanceData {
  pairingCode: string;
  code: string;
  count: number;
}

export async function connectInstance(): Promise<InstanceData> {
  const user = getStoredUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  try {
    const response = await fetch(`https://api.breezway.com.br/instance/connect/${user.username}`, {
      method: 'GET',
      headers: {
        apikey: API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    toast.error("Failed to connect to API. Please try again later.");
    throw error;
  }
}