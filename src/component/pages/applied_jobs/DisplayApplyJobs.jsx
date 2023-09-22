import PropTypes from 'prop-types';

const DisplayApplyJobs = ({ job }) => {
    const { logo, job_title, remote_or_onsite, company_name, salary, job_type, location } = job
    return (
        <div>
            <div className="grid grid-cols-4  items-center bg-base-100 shadow-xl mx-auto p-10 gap-7">
                <div className='col-span-1 w-[240px] h-[240px] bg-[#9873FF0C]'>
                    <img className='w-[150px] mx-auto mt-24' src={logo} alt="Shoes" />
                </div>
                <div className="mt-8 col-span-2">
                    <h2 className="mb-2 font-extrabold text-2xl text-[#474747]">{job_title}</h2>
                    <p className='text-[#757575] font-semibold text-xl'>{company_name}</p>
                    <div className="flex gap-5 my-4">
                        <button className="btn font-extrabold border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn font-extrabold border border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='flex gap-3 mb-4'>
                        <h2 className='flex items-center gap-1 '><p>{location}</p></h2>
                        <h2 className='flex items-center gap-1 text-[#757575] font-semibold text-xl'><p>{salary}</p></h2>
                    </div>
                </div>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button>
            </div>
        </div>
    );
};

DisplayApplyJobs.propTypes = {
    job: PropTypes.object
};

export default DisplayApplyJobs;