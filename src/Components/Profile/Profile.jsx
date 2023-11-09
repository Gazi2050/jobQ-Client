import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Profile = () => {
    const { user } = useContext(AuthContext);
    const extractEmailPart = (email) => {
        const emailParts = email.split('@');
        if (emailParts.length > 0) {
            return emailParts[0];
        }
        return email;
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-md px-8 py-10 mt-16 mb-5 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-center">
                    <img className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={user.photoURL || 'https://cdn-icons-png.flaticon.com/128/64/64572.png'} />
                </div>
                <h2 className="m-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">User Name : {extractEmailPart(user.email)}</h2>
                <h2 className="m-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Email : {user.email}</h2>
            </div>
        </div>
    );
};

export default Profile;