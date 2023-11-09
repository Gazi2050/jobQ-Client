import { FcDocument } from "react-icons/fc";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllJobsCard = ({ job }) => {
    const { _id, email, jobTitle, deadLine, category, description, minimumPrice, maximumPrice } = job;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://job-q-server.vercel.app/job/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success",
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card w-full bg-gray-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        {job.jobTitle}
                        <div className="badge rounded p-5"><FcDocument className="text-4xl" /></div>
                    </h2>
                    <p>Deadline: {job.deadLine}</p>
                    <p>Salary : {job.minimumPrice}-{job.maximumPrice}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{job.category}</div>
                        <div className="badge badge-outline">{job.email}</div>
                    </div>
                    <div className="flex justify-around space-x-2">
                        <Link to={`/Job detail/${_id}`} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Detail</Link>
                        <Link to={`/updateCard/${_id}`} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update</Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllJobsCard;