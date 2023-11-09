import { useLoaderData } from "react-router-dom";
import AllJobsCard from "../AddJob/AllJobsCard";


const AllJobs = () => {
    const jobs = useLoaderData();

    return (
        <div className="p-3 ">
            <p>Total jobs: {jobs.length}</p>
            <h1 className="text-center font-bold text-3xl p-5 underline">Our All Jobs</h1>
            <div className="flex justify-around items-center">
                <div><button className="btn btn-primary dark:btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Front-End</button></div>
                <div><button className="btn btn-primary dark:btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Full-Stack</button></div>
                <div><button className="btn btn-primary dark:btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg">Back-End</button></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
                {
                    jobs.map(job => <AllJobsCard
                        key={job._id}
                        job={job}
                    ></AllJobsCard>)
                }
            </div>

        </div>
    );
};

export default AllJobs;
