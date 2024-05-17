import Graph from '../../components/Charts/Graph';
import CityDataStats from '../../components/Charts/CityDataStats';
import DefaultLayout from '../../layout/DefaultLayout';
import AllData from '../../components/Tables/AllData';
import CompetencyChart from '../../components/Charts/CompetencyChart';
import TotalData from '../../components/TotalData';

const Dashboard = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-12 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <div className="grid grid-cols-1 gap-y-4">
            <div className='grid grid-cols-5 gap-x-2'>
              <TotalData/>
            </div>
            <div className="col-span-12 xl:col-span-12">
              <Graph />
            </div>
            <div className="col-span-12 xl:col-span-12">
              <AllData />
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4">
          <div className="grid grid-cols-1 gap-y-6">
              <div className="col-span-12">
                <CityDataStats />
              </div>
              <div className="col-span-12">
                  <CompetencyChart />
              </div>
           </div>
         </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;

