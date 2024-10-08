/*
Készítsd el az előző feladat azon változatát ahol megadjuk az óraszámot is.
Csak az adott órára vonatkozó hőmérséklettel térjen vissza a függvény.
*/

const fetch = require('node-fetch');
const locations = require('../locations.json');
const APIAddress = 'https://archive-api.open-meteo.com/v1/archive?';

const f2 = async (lat, long, timeStr, hour) => {
    const str = `${APIAddress}latitude=${lat}&longitude=${long}` +
        `&start_date=${timeStr}&end_date=${timeStr}` +
        `&hourly=temperature_2m&timezone=auto`;

    const rArr = await fetch(str)
        .then(data => data.json())
        .catch(error => {
            throw new Error('Error fetching data: ' + error.message);
        });

    return rArr.hourly.temperature_2m[hour];
};

module.exports = f2;