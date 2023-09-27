import { NavLink, Outlet } from 'react-router-dom';
import logo from './assets/Logo.png'

const Root = () => {
    return (
        <div className=''>
            {/* navbar start */}
            <nav className='pt-5 px-8 w-full shmd'>
                <div className=" flex bg-base-100">
                    <div className="flex-1">
                        <img className='w-40' src={logo} alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="md:flex gap-5">
                            <li>
                                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] font-bold underline" : ""}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] font-bold underline" : ""}>Donation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#ff0000] font-bold underline" : ""}>Statistics</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* navbar end */}
            <div className="mt-10">
                <Outlet />
            </div>
            <div className="flex justify-center my-5">&copy; SHEIKH MOHAMMAD NAZMUL HASAN</div>
        </div>
    );
};

export default Root;