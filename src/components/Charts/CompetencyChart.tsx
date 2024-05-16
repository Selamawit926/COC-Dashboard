import { TEChart } from "tw-elements-react";

const CompetencyChart = () => {

  return (
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
        <div className='md:w-60 md:h-60 xl:w-30 xl:h-30'>
          <TEChart
              type="pie"
              data={{

                datasets: [
                  {
                    label: "Competency",
                    data: [3342, 2553],
                    backgroundColor: [
                      "rgba(255, 0, 0, 0.6)",
                      "rgba(0, 255, 0.5)"
                    ],
                    borderWidth: 0
                  },
                  
                ],
              }}
            />
        </div>
      </div>
      
    </div>
  );
};

export default CompetencyChart;
