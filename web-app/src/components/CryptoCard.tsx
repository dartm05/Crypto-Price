import React from 'react';
import { Crypto } from "../models/crypto";

interface CryptoCardProps {
  crypto: Crypto;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-lg font-bold">
        {crypto.name} ({crypto.symbol})
      </h2>
      <p>Price: ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
      <p>Market Cap: ${parseFloat(crypto.marketCapUsd).toFixed(2)}</p>
      <p>24h Volume: ${parseFloat(crypto.volumeUsd24Hr).toFixed(2)}</p>
      <p>Change (24h): {parseFloat(crypto.changePercent24Hr).toFixed(2)}%</p>
    </div>
  );
};

export default CryptoCard;