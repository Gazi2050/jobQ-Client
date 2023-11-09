import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
import AboutUs from './Components/AboutUs/AboutUs';
import Profile from './Components/Profile/Profile';
import AddJob from './Components/AddJob/AddJob';
import MyJobs from './Components/MyJobs/MyJobs';
import MyBids from './Components/MyBids/MyBids';
import BidRequests from './Components/BidRequests/BidRequests';
import JobDetail from './Components/JobDetail/Jobdetail';
import AllJobs from './Components/AllJobs/AllJobs';
import UpdateCard from './Components/AllJobs/UpdateCard';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'AboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'SignUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'LogIn',
        element: <LogIn></LogIn>
      },
      {
        path: 'AllJobs',
        element: <PrivateRouter><AllJobs></AllJobs></PrivateRouter>,
        loader: () => fetch('https://job-q-server.vercel.app/job')
      },
      {
        path: 'My bids',
        element: <PrivateRouter><MyBids></MyBids></PrivateRouter>,
      },
      {
        path: 'Add job',
        element: <PrivateRouter><AddJob></AddJob></PrivateRouter>
      },
      {
        path: 'My jobs',
        element: <PrivateRouter><MyJobs></MyJobs></PrivateRouter>
      },
      {
        path: 'Bid Requests',
        element: <PrivateRouter><BidRequests></BidRequests></PrivateRouter>
      },
      {
        path: 'Job detail/:id',
        element: <PrivateRouter><JobDetail></JobDetail></PrivateRouter>,
        loader: ({ params }) => fetch(`https://job-q-server.vercel.app/job/${params.id}`)
      },
      {
        path: 'Profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: 'updateCard/:id',
        element: <PrivateRouter><UpdateCard></UpdateCard></PrivateRouter>,
        loader: ({ params }) => fetch(`https://job-q-server.vercel.app/job/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
