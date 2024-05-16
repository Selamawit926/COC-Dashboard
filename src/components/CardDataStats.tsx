import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="rounded-lg w-37 h-30 border border-stroke bg-white py-2 px-3.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="h-7 w-7 rounded-full">
        {children}
      </div>

      <div className="mt-2 flex items-end justify-between">
        <div>
          <h4 className="text-lg font-extrabold text-black-200 dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-bold">{title}</span>
        </div>

      </div>
    </div>
  );
};

export default CardDataStats;
