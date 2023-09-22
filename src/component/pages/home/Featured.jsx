import { useEffect, useState } from "react";
import DisplayFeatured from "./DisplayFeatured";

const Featured = () => {
    const [jobs, setJobs] = useState([])
    const [showMore, setShowMore] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="my-24 container mx-auto">
            < h2 className="text-center text-[#1A1919] mb-2 font-extrabold text-3xl">Featured Jobs</h2>
            <p className="text-center font-medium mb-8 text-[#757575]">Explore thousands of job
                opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-10 items-center">
                {
                    jobs.slice(0, showMore).map(job => <DisplayFeatured key={job.id} job={job} ></DisplayFeatured>)
                }
            </div>
            <div className={showMore === jobs.length && 'hidden'}>
                <button onClick={() => setShowMore(jobs.length)}
                    className='mx-auto mt-5 flex   btn bg-gradient-to-r from-[#7E90FE]
             to-[#9873FF] text-white'>see all jobs</button>
            </div>
        </div >
    );
};

export default Featured;