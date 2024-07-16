const url = 'https://cfgi.io/api/api_request.php?api_key=API_KEY&token=BTC&values=1&period=1';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
