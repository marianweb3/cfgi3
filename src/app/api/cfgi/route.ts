import axios, { AxiosResponse } from 'axios'
import { config } from '@/src/config.ts'
import {getRequestDateRange} from "@/src/services/utils/bitcoin/getRequestDateRange.ts";

export async function GET() {
  try {
    const response: AxiosResponse = await axios.get(
      config.cfgiApi + `&token=BTC${getRequestDateRange()}&period=1`,
    )
    const responseData = await response.data

    const headers = {
      'Content-Type': 'application/json',
    }

    return new Response(JSON.stringify(responseData))
  } catch (error) {
    console.error(error)
    return new Response('error', { status: 500 })
  }
}
