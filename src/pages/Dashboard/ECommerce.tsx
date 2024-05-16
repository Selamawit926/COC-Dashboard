import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import Graph from '../../components/Charts/Graph';
import ChartTwo from '../../components/Charts/ChartTwo';
import DefaultLayout from '../../layout/DefaultLayout';
import TableThree from '../../components/Tables/TableThree';
import CompetencyChart from '../../components/Charts/CompetencyChart';
import Overlay from '../../components/Overlay';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-12 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <div className="grid grid-cols-1 gap-y-4">
            <div className='grid grid-cols-5 gap-x-2'>
              <div>
                <CardDataStats
                  title="Total views"
                  total="$3.456K"
                  rate="0.43%"
                  levelUp children={undefined}>
                </CardDataStats>
              </div>
              <div>
                <CardDataStats
                  title="Total Profit"
                  total="$45,2K"
                  rate="4.35%"
                  levelUp children={undefined}>
                </CardDataStats>
              </div>
              <div>
                <CardDataStats
                  title="Total Product"
                  total="2.450"
                  rate="2.59%"
                  levelUp children={undefined}>
                </CardDataStats>
              </div>
              <div>
                <CardDataStats
                  title="Total Users"
                  total="3.456"
                  rate="0.95%"
                  levelDown children={undefined}>
                </CardDataStats>
              </div>
              <div>
                <CardDataStats
                  title="Total Users"
                  total="3.456"
                  rate="0.95%"
                  levelDown children={undefined}>
                </CardDataStats>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-12">
              <Graph />
            </div>
            <div className="col-span-12 xl:col-span-12">
              <TableThree />
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4">
          <div className="grid grid-cols-1 gap-y-6">
              <div className="col-span-12">
                <ChartTwo />
              </div>
              <div className="col-span-12">
                  <CompetencyChart />
                  <Overlay/>
              </div>
           </div>
         </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;

