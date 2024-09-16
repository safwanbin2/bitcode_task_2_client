import { useQuery } from "@tanstack/react-query";
import Table from "../../components/ui/table/Table";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Home = () => {
  const [enabled, setEnabled] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      "https://bit-store-roan.vercel.app/api/v1/report/generate"
    );
    setEnabled(false);
    toast.success(response?.data?.message);
    return response.data;
  };

  const { data, isLoading, refetch } = useQuery({
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
      <div className="w-11/12 md:w-10/12 py-10 mx-auto h-full flex justify-center items-center flex-col gap-5">
        {data?.success && data?.data?.purchases?.length ? (
          <Table {...data} />
        ) : (
          ""
        )}

        <div className="flex justify-center items-center gap-2">
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
          {data?.data?.purchases?.length ? (
            <button className="bg-black text-white px-5 py-2 rounded-full text-base font-normal tracking-wide border-white border hover:text-black hover:bg-white hover:border-black transition-all duration-200">
              Download Report
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
