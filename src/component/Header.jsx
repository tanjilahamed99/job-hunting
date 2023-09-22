import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-[#9873FF0C]">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Statistics</Link></li>
                            <li><Link to={'/applied'}>Applied Jobs</Link></li>
                            <li> <Link>Blog</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-cas font-extrabold text-3xl text-[#1A1919]">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-[#757575]">
                        <li><Link to={'/'}>Statistics</Link></li>
                        <li><Link to={'/applied'}>Applied Jobs</Link></li>
                        <li> <Link>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Start Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;