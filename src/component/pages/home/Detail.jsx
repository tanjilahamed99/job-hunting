import { Link, useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Detail = () => {
    const { id } = useParams();
    const idInt = parseInt(id)
    const jobs = useLoaderData()
    const jobDetail = jobs.find((job) => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = jobDetail
    console.log(jobDetail)
    return (
        <div className="flex container mx-auto gap-10 my-24">
            <div className="w-[70%] space-y-6">
                <h2 className="text-[#1A1919] font-extrabold">Job Description: <span className="font-medium text-[#757575]">{job_description}</span></h2>
                <h3 className="text-[#1A1919] font-extrabold">Job Responsibility: <span className="font-medium text-[#757575]">{job_responsibility}</span></h3>
                <h2 className="text-[#1A1919] font-extrabold">Education: <h2 className="mt-3 font-medium text-[#757575]">{educational_requirements}</h2></h2>
                <h2 className="text-[#1A1919] font-extrabold">Experiences: <h2 className="mt-3 font-medium text-[#757575]">{experiences}</h2></h2>
            </div>
            <div className="bg-[#9873FF0C] p-[30px] w-[30%]">
                <h2 className="text-[#1A1919] font-extrabold  text-xl">Job Title</h2>
                <hr className="border w-[80%] my-6 border-[#757575]" />

                <h2 className="flex items-center text-[#1A1919] font-extrabold "> <MdAttachMoney className="text-xl"></MdAttachMoney> Salary:<span className="text-[#757575]"> {salary}</span></h2>
                <h2 className="flex mt-3 mb-6 items-center text-[#1A1919] font-extrabold "><SlLocationPin className="text-xl"></SlLocationPin> Job Title:<p className="text-[#757575]"> {job_title}</p> </h2>
                <h2 className="text-[#1A1919] font-extrabold text-xl">Contact Information</h2>

                <hr className="border w-[80%]  my-6 border-[#757575]" />

                <h2 className=" text-[#1A1919] font-extrabold flex items-center gap-1"><BsTelephoneFill></BsTelephoneFill>Phone:<span className="text-[#757575]">{contact_information.phone}</span></h2>
                <h2 className=" text-[#1A1919] font-extrabold my-3 flex items-center gap-1 "><MdEmail></MdEmail> Email: <span className="text-[#757575]">{contact_information.email}</span></h2>
                <h2 className=" text-[#1A1919] font-extrabold flex items-center gap-1"><SlLocationPin className="text-3xl"></SlLocationPin> <h2>Address: <span className="text-[#757575]">{contact_information.address}</span></h2></h2>
                <Link className="w-ful text-center"><button className='btn bg-gradient-to-r  mt-3 from-[#7E90FE] to-[#9873FF] text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Detail;