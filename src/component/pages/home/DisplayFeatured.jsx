import PropTypes from 'prop-types';

const DisplayFeatured = ({ job }) => {
    const { logo, job_title, remote_or_onsite, company_name, salary, job_type, location } = job
    console.log(job)
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto p-10">
                <img className='w-[100px]' src={logo} alt="Shoes" />
                <div className="">
                    <h2 className="">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-5">
                        <button className="btn border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn border border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='flex gap-3'>
                        <p>{location }</p>
                        <p>{salary }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

DisplayFeatured.propTypes = {
    job: PropTypes.object
};

export default DisplayFeatured;