import React from 'react';
import CryptoCard from "./CryptoCard";
import { Crypto } from "../models/crypto";

interface CryptoListProps {
  data: Crypto[];
  loading: boolean;
}

const CryptoList: React.FC<CryptoListProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-16 h-16 border-t-4 border-b-4 bg-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return data.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  ) : (
    <div className="pt-6 flex flex-col justify-center items-center h-64">
      <img
        className="mx-auto"
        src="/assets/void.svg"
        width={200}
        height={200}
        alt="No data available"
      />
      <h1 className="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
        There's nothing to see here.
      </h1>
    </div>
  );
};

export default CryptoList;
