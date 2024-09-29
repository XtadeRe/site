const accessKey = 'your_key';

const headers = {
    'X-Yandex-Weather-Key': "demo_yandex_weather_api_key_ca6d09349ba0"
};

fetch('https://api.weather.yandex.ru/v2/forecast?lat=52.37125&lon=4.89388', { headers })
    .then(response => response.json())
    .then(json => console.log(json));
