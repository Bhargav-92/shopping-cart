const CancelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <XCircle className="text-red-500" size={64} />
        </div>
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Payment Cancelled
        </h1>
        <p className="text-gray-600 mb-6">
          Your transaction has been cancelled. No charges have been made to your
          account.
        </p>
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            If you encountered any issues during the payment process, please
            contact our support team for assistance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
            <ArrowLeft size={18} />
            Try Again
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-md transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage;
