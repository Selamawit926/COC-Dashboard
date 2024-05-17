
const Overlay = ({ totalPassed, totalFailed }: { totalPassed: number; totalFailed: number; }) => {
    const passedPercentage = totalPassed / 100;
    const failedPercentage = totalFailed / 100;
    return (
        <div className='w-full h-full px-7 bg-opacity-50 flex justify-center'>
            <div className="rounded-xl w-full xl:h-16 md:h-20 bg-overlay md:-translate-y-10 -translate-y-10">
                <div className='flex justify-between items-center'>

                    <div className='p-4 sm:p-4 px-7'>
                        <div className='flex justify-center items-center'>
                        <div className='h-2 w-2 bg-red-500 rounded-full'></div>
                        <p className='text-xs font-medium px-2'>Total Failed</p>
                        </div>
                        <p className='text-sm text-black font-black px-4'>{failedPercentage}%</p>

                    </div>

                    <div className='p-4 sm:p-4 px-7'>
                        <div className='flex justify-center items-center'>
                        <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                        <p className='text-xs font-medium px-2'>Total Passed</p>
                        </div>
                        <p className='text-sm text-black font-black px-4'>{passedPercentage}%</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay;