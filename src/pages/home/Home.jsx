import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen">
      {loading ? (
        <button
          disabled
          className="bg-gray-800 text-white px-10 py-2 rounded-md"
        >
          Generating...
        </button>
      ) : (
        <button
          onClick={() => setLoading((prev) => !prev)}
          className="bg-black text-white px-10 py-2 rounded-md"
        >
          Generate Report
        </button>
      )}
    </div>
  );
};

export default Home;
