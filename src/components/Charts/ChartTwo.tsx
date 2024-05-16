import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'bar',
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: '25%',
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: '25%',
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    fontFamily: 'Satoshi',
    fontWeight: 500,
    fontSize: '14px',

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const [state, setState] = useState<ChartTwoState>({
    series: [
      {
        name: 'Sales',
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: 'Revenue',
        data: [13, 23, 20, 8, 13, 27, 15],
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
    <div className="col-span-12 rounded-lg border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-extrabold text-black dark:text-white">
            COC by City
          </h4>
        </div>
      </div>

      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
          <div className='mr-4'>
            <p className='font-bold text-sm text-black'>Addis Ababa</p>
          </div>
          <div className="w-40">
              <div className="rounded-full shadow w-40 bg-grey-light">
                  <div className="bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-19">
                  </div>
              </div>
          </div>
          <div>
            <p className='font-medium text-xs ml-6'>12,500</p>
          </div>
      </div>
      
    </div>
  );
};

export default ChartTwo;
