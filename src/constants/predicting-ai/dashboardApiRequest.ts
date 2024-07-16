import
useEffect(() => {
    const fetchData = async () => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://cfgi.io/api/api_request.php?api_key=${apiKey}&token=BTC&values=1&period=1`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.length > 0) {
                const btcInfo = data[0];
                const { wni, status } = calculateWNI(btcInfo);

                setTableData(prevData => prevData.map(item => {
                    if (item.shortName === "BTC") {
                        return {
                            ...item,
                            wn: status,
                            price: `$${btcInfo.price.toFixed(2)}`,
                        };
                    }
                    return item;
                }));

                // You might want to update last7Days here as well if you have that data
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);