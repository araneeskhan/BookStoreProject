import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-red-50">
      <h2 className="text-2xl font-bold text-red-800 mb-4">Something went wrong:</h2>
      <pre className="text-red-600 bg-red-100 p-4 rounded">{error.message}</pre>
      <button
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        onClick={() => window.location.reload()}
      >
        Button _____
      </button>
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        {/* ... existing routes ... */}
      </Routes>
    </ErrorBoundary>
  );
};