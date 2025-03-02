import { Crypto } from "../models/crypto";

export const useSearch = (data: Crypto[], query: string): Crypto[] => {
  return data.filter((crypto) =>
    crypto.name.toLowerCase().includes(query.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(query.toLowerCase())
  );
};