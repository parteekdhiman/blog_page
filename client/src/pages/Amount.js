import React, { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const exchangeRate = 0.85; // Hard-coded exchange rate (1 USD to EUR)

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const convertCurrency = () => {
    const inputAmount = parseFloat(amount);
    if (!isNaN(inputAmount)) {
      const result = inputAmount * exchangeRate;
      setConvertedAmount(result.toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={handleAmountChange} />
        </label>
      </div>
      <div>
        <label>
          From Currency:
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          To Currency:
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="EUR">EUR</option>
          </select>
        </label>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount !== null && (
        <p>
          {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}.
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
