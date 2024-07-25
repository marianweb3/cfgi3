import {bitcoinInfo} from "@/src/services/bitcoin/bitcoin-constant-data.ts";
import {calculateWNI} from "@/src/services/utils/calculateWiseNaiveIndex.ts";

test('calculateWNI test', () => {
    const { wni, status } = calculateWNI(bitcoinInfo);
    console.log(wni, status)
    expect(wni).toBe(42)
    expect(status).toBe("good")
});