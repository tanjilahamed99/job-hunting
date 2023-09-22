import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';

const DisplayFeatured = ({ job }) => {
    const { id,logo, job_title, remote_or_onsite, company_name, salary, job_type, location } = job
    // console.log(job)
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto p-10">
                <img className='w-[100px]' src={logo} alt="Shoes" />
                <div className="mt-8">
                    <h2 className="mb-2 font-extrabold text-2xl text-[#474747]">{job_title}</h2>
                    <p className='text-[#757575] font-semibold text-xl'>{company_name}</p>
                    <div className="flex gap-5 my-4">
                        <button className="btn font-extrabold border-[#7E90FE] text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="btn font-extrabold border border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='flex gap-3 mb-4'>
                        <h2 className='flex items-center gap-1 '><SlLocationPin></SlLocationPin>  <p>{location}</p></h2>
                        <h2 className='flex items-center gap-1 text-[#757575] font-semibold text-xl'><MdAttachMoney></MdAttachMoney><p>{salary}</p></h2>
                    </div>
                    <Link to={`/detail/${id}`}><button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

DisplayFeatured.propTypes = {
    job: PropTypes.object
};

export default DisplayFeatured;