import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-red-50">

        
    </div>
  );
}

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">My App</h1>
        <p>Some content here...</p>
    </ErrorBoundary>
  );
};