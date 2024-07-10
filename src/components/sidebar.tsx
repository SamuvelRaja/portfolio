

const Sidebar = () => {
    return (
        <nav className='p-4 float-left flex-col flex bg-[#1c1c1c] lg:w-[240px] lg:h-screen sticky border-r-[#252525] border-r-[1px]'>
            <div className="flex profile gap-2 ml-2">
                <img  className="rounded-full w-[40px] h-[40px]" src="/public/images/sam-profile.jpeg" alt="samjs picture" title='samjs picture' />
                <div>
                    <h2 className='text-[#fff] font-semibold text-sm '>Samuvel Raja</h2>
                    <p className=' font-extralight text-sm text-[#858585]'>FrontEnd Developer</p>
                </div>
            </div>
            <div className="nav-1 mt-4 flex-col">
                <div className="p-2 flex justify-between items-center text-[#858585]">

                    <div className="flex gap-2">
                        <img className="w-[24px] h-[24px]" src="/src/assets/explore.svg" alt="" />
                        <p>Explore</p>
                    </div>
                    <span className="p-1 ">1</span>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
