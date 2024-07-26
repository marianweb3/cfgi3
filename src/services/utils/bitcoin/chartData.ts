import { calculateWNI } from '@/src/services/utils/calculateWiseNaiveIndex.ts'
import { BitcoinData } from '@/src/types/services/bitcoinPage.ts'

interface DateItem {
  date: string | number | Date
}

function filterByHours<T extends DateItem>(array: T[], maxMinutes = 10) {
  return array.filter((item) => {
    const date = new Date(item.date)
    const minutes = date.getMinutes()
    return minutes < maxMinutes // Check if the first digit of minutes is 0
  })
}

const colors = {
  topGreen: '#8CC208',
  lightGreen: '#A4D208',
  yellow: '#FFD72A',
  lightOrange: '#FFBF27',
  bottomOrange: '#FF7F27',
}

const defineBarColor = (
  history: number,
  avgHistory: number,
  stdDev: number,
) => {
  if (history > avgHistory + 2 * stdDev) return colors.topGreen
  if (history > avgHistory + stdDev) return colors.lightGreen
  if (history > avgHistory - stdDev) return colors.yellow
  if (history > avgHistory - 2 * stdDev) return colors.lightOrange
  return colors.bottomOrange
}

export const calculateBarData = (inputArray: BitcoinData[]) => {
  // const filteredBitcoinData = inputArray.filter((item) => {
  //   const date = new Date(item.date);
  //   const minutes = date.getMinutes();
  //   return minutes < 10;
  // });
  const filteredBitcoinData = filterByHours(inputArray)

  const wniValues = filteredBitcoinData.map((item) => calculateWNI(item).wni)
  const avgHistory =
    wniValues.reduce((sum, wni) => sum + wni, 0) / wniValues.length

  // Calculate deviation
  const squareDiffs = wniValues.map((wni) => Math.pow(wni - avgHistory, 2))
  const avgSquareDiff =
    squareDiffs.reduce((sum, sqr) => sum + sqr, 0) / squareDiffs.length
  const stdDev = Math.sqrt(avgSquareDiff)

  return filteredBitcoinData.map((item) => {
    const { wni } = calculateWNI(item)
    const date = new Date(item.date)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return {
      time: `${hours}:${minutes}`,
      history: wni,
      color: defineBarColor(wni, avgHistory, stdDev),
    }
  })
}

export const calculateLineData = (inputArray: BitcoinData[]) => {
  const filteredBitcoinData = filterByHours(inputArray)

}

export const lineData = [
  { time: '00:18', price: 40 },
  { time: '01:18', price: 30 },
  { time: '02:18', price: 20 },
  { time: '03:18', price: 27 },
  { time: '04:18', price: 35 },
  { time: '05:18', price: 45 },
  { time: '06:18', price: 32 },
  { time: '07:18', price: 50 },
  { time: '08:18', price: 40 },
  { time: '09:18', price: 55 },
  { time: '10:18', price: 37 },
  { time: '11:18', price: 42 },
  { time: '12:18', price: 60 },
  { time: '13:18', price: 48 },
  { time: '14:18', price: 30 },
  { time: '15:18', price: 33 },
  { time: '16:18', price: 25 },
  { time: '17:18', price: 22 },
  { time: '18:18', price: 29 },
  { time: '19:18', price: 31 },
  { time: '20:18', price: 40 },
  { time: '21:18', price: 35 },
  { time: '22:18', price: 38 },
  { time: '23:18', price: 45 },
  { time: '00:18', price: 50 },
  { time: '01:18', price: 42 },
  { time: '02:18', price: 48 },
  { time: '03:18', price: 55 },
  { time: '04:18', price: 53 },
  { time: '05:18', price: 60 },
]
