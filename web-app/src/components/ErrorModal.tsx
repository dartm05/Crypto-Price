const ErrorModal = ({ error, onClose }: { error: string; onClose: () => void }) => {
    if (!error) return null;
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md w-full">
          <h2 className="text-xl font-bold text-red-600">Error</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{error}</p>
          <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
        </div>
      </div>
    );
  };
  

export default ErrorModal;