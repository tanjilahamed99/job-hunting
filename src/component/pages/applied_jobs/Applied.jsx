import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStorage } from "../../row_JavaScript/localStorage";
import DisplayApplyJobs from "./DisplayApplyJobs";

const Applied = () => {
    const jobsData = useLoaderData()
    const [jobsApplied, setJobsApplied] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);

    const handleFilter = (filter) => {
        if (filter === 'all') {
            setFilterJobs(jobsApplied)
        }
        else if (filter === 'Remote') {
            const filterRemote = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setFilterJobs(filterRemote);
        } else if (filter === 'Onsite') {
            const filterOnsite = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite')
            setFilterJobs(filterOnsite)
        }
    }
    useEffect(() => {
        const dataID = getDataFromLocalStorage();
        if (dataID.length > 0) {
            const jobData = jobsData.filter(job => dataID.includes(job.id))
            setJobsApplied(jobData)
            setFilterJobs(jobData)
        }
    }, [])
    return (
        <div className="container mx-auto">
            <div className="flex justify-end">
                <details className="dropdown mt-32 mb-10 ">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('all')}><a>ALL</a></li>
                        <li onClick={() => handleFilter('Remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilter('Onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            {
                filterJobs.map((job) => <DisplayApplyJobs key={job.id} job={job}></DisplayApplyJobs>)
            }
        </div>
    );
};

export default Applied;