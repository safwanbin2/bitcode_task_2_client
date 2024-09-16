import { useQuery } from "@tanstack/react-query";
import Table from "../../components/ui/table/Table";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [enabled, setEnabled] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      "https://bit-store-roan.vercel.app/api/v1/report/generate"
    );
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
    enabled,
  });

  const handleGenerateReport = () => {
    setEnabled((prev) => !prev);
  };

  console.log({ data, error });
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-500">
      <div className="w-10/12 mx-auto h-full flex justify-center items-center flex-col">
        {isLoading ? (
          <button
            disabled
            className="bg-black text-white px-5 py-2 rounded-md text-base font-semibold tracking-wide border-white border-2 hover:text-black hover:bg-white hover:border-black transition-all duration-200"
          >
            Generating...
          </button>
        ) : (
          <button
            onClick={handleGenerateReport}
            className="bg-black text-white px-5 py-2 rounded-md text-base font-semibold tracking-wide border-white border-2 hover:text-black hover:bg-white hover:border-black transition-all duration-200"
          >
            Generate Report
          </button>
        )}

        <Table />
      </div>
    </div>
  );
};

export default Home;
