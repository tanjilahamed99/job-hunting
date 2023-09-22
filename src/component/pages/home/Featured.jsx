import { useEffect, useState } from "react";
import DisplayFeatured from "./DisplayFeatured";

const Featured = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="mt-24 container mx-auto">
            < h2 className="text-center text-[#1A1919] mb-2 font-extrabold text-3xl">Job Category List</h2>
            <p className="text-center font-medium mb-8 text-[#757575]">Explore thousands of job
                opportunities with all the information you need. Its your future</p>

           <div className="grid grid-cols-2 gap-10 items-center">
           {
                jobs.map(job => <DisplayFeatured key={job.id} job={job} ></DisplayFeatured>)
            }
           </div>
        </div >
    );
};

export default Featured;