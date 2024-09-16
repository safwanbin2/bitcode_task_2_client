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

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
    enabled,
  });

  const handleGenerateReport = () => {
    if (enabled) {
      refetch();
    }
    setEnabled(true);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black">
      <div className="w-10/12 mx-auto h-full flex justify-center items-center flex-col gap-10">
        {data?.success && data?.data?.purchases?.length ? (
          <Table {...data} />
        ) : (
          ""
        )}

        {isLoading ? (
          <button
            disabled
            className="bg-black text-white px-5 py-2 rounded-full text-base font-normal tracking-wide border-white border transition-all duration-200"
          >
            Generating...
          </button>
        ) : (
          <button
            onClick={handleGenerateReport}
            className="bg-black text-white px-5 py-2 rounded-full text-base font-normal tracking-wide border-white border hover:text-black hover:bg-white hover:border-black transition-all duration-200"
          >
            Generate Report
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
