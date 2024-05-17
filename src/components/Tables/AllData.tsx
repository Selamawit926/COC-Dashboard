import { useState, useEffect } from 'react';
import UserOne from '../../images/user/user-01.png';
import { COC_Obj, fetchAllCOC } from '../../utils/COC_Api';

const AllData = () => {

  const [users, setUsers] = useState<COC_Obj[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchAllCOC();
        setUsers(users)
      } catch (error) {
        console.error('Error fetching COC data:', error);
      }
    };
    fetchData();
  }, []);

  const firstFiveUsers = users.slice(0, 5);

  return (
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left bg-light">
              <th className="rounded-tl-lg border border-transparent w-[8%] py-3 px-4 font-bold text-black dark:text-white">
                No
              </th>
              <th className="w-[25%] py-3 px-4 font-bold text-black dark:text-white pl-17">
                <button className='relative inline-flex justify-center items-center'>
                  Name
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </th>
              <th className="w-[10%] py-3 px-4 font-bold text-black dark:text-white text-center">
                <button className='relative inline-flex justify-center items-center'>
                  Assessed
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </th>
              <th className="w-[20%] py-3 px-4 text-black font-normal dark:text-white text-center">
                <button className='relative inline-flex justify-center items-center'>
                  Reg.No
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </th>
              <th className="w-[20%] py-3 px-4 text-black font-normal dark:text-white text-center">
                <button className='relative inline-flex justify-center items-center'>
                  Location
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
              </th>
              <th className="rounded-tr-lg border border-transparent w-[10%] py-3 pr-4 font-bold text-black dark:text-white text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {firstFiveUsers.map((user, index) => (
              <tr key={index} className={`${index %2 != 0 ? 'bg-lighter bg-opacity-50' : 'bg-none' }`}>
                <td className='text-xs font-medium text-black px-4 py-3'>0{index + 1}</td>
                <td className='text-xs font-medium text-black py-3'>
                  <div className='flex'>
                    <span className="rounded-full mr-2">
                      <img
                        src={UserOne}
                        alt="User"
                        className="w-12 h-12" 
                      />
                    </span>
                    <p className='pt-2 pl-3 capitalize'>
                      {user.first_name.toLocaleLowerCase()} {user.father_name.toLocaleLowerCase()}
                    </p>
                  </div>
                </td>
                <td className='text-xs font-medium py-3'>
                  <div className="px-4 dark:border-strokedark">
                    {user.assessed ?
                      <p className="w-30 h-8 text-center rounded-md bg-opacity-10 py-1 px-3 text-sm font-medium bg-assessed text-assessed">
                        Assessed
                      </p>
                      :
                      <p className="w-30 h-8 text-center rounded-md bg-opacity-10 py-1 px-3 text-sm font-medium bg-error text-error">
                        Not Assessed
                      </p>
                    }
                  </div>
                </td>
                <td className='text-xs font-medium text-center py-3'>
                  <p>{user.reg_no}</p>
                </td>
                <td className='text-xs font-medium text-center'>
                  {user.city.toLowerCase() == "aa" ?
                  <p className='capitalize'>Addis Ababa, {user.location.toLocaleLowerCase()}</p>
                  :
                  <p className='capitalize'>{user.city}, {user.location}</p>
                  }
                </td>
                <td>
                  <div className="text-center py-3 flex justify-center dark:border-strokedark bg-light rounded-md h-8 w-16 items-center">
                    <div>
                      <svg className="h-5 w-5 text-black-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                    </div>
                    <div>
                      <p className='text-xs font-medium'>View</p>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default AllData;