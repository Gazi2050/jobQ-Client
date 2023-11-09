import toast, { Toaster } from 'react-hot-toast'

const AddJob = () => {
    const handleAddJob = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const deadLine = form.deadLine.value;
        const category = form.category.value;
        const description = form.description.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const addJob = { email, jobTitle, deadLine, category, description, minimumPrice, maximumPrice };
        console.log(addJob)

        fetch('https://job-q-server.vercel.app/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('job added successfully')
                    form.reset();
                }
            })
    }


    return (
        <div>
            <div className="p-0 lg:p-10">
                <section className="max-w-4xl p-6 mx-auto bg-teal-50 rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-700 capitalize dark:text-white text-center">Add Job</h2>

                    <form onSubmit={handleAddJob}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Email</label>
                                <input required type="text" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Job Title</label>
                                <input required type="text" name="jobTitle" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Deadline</label>
                                <input required type="date" name="deadLine" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Category</label>
                                <input required type="text" name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Minimum price</label>
                                <input required type="text" name="minimumPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-200" >Maximum price
                                </label>
                                <input required type="text" name="maximumPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input required type="text" name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div className="flex justify-end mt-6">
                            <button type="submit" className="btn px-8 py-2.5 leading-5 text-white bg-gray-700 rounded-md hover:bg-gray-900">Add</button>
                        </div>
                        <Toaster />
                    </form>


                </section>
            </div>
        </div>
    );
};

export default AddJob;

