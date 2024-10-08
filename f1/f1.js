const fetch = require('node-fetch'); 
const APIAddress = 'https://archive-api.open-meteo.com/v1/archive?';

const f1 = async (lat, long, timeStr) => {
    const url = `${APIAddress}latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

    const data = await fetch(url)
        .then(res => res.json())
        .catch(error => {
            throw new Error('Error fetching data: ' + error.message);
        });

    const avgTemp = Math.round((data.daily.temperature_2m_max[0] + data.daily.temperature_2m_min[0]) / 2);
    return avgTemp;
};

module.exports = f1;