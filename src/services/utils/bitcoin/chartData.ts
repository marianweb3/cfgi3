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

function formatDateHM(date: Date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return { hours, minutes };
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
    const {hours, minutes} = formatDateHM(date)
    return {
      time: `${hours}:${minutes}`,
      history: wni,
      color: defineBarColor(wni, avgHistory, stdDev),
    }
  })
}

export const calculateLineData = (inputArray: BitcoinData[]) => {
  const filteredData = filterByHours(inputArray)
  return filteredData.map((item) => {
    const date = new Date(item.date)
    const {hours, minutes} = formatDateHM(date)
    return {
      time: `${hours}:${minutes}`,
      price: item.price
    }
  })
}