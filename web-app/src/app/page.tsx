"use client";

import React, { useState, useEffect } from "react";
import { useFetchCrypto } from "../hooks/useFetchCrypto";
import { useSearch } from "../hooks/useSearch";
import CryptoList from "../components/CryptoList";
import SearchBar from "../components/SearchBar";
import ThemeToggle from "../components/ThemeToggle";
import ErrorModal from "../components/ErrorModal";

const Home = () => {
  const { data, loading, error, fetchData } = useFetchCrypto();
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showError, setShowError] = useState(false);
  const filteredData = useSearch(data, query);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6`}>
      {showError && <ErrorModal error={error?.message || "An unexpected error occurred"} onClose={() => setShowError(false)} />}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img src="/assets/bitcoin.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
        </div>
        <div className="ml-auto flex items-center">
          <a href="https://your-docusaurus-site.com" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-500 hover:underline">
            Docs
          </a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </header>
      <section className="mb-6 text-center">
        <img src="/assets/currency.svg" width={200} height={200} alt="Crypto Dashboard" className="mx-auto" />
      </section>
      <section className="mb-6 text-center">
        <h2 className="text-xl font-semibold">Track Real-Time Crypto Prices</h2>
        <p className="text-gray-600 dark:text-gray-400">Stay updated with the latest cryptocurrency market trends.</p>
      </section>
      <div className="flex items-center mb-6">
        <SearchBar onSearch={setQuery} />
        <button
          onClick={fetchData}
          className="p-2 bg-primary text-white rounded-lg hover:bg-purple-600"
        >
          Refresh
        </button>
      </div>
      <CryptoList data={filteredData} loading={loading} />
      <footer className="text-center text-gray-500 dark:text-gray-400 mt-8">
        <p>&copy; 2025 Crypto Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;