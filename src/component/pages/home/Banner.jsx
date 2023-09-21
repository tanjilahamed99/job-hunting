const Banner = () => {
    return (
        <div className="bg-[#9873FF0C]">
            <div className="flex justify-between container mx-auto pt-24 items-center">
                <div>
                    <h2 className="font-extrabold text-5xl text-[#1A1919] leading-[55px]">
                        One Step <br /> Closer To Your <br /> <span className="text-[#9873FF]"> Dream Job </span>
                    </h2>
                    <p className="font-medium text-lg my-4">Explore thousands of job opportunities with all the <br /> information
                        you need. Its your future. Come find it. Manage all <br /> your job
                        application from start to finish.</p>
                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                        Get Started
                    </button>
                </div>
                <img className="w-[500px]" src={`https://i.ibb.co/KK961f6/user.png`} alt="" />
            </div>
        </div>
    );
};

export default Banner;