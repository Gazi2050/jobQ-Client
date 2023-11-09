import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center p-20"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/LogIn'></Navigate>
};

export default PrivateRouter;
