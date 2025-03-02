# State Management in Crypto Dashboard

## Overview
This document outlines the state management strategy used in the Crypto Dashboard application to efficiently handle data, UI state, and error management.

## State Handling Approaches
The application employs a combination of React hooks to manage state effectively:
- **useState** for local component state.
- **useEffect** for handling side effects like data fetching.
- **Custom Hooks** to encapsulate logic and improve reusability.

## Global State Management
Since the application does not require extensive global state management, we rely on component-level state and prop drilling where necessary. However, if scaling up, options like Context API or Zustand could be considered.

### Data Fetching State
The `useFetchCrypto` custom hook is responsible for fetching data and managing its state:

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

### UI State Management
The UI state, including dark mode and search functionality, is handled using `useState`:

```tsx
const [darkMode, setDarkMode] = useState(false);
const [query, setQuery] = useState("");
```

- The `darkMode` state toggles between light and dark themes.
- The `query` state filters the list of cryptocurrencies based on user input.

### Error Management
Errors are centrally handled using the `ErrorModal` component, ensuring they appear consistently across the application.

```tsx
const [showError, setShowError] = useState(!!error);
```
If an error occurs during data fetching, it is displayed using a modal overlaying all content.

## Future Improvements
- Implementing **Context API** or **Zustand** for better scalability.
- Using **React Query** for optimized data fetching and caching.
