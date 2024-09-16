import Table from "../../components/ui/table/Table";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleGenerateReport = async () => {
    setData([]);
    setLoading(true);
    try {
      const response = await axios.get(
        "https://bit-store-roan.vercel.app/api/v1/report/generate"
      );
      setData(response.data);
      toast.success(response?.data?.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(data?.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black">
      <div className="w-11/12 md:w-10/12 py-10 mx-auto h-full flex justify-center items-center flex-col gap-5">
        <div
          className={`w-full opacity-0 transition-opacity duration-1000 ${
            data?.success && data?.data?.purchases?.length ? "opacity-100" : ""
          }`}
        >
          {data?.success && data?.data?.purchases?.length ? (
            <Table {...data} />
          ) : (
            ""
          )}
        </div>

        <div className="flex justify-center items-center gap-2">
          {loading ? (
            <button
              type="button"
              disabled
              className="bg-black text-white px-5 py-2 rounded-full text-base font-normal tracking-wide border-white border transition-all duration-200 flex items-center "
            >
              <div className="animate-spin h-5 w-5 mr-3 border border-white border-s-black rounded-full"></div>
              Generating...
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGenerateReport}
              className="bg-black text-white px-5 py-2 rounded-full text-base font-normal tracking-wide border-white border hover:text-black hover:bg-white hover:border-black transition-all duration-200"
            >
              Generate Report
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
