import { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";
import { COCTotalData, fetchCOCData } from "../../utils/COC_Api";
import Overlay from "../Overlay";

const CompetencyChart = () => {

  const [cocData, setCocData] = useState<COCTotalData>();
  const [totalPassed, setPassed] = useState(0);
  const [totalFailed, setFailed] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cocData = await fetchCOCData();
        setCocData(cocData);
        const totalPassed = cocData.totalPracticalPassedAndFailed[0]._count.practical_result;
        setPassed(totalPassed);
        const totalFailed = cocData.totalPracticalPassedAndFailed[1]._count.practical_result;
        setFailed(totalFailed);
      } catch (error) {
        console.error('Error fetching COC data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="sm:px-7.5 col-span-12 rounded-xl border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
        <div className='flex justify-between'>
          <div className='text-black font-extrabold'>
            Competency
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button type="button" className="border-none inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 text-xs font-semibold text-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Monthly
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className='flex items-center justify-center mb-10'>
          <div className='w-30 xl:h-30 pb-5 sm:pb-0'>
            <TEChart
                type="pie"
                data={{
                  datasets: [
                    {
                      label: "Competency",
                      data: [totalFailed, totalPassed],
                      backgroundColor: [
                        "rgba(255, 104, 104, 1)",
                        "rgba(35, 231, 173, 1)"
                      ],
                      borderWidth: 0
                    },
                  ],
                }}
              />
          </div>
        </div>
      </div>
      <Overlay totalPassed={totalPassed} totalFailed={totalFailed}/>
    </div>
  );
};

export default CompetencyChart;
