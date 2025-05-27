import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
import me from "../../public/nangzai.png"
import resume from "../../public/resume.pdf"

import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div id="home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-11 md:my-20 md:bg-cover">
            <div className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/2 ml-2 md:ml-32 mt-8 md:mt-24 text-2xl md:text-5xl font-bold space-y-2 md:space-y-5">
                    <h1 className="bg-cyan-500 text-gray-300 w-[30%] md:w-[28%] px-2 md:px-4 py-1 md:py-3 rounded-tl-3xl rounded-r-3xl">Hello!</h1>
                    <h1 className="">I'm Nangzai,</h1>
                    <h1 className="">a 
                        <span className="pl-3">
                        <ReactTyped
                            className="text-cyan-500"
                            strings={["Frontend Developer", "ReactJS Developer", "Web Developer"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                        </span>
                    </h1>
                    <div className="md:pt-8 space-y-1">
                        <h1 className="text-sm md:text-xl">Available on</h1>
                        {/* Here is icons  */}
                        <ul className="flex text-xl md:text-2xl gap-2">
                            <li className="hover:scale-125 duration-150"><a href="https://www.facebook.com/abujam.nongzai/"><FaFacebookSquare /></a></li>
                            <li className="hover:scale-125 duration-150"><a href="https://www.linkedin.com/in/abuzam-nangzai-singha/"><FaLinkedin /></a></li>
                            <li className="hover:scale-125 duration-150"><a href="https://github.com/NangzaiWebDeveloper"><FaGithubSquare /></a></li>
                        </ul>
                    </div>

                    {/* <button>Get Resume</button> */}
                        <button className="btn border-2 border-cyan-500  px-1 md:px-4 py-1 md:py-2"><a href={resume} className="download">GET RESUME</a> <span><MdCloudDownload /></span></button>
                </div>

                {/* This is My photo section  */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                    <img className="w-[80%] md:w-[68%] " src={me} alt="" />
                </div>  
            </div>
        </div>
    );
};

export default Home;