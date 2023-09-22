import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDataFromLocalStorage } from "../../row_JavaScript/localStorage";
import DisplayApplyJobs from "./DisplayApplyJobs";

const Applied = () => {
    const jobsData = useLoaderData()
    const [jobsApplied, setJobsApplied] = useState([]);
    // console.log(jobsData);
    useEffect(() => {
        const dataID = getDataFromLocalStorage();
        if (dataID.length > 0) {
            const jobData = jobsData.filter(job => dataID.includes(job.id))
            setJobsApplied(jobData)
        }
    }, [])
    return (
        <div className="container mx-auto">
            {
                jobsApplied.map((job) => <DisplayApplyJobs key={job.id} job={job}></DisplayApplyJobs>)
            }
        </div>
    );
};

export default Applied;