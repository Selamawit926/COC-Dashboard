import { ApexOptions } from 'apexcharts';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 400,
    tickAmount: 4,
  },
};

interface GraphState {
  series: {
    name: string;
    data: number[];
  }[];
}

const Graph = () => {
  const [state, setState] = useState<GraphState>({
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: 'Product Two',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-xl border md:h-100 xl:h-60 sm:h-150 border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className='grid grid-cols-1 md:grid-cols-3 divide-x divide-slate-400/25'>
          
        <div className="md:col-span-2 sm:col-span-1">
          <div className='flex flex-col mr-4 gap-y-2 h-full'>
            <div className='font-medium text-black'>COC Graph</div>
            <div className='border-t border-t-slate-300 h-full'>
              <div id="chartOne" className="-ml-5 h-full">
                <ReactApexChart
                  options={options}
                  series={state.series}
                  type="area"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
  
        <div className="flex flex-col justify-between items-center h-full">
          <div className='font-extrabold text-black text-sm'>
            <div>Total COC Created <br/> this month</div>
          </div>
  
          <div className='flex flex-col ml-10 pt-13'>
            <div className='sm:text-5xl md:text-7xl font-bold text-black font-sans'>2460</div>
            <div>+23% since last month</div>
          </div>
        </div>
  
      </div>
    </div>
  );
  
};

export default Graph;
