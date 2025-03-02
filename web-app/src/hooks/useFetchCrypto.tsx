"use client";

import { useEffect, useState } from "react";
import { Crypto } from "../models/crypto";

export const useFetchCrypto = () => {
  const [data, setData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.coincap.io/v2/assets");
      const result = await response.json();
      setData(result.data.slice(0, 6));
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
};