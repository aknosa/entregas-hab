"use strict";

async function convertidorEurosDolares(amountInEuros) {
    const requestData = await fetch(
        "https://api.exchangerate-api.com/v4/latest/EUR"
    );
    const pageData = await requestData.json();
    let operation = pageData.rates.USD * amountInEuros;
    console.log(`${amountInEuros} euros son ${operation} dólares.`);
}

convertidorEurosDolares(1000);

async function convertidorDolaresYenes(amountInDollars) {
    const requestData = await fetch(
        "https://api.exchangerate-api.com/v4/latest/EUR"
    );
    const pageData = await requestData.json();
    let operation = (amountInDollars * pageData.rates.JPY) / pageData.rates.USD;
    console.log(`${amountInDollars} dólares son ${operation} yenes.`);
}

convertidorDolaresYenes(50);