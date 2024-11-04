import { toast } from "@/components/ui/use-toast";

const API_KEY = '5133cb400267675bb5d5711c141ef126';
const API_URL = 'https://api.breezway.com.br/instance/connect/instance';

export interface InstanceData {
  pairingCode: string;
  code: string;
  count: number;
}

export async function connectInstance(): Promise<InstanceData> {
  try {
    const response = await fetch(API_URL, {
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
    toast({
      variant: "destructive",
      title: "Connection Error",
      description: "Failed to connect to Breezway API. Please try again later.",
    });
    throw error;
  }
}