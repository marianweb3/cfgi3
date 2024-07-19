import axios, { AxiosResponse } from 'axios';
import { config } from '@/src/config.ts'

export async function GET() {
  try {
    const response: AxiosResponse = await axios.get(config.cfgiApi);
    const responseData = await response.data;

    const headers = {
      "Content-Type": "application/json",
    };

    return new Response(JSON.stringify(responseData), { headers });
  } catch (error) {
    console.error(error);
    return new Response("error", { status: 500 })
  }
}