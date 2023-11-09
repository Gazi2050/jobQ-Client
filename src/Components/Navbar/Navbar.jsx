import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleLogOut = () => {
        logout()
            .then(() => toast.success("User LogOut Successfully"))
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }

    const iconTransitionStyles = {
        transition: 'transform 0.4s',
    };

    if (isDropdownOpen) {
        iconTransitionStyles.transform = 'rotate(180deg)';
    }

    const extractEmailPart = (email) => {
        const emailParts = email.split('@');
        if (emailParts.length > 0) {
            return emailParts[0];
        }
        return email;
    }

    return (
        <div>
            <div className="navbar bg-green-400 dark:bg-violet-400 text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            onClick={toggleDropdown}
                        >
                            <div style={iconTransitionStyles}>
                                {isDropdownOpen ? <FaTimes className="text-2xl" /> : <GiHamburgerMenu className="text-2xl" />}
                            </div>
                        </label>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 dark:bg-white rounded-box w-52"
                            >
                                <li><NavLink to='/'>Home</NavLink></li>
                                {user ? (<li><NavLink to='Add job'>Add job</NavLink></li>) : (<li><NavLink to='AboutUs'>About Us</NavLink></li>)}
                                {user ? (<li><NavLink to='My jobs'>My jobs</NavLink></li>) : (<li><NavLink to='SignUp'>SignUp</NavLink></li>)}
                                {user ? (<li><NavLink to='AllJobs'>All Jobs</NavLink></li>) : null}
                                {user ? (<li><NavLink to='My bids'>My bids</NavLink></li>) : null}
                                {user ? (<li><NavLink to='Bid Requests'>Bid Requests</NavLink></li>) : null}
                                {user ? (<li><NavLink to='Profile'><div className="">
                                    <span><img className="w-[40%] rounded-full" src={user.photoURL || 'https://image.shutterstock.com/image-vector/3d-user-icon-minimalistic-style-260nw-2141873857.jpg'} alt="IMG" /></span>
                                    <span><kbd className="font-bold kbd  lg:kbd-md md:m-1 lg:m-1">{extractEmailPart(user.email)}</kbd></span>
                                </div></NavLink></li>) : null}
                            </ul>
                        )}
                    </div>
                    <Link to='/' className="btn bg-transparent border-0 text-black dark:btn dark:text-2xl text-2xl font-semibold">Job<span className="-ml-2 -mt-2 text-violet-600 text-3xl font-bold dark:text-green-500">Q</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        {user ? (<li><NavLink to='Add job'>Add job</NavLink></li>) : (<li><NavLink to='AboutUs'>About Us</NavLink></li>)}
                        {user ? (<li><NavLink to='My jobs'>My jobs</NavLink></li>) : (<li><NavLink to='SignUp'>SignUp</NavLink></li>)}
                        {user ? (<li><NavLink to='AllJobs'>All Jobs</NavLink></li>) : null}
                        {user ? (<li><NavLink to='My bids'>My bids</NavLink></li>) : null}
                        {user ? (<li><NavLink to='Bid Requests'>Bid Requests</NavLink></li>) : null}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:block md:block">
                        {user ? (<span><kbd className="font-bold kbd  lg:kbd-md md:m-1 lg:m-1">{extractEmailPart(user.email)}</kbd></span>) : null}
                        {user ? (<span><NavLink to='Profile'><div className="avatar">
                            <div className="hidden lg:block mr-2 rounded-full w-10">
                                <img className="" src={user.photoURL || 'https://image.shutterstock.com/image-vector/3d-user-icon-minimalistic-style-260nw-2141873857.jpg'} alt="IMG" />
                            </div>
                        </div></NavLink></span>) : null}
                    </div>
                    {user ? (
                        <div>
                            <button onClick={handleLogOut} className="btn btn-sm btn-outline text-violet-700 dark:text-black font-bold lg:btn lg:btn-outline lg:text-violet-700">LogOut</button>
                        </div>
                    ) : (
                        <Link to='/LogIn' className="btn btn-outline text-violet-700 dark:text-black font-bold">LogIn</Link>
                    )}
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Navbar;