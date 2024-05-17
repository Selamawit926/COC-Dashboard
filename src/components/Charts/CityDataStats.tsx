import { useEffect, useState } from "react";
import { COCTotalData, TotalCountByCity, fetchCOCData } from "../../utils/COC_Api";

const CityDataStats = () => {

  const [cocData, setCocData] = useState<COCTotalData>();
  const [totalCountByCity, setCityCount] = useState<TotalCountByCity[]>([]);
  const sampleData = [
    {
      "_count": {
        "city": 22
      },
      "city": "Adama"
    },
    {
      "_count": {
        "city": 32
      },
      "city": "Jimma"
    }, {
      "_count": {
        "city": 5
      },
      "city": "Hawassa"
    },
    {
      "_count": {
        "city": 25
      },
      "city": "Gondar"
    },
    {
      "_count": {
        "city": 14
      },
      "city": "Harari"
    },
    {
      "_count": {
        "city": 36
      },
      "city": "Dire Dawa"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cocData = await fetchCOCData();
        setCocData(cocData);
        setCityCount(cocData.totalCountByCity);
      } catch (error) {
        console.error('Error fetching COC data:', error);
      }
    };
    fetchData();
  }, []);

  const data = totalCountByCity.concat(sampleData);
  console.log(data)

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4">
          <h4 className="text-xl text-center xl:text-start md:text-center font-extrabold text-black dark:text-white">
            COC by City
          </h4>
      </div>
      <div className="grid grid-cols-1">
        {data.map((item) =>(
            <div className='flex justify-center items-center mt-6'>
              <div className='mr-4 w-30'>
                {item.city == "AA" ?
                <p className='font-bold text-sm text-black'>Addis Ababa</p>
                :
                <p className='font-bold text-sm text-black'>{item.city}</p>
                }
              </div>
              <div className="w-40">
                  <div className="rounded-full shadow w-40 bg-grey-light">
                      <div className={`bg-green-600 rounded-full text-xs leading-none py-1 text-center text-white w-${item._count.city}`}>
                      </div>
                  </div>
              </div>
              <div>
                <p className='font-medium text-xs ml-6'>{item._count.city}</p>
              </div>
          </div>
        ))}
        </div>
    </div>
  );
};

export default CityDataStats;
