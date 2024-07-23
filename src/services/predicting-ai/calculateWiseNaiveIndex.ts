export function calculateWNI(currencyInfo) {
    const { price, data_price, data_volatility, data_volume, data_impulse, data_technical, data_social, data_dominance, data_trends, datas_whales, data_orders } = currencyInfo;
    const wni = (data_price + data_volatility + data_volume + data_impulse + data_technical + data_social + data_dominance + data_trends + datas_whales + data_orders) / 10;

    let status;
    if (wni <= 20) {
        status = "optimal";
    } else if (wni <= 40) {
        status = "wise";
    } else if (wni <= 60) {
        status = "good";
    } else if (wni <= 80) {
        status = "explosive";
    } else {
        status = "naive";
    }

    return { wni: wni.toFixed(2), status };
}

const bitcoinInfo = {
    "date": "2024-07-16 16:15:06",
    "price": 63507.5,
    "cfgi": 36,
    "data_price": 47,
    "data_volatility": 23.5,
    "data_volume": 10,
    "data_impulse": 11.5,
    "data_technical": 40,
    "data_social": 96,
    "data_dominance": 65,
    "data_trends": 50,
    "datas_whales": 25,
    "data_orders": 53.5
};

const { wni, status } = calculateWNI(bitcoinInfo);
console.log(`Wise and Naive Index: ${wni} (${status})`);