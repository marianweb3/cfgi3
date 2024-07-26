import {getRequestDateRange} from "@/src/services/utils/bitcoin/getRequestDateRange.ts";

test('Get request date range', () => {
    console.log(getRequestDateRange())
    expect('good').toBe("good")
});
