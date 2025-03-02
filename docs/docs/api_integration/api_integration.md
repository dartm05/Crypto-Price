# CoinCap API Integration

## Overview
This document explains how the Crypto Dashboard fetches real-time cryptocurrency data from the CoinCap API and displays it in a user-friendly interface.

## API Endpoint
We fetch data from the CoinCap API using the following endpoint:

```
GET https://api.coincap.io/v2/assets
```

This endpoint provides a list of cryptocurrency assets, including their name, symbol, and price in USD.

## Fetching Data
We use a custom hook `useFetchCrypto` to handle API requests efficiently. The hook:
- Fetches data from the API.
- Stores the data in the component state.
- Manages loading and error states.

### Implementation
```tsx
const useFetchCrypto = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
```

## Displaying Data
The fetched data is displayed using the `CryptoList` component, which maps over the list of cryptocurrencies and renders each item using the `CryptoCard` component.

### Crypto Card Component
```tsx
const CryptoCard = ({ crypto }: { crypto: any }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-lg font-bold">{crypto.name} ({crypto.symbol})</h2>
      <p>Price: ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
    </div>
  );
};
```

## Error Handling
Errors are centrally managed using an `ErrorModal` component. If an error occurs while fetching data, the modal appears on top.

### Error Modal Component
```tsx
const ErrorModal = ({ error, onClose }: { error: string; onClose: () => void }) => {
  if (!error) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold text-red-600">Error</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{error}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
      </div>
    </div>
  );
};
```

