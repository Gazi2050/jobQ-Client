import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { createUser, loading } = useContext(AuthContext);

    // Function to check if the password meets the required criteria
    const isStrongPassword = (password) => {
        const errors = {
            uppercase: !/[A-Z]/.test(password),
            lowercase: !/[a-z]/.test(password),
            digit: !/\d/.test(password),
            specialChar: !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password),
            length: !/.{6,}/.test(password),
        };

        return errors;
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userName = form.name.value;
        const photoURL = form.img.value;
        const newUser = { email, password, userName, photoURL }
        console.log(newUser);
        const passwordErrors = isStrongPassword(password);

        if (Object.values(passwordErrors).every((error) => !error)) {
            createUser(email, password)
                .then((result) => {
                    toast.success('User signed in successfully');
                    navigate('/');
                    const user = result.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    toast.error(errorMessage)
                });
        } else {
            const errorMessages = [];

            if (passwordErrors.length) {
                errorMessages.push("Password should be at least 6 characters or longer");
            }
            if (passwordErrors.uppercase) {
                errorMessages.push("Password must contain at least one uppercase letter.");
            }
            if (passwordErrors.lowercase) {
                errorMessages.push("Password must contain at least one lowercase letter.");
            }
            if (passwordErrors.digit) {
                errorMessages.push("Password must contain at least one number.");
            }
            if (passwordErrors.specialChar) {
                errorMessages.push("Password must contain at least one special character.");
            }

            toast.error(errorMessages.join(' '));
        }
    };
    return (
        <div>
            <div className="flex w-full max-w-sm mx-auto mt-5 overflow-hidden bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
                <div className="hidden bg-cover bg-center lg:block lg:w-1/2" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/3d-user-login-form-page_165488-4918.jpg?size=626&ext=jpg&ga=GA1.1.562981051.1687055423&semt=ais)' }}></div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                    <div className="flex justify-center mx-auto">
                        <img className="w-[16%]" src="/assets/favicon.png" alt="" />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-medium">Create account</p>
                        <p className="text-slate-400">It's quick and easy.</p>
                    </div>

                    <form onSubmit={handleSignUp} >
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">User Name</label>
                            <input
                                placeholder="Enter your name"
                                id="LoggingEmailAddress"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="text" name="name" />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Email</label>
                            <input
                                required
                                placeholder="Enter your email"
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
                                required
                                placeholder="Create your password"
                                id="loggingPassword"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type={showPassword ? 'text' : 'password'} name="password" />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">PhotoURL
                            </label>
                            <input
                                placeholder="Enter photo url"
                                id="LoggingEmailAddress"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type="url" name="img" />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-green-400 hover:text-black dark:bg-slate-50 dark:text-black dark:hover:bg-violet-500 dark:hover:text-white"
                                type="submit">
                                {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="mt-8 text-center text-slate-400">Already have an account? <NavLink to='/LogIn' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">LogIn</NavLink></p>

                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;