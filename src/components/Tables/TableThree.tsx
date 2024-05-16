import { Package } from '../../types/package';
import UserOne from '../../images/user/user-01.png';

const TableThree = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="w-[8%] py-4 font-medium text-black dark:text-white">
                No
              </th>
              <th className="w-[40%] py-4 font-medium text-black dark:text-white pl-17">
                Name
              </th>
              <th className="w-[10%] py-4 font-medium text-black dark:text-white text-center">
                Assessed
              </th>
              <th className="w-[20%] py-4 font-medium text-black dark:text-white text-center">
                Reg.No
              </th>
              <th className="w-[20%] py-4 font-medium text-black dark:text-white text-center">
                Location
              </th>
              <th className="w-[20%] py-4 px-4 font-medium text-black dark:text-white text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  className='text-sm font-medium text-black'>01</td>
              <td className='text-sm font-medium text-black'>
                <div className='flex'>
                    <span className="rounded-full mr-2">
                      <img
                        src={UserOne}
                        alt="User"
                        className="w-12 h-12" 
                      />
                    </span>
                    <p className='pt-2 pl-3'>
                      Belaynesh Getachew
                    </p>
                </div>
                 
              </td>
              <td className='text-sm font-medium'>
                <div className="py-5 px-4 dark:border-strokedark">
                  <p className="w-30 h-8 text-center rounded-md bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success">
                    Assessed
                  </p>
                </div>
              </td>
              <td className='text-xs font-medium'>
                <p>EP12345678910</p>
              </td>
              <td className='text-xs font-medium'>
                <p>Addis Ababa, 4 kilo</p>
              </td>
              <td>
                <div className="flex justify-center dark:border-strokedark bg-gray rounded-md h-7 items-center">
                  <div>
                    <svg className="h-5 w-5 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>View</p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;