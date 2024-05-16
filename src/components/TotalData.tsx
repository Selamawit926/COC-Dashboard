import { useState, useEffect } from 'react';
import { COCTotalData, fetchCOCData } from '../utils/COC_Api';
import CardDataStats from './CardDataStats';

const TotalData = () => {
  const [cocData, setCocData] = useState<COCTotalData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cocData = await fetchCOCData();
        setCocData(cocData);
      } catch (error) {
        console.error('Error fetching COC data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {cocData && (
        <>
          <CardDataStats 
            title="Total COC" 
            total={cocData.totalCoc.toString()}
            children={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="lightblue" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>}>
          </CardDataStats>
          <CardDataStats 
            title="Total Completed" 
            total={cocData.totalCompleted.toString()}
            children={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>}>
          </CardDataStats>
          <CardDataStats 
            title="Total Regular" 
            total={cocData.totalRegular.toString()}
            children={<svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" viewBox="0 0 1792 1536"><path fill="green" d="M640 256h512V128H640zm-352 0v1280h-64q-92 0-158-66T0 1312V480q0-92 66-158t158-66zm1120 0v1280H384V256h128V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160zm384 224v832q0 92-66 158t-158 66h-64V256h64q92 0 158 66t66 158"/></svg>}>
          </CardDataStats>
          <CardDataStats 
            title="Total Distance" 
            total={cocData.totalDistance.toString()}
            children={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="lightblue" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>}>
          </CardDataStats>
          <CardDataStats 
            title="Total Passed" 
            total={cocData.totalPracticalPassed.toString()}
            children={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="battery-charging-vertical">
                        <rect width="256" height="256" fill="none"></rect>
                        <line x1="100" x2="156" y1="12" y2="12" fill="none" stroke="darkgreen" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                        <rect width="144" height="180" x="56.006" y="48" fill="none" stroke="darkgreen" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" rx="16"></rect>
                        <polyline fill="none" stroke="darkgreen" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" points="128 178 144 138 112 138 128 98"></polyline>
                      </svg>}>
          </CardDataStats>
        </>
      )}
    </>
  );
};

export default TotalData;
