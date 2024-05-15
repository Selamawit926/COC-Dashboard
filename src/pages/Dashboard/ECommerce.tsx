import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import DefaultLayout from '../../layout/DefaultLayout';
import TableThree from '../../components/Tables/TableThree';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-12 2xl:gap-7.5">
        {/* Left Side */}
        <div className="col-span-12 xl:col-span-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-12 2xl:gap-7.5">
            <div className="col-span-12 xl:col-span-6">
              <CardDataStats
                title="Total views"
                total="$3.456K"
                rate="0.43%"
                levelUp children={undefined}              >
                {/* SVG */}
              </CardDataStats>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <CardDataStats
                title="Total Profit"
                total="$45,2K"
                rate="4.35%"
                levelUp children={undefined}              >
                {/* SVG */}
              </CardDataStats>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <CardDataStats
                title="Total Product"
                total="2.450"
                rate="2.59%"
                levelUp children={undefined}              >
                {/* SVG */}
              </CardDataStats>
            </div>
            <div className="col-span-12 xl:col-span-6">
              <CardDataStats
                title="Total Users"
                total="3.456"
                rate="0.95%"
                levelDown children={undefined}              >
                {/* SVG */}
              </CardDataStats>
            </div>
            <div className="col-span-12 xl:col-span-12">
              <ChartOne />
            </div>
            <div className="col-span-12 xl:col-span-12">
              <TableThree />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="col-span-12 xl:col-span-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12">
              <ChartTwo />
            </div>
            <div className="col-span-12">
              <ChartThree />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;

