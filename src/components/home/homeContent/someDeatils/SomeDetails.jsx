import { Link } from "react-router-dom";

const SomeDetails = () => {
    return (
        <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="h-[480px] relative bottom-8 bg-cover bg-[url('https://kurkurilimited.com/img/soft.jpg')] flex justify-center items-center">
                <Link className="bg-[#00000054] text-center text-3xl text-white font-bold px-5 py-14" to={''}>SOFTWARE <br /> DEVELOPMENT</Link>
            </div>
            <div className="h-[480px] relative bottom-8 bg-cover bg-[url('https://kurkurilimited.com/img/business.jpg')] flex justify-center items-center">
                <Link className="bg-[#00000054] text-center text-3xl text-white font-bold px-8 py-14" to={''}>BUSINESS <br /> SOLUTION</Link>
            </div>
            <div className="h-[480px] relative bottom-8 bg-cover bg-[url('https://kurkurilimited.com/img/approach.jpg')] flex justify-center items-center">
                <Link className="bg-[#00000054] text-center text-3xl text-white font-bold px-8 py-14" to={''}>OUR <br /> APPROACH</Link>
            </div>
        </div>
    );
};

export default SomeDetails;