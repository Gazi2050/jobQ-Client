import { useLoaderData, useNavigate } from "react-router-dom";

const JobDetail = () => {
    const job = useLoaderData();
    const navigate = useNavigate();
    const { _id, email, jobTitle, deadLine, category, description, minimumPrice, maximumPrice } = job;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{job.jobTitle}</h2>
                    <div className="badge badge-outline">{job.category}</div>
                    <div className="badge badge-outline">{job.email}</div>
                    <p>{job.description}</p>
                    <p>Salary : {job.minimumPrice}-{job.maximumPrice}</p>
                    <p>Deadline : {job.deadLine}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">BId Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;