
interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
  }

const ToggleButton = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        console.log(sidebarOpen)
      };

    return (
            <button
                // ref={trigger}
                onClick={toggleSidebar}
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                className='z-10 translate-x-1 rounded-lg bg-white border border-transparent h-10 w-4 mt-20 xl:block lg:block md:hidden sm:hidden xs:hidden'
            >
                {sidebarOpen ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                }

            </button>
       
    )
}

export default ToggleButton;

