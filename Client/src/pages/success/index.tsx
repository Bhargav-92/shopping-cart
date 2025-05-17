import { useState } from 'react';
import { CheckCircle, XCircle, Home, ArrowLeft } from 'lucide-react';

// Success Page Component
const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500" size={64} />
        </div>
        <h1 className="text-2xl font-bold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your transaction has been completed successfully. A confirmation email
          has been sent to your registered email address.
        </p>
        <div className="text-gray-500 mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="mb-2">
            <span className="font-medium">Transaction ID:</span>
            <span className="ml-2">TXN-782639045</span>
          </div>
          <div>
            <span className="font-medium">Amount:</span>
            <span className="ml-2">$129.99</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            <Home size={18} />
            Return to Home
          </button>
          <button className="flex items-center justify-center gap-2 border border-green-500 text-green-500 hover:bg-green-50 font-medium py-2 px-4 rounded-md transition-colors">
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
