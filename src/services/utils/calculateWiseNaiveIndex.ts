export function calculateWNI(currencyInfo) {
  if (!currencyInfo) return {}
  const {
    price,
    data_price,
    data_volatility,
    data_volume,
    data_impulse,
    data_technical,
    data_social,
    data_dominance,
    data_trends,
    datas_whales,
    data_orders,
  } = currencyInfo
  const wni = parseInt(
    (data_price +
      data_volatility +
      data_volume +
      data_impulse +
      data_technical +
      data_social +
      data_dominance +
      data_trends +
      datas_whales +
      data_orders) /
      10,
  )

  let status
  switch (true) {
    case wni <= 20:
      status = 'optimal'
      break
    case wni <= 40:
      status = 'wise'
      break
    case wni <= 60:
      status = 'good'
      break
    case wni <= 80:
      status = 'explosive'
      break
    default:
      status = 'naive'
  }

  return { wni, status }
}
