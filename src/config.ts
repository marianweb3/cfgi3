const cfgiApiKey: string | undefined = process.env.NEXT_PUBLIC_CFGI_API_KEY;

export const config = {
    api: "https://preai-c37ca7e36543.herokuapp.com",
    cfgiApi: `https://cfgi.io/api/api_request.php?api_key=${cfgiApiKey}&token=BTC&values=1&period=1`,
    tokenContract : "0x82B60E3f5C30741aB8A2fa11b8945318b861f439",
    stakingContract: "0xAcC517A71Ce41349720C4cD73beeaea9Cea95418"
}