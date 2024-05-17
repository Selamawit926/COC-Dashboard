import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { COCTotalData, fetchCOCData } from '../../utils/COC_Api';

interface GraphState {
  series: {
    name: string;
    data: number[];
  }[];
  options: any;
}

const Graph = () => {
  const [cocData, setCocData] = useState<COCTotalData>();
  const [state, setState] = useState<GraphState>({
    series: [],
    options: {
      chart: {
        type: 'area',
        height: '100%',
        toolbar: {
          show: false,
        }
      },
      colors: ['#D6F0CB'],
      stroke: {
        width: 7
      },
      xaxis: {
        categories: [],
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
      },
      grid: {
        show: false
      },
      fill: { 
        colors: ['rgb(255,255,255)'],
        opacity: 0,
      },
      dataLabels: {
        enabled: false,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cocData = await fetchCOCData();
        setCocData(cocData);
        const months = cocData.totalCocByMonth.map((item: { month: string }) => item.month);
        const counts = cocData.totalCocByMonth.map((item: { _count: { month: number } }) => item._count.month);
        setState((prevState) => ({
          ...prevState,
          series: [
            {
              name: 'Total COC Created',
              data: counts,
            },
          ],
          options: {
            ...prevState.options,
            xaxis: {
              ...prevState.options.xaxis,
              categories: months,
            },
          },
        }));
      } catch (error) {
        console.error('Error fetching COC data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="col-span-12 rounded-xl border md:h-60 xl:h-60 sm:h-100 border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className='grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-slate-400/25'>
        <div className="md:col-span-2 sm:col-span-1">
          <div className='flex flex-col mr-4 gap-y-2 h-full'>
            <div className='font-medium text-black text-sm'>COC Graph</div>
            <div className='border-t border-t-slate-300 h-full mr-5'>
              <div id="chartOne" className="-ml-5 h-full">
                <ReactApexChart
                  series={state.series}
                  options={state.options}
                  type="area"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-between items-center h-full flex-row justify-center grid grid-cols-2">
          <div className='font-extrabold text-black text-sm'>
            <div>Total COC Created <br/> this month</div>
          </div>
          <div className='flex flex-col ml-10 pt-13'>
            <div className='text-5xl md:text-7xl font-bold text-black font-sans'>{cocData?.totalCocThisMonth}</div>
            <div className='font-bold'><span className='text-green-700'>+0%</span> <span className='text-black'>since last month</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
