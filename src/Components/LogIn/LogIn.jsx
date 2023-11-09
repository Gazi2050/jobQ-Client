import { NavLink, useNavigate, } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { signIn, googleSignIn, loading } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { email, password };
        console.log(newUser)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('User logged in successfully');
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                toast.error(errorMessage);
                navigate('/SignUp');
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser);
                toast.success(`Logged in as ${googleUser.displayName}`);
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            })
    }


    return (
        <div>
            <div>
                <div className="flex w-full max-w-sm mx-auto mt-1 overflow-hidden bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                    <div className="hidden bg-cover bg-center lg:block lg:w-1/2" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/modern-realistic-web-login-page-templates-3d-render_633461-271.jpg?size=626&ext=jpg&ga=GA1.1.562981051.1687055423&semt=ais)' }}></div>

                    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                        <div className="flex justify-center mx-auto">
                            <img className="w-[16%]" src="/assets/favicon.png" alt="" />
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-medium">Welcome Back</p>
                            <p className="text-slate-400">Login or create account</p>
                        </div>
                        <div onClick={handleGoogleSignIn} className="flex justify-center items-center mt-3 border-2 p-2 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-white hover:text-black dark:bg-slate-50 dark:text-black dark:hover:bg-black dark:hover:text-white cursor-pointer">
                            <button type="button" className="flex justify-center items-center space-x-2">
                                <p className="text-2xl"><FcGoogle /></p>
                                <p >Sign In With Google</p>
                            </button>
                        </div>
                        <div className="divider">OR</div>
                        <form onSubmit={handleLogIn}>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email</label>
                                <input
                                    placeholder="email"
                                    id="LoggingEmailAddress"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                    type="email" name="email" />
                            </div>

                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-200">Password</label>
                                    <span onClick={() => setShowPassword(!showPassword)} className="text-sm text-gray-500 dark:text-gray-300 hover:underline">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                                </div>

                                <input
                                    placeholder="password"
                                    id="loggingPassword"
                                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                    type={showPassword ? 'text' : 'password'} name="password" />
                            </div>

                            <div className="mt-6">
                                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-green-400 hover:text-black dark:bg-slate-50 dark:text-black dark:hover:bg-violet-500 dark:hover:text-white"
                                    type="submit">
                                    {loading ? <span className="loading loading-spinner loading-sm"></span> : 'LogIn'}
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="mt-8 text-center text-slate-400"> Don't have an account? <NavLink to='/SignUp' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">SignUp</NavLink></p>

                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default LogIn;