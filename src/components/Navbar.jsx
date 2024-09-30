import { useState } from "react";
import pic from "../../public/reactjs.png"
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import {Link} from "react-scroll"

const Navbar = () => {

    const [menu, setMenu] = useState(!true)

    return (
        <div className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-3xl">
            <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md relative md:py-2'>
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src={pic} alt="" />
                        <h1 className="font-bold text-xl cursor-pointer">
                            Nang<span className="text-cyan-400">zai</span>
                            <p className="text-lg font-semibold">Front-end Developer</p>
                        </h1>
                    </div>

                    <div>
                        {/* This is for Desktop view */}
                        <ul className="hidden md:flex space-x-8 font-semibold ">
                            <li> <AnchorLink className="anchor-link" offset={90} href="#home"><a href="" className="hover:text-sky-500 duration-100">Home</a></AnchorLink></li>
                            <li> <AnchorLink className="anchor-link" offset={90} href="#about"><a href="" className="hover:text-sky-500 duration-100">About</a></AnchorLink></li>
                            <li> <AnchorLink className="anchor-link" offset={90} href="#project"><a href="" className="hover:text-sky-500 duration-100">Projects</a></AnchorLink></li>
                            <li> <AnchorLink className="anchor-link" offset={90} href="#skills"><a href="" className="hover:text-sky-500 duration-100">Skills</a></AnchorLink></li>
                            <li> <AnchorLink className="anchor-link" offset={90} href="#contact"><a href="" className="hover:text-sky-500 duration-100">Contact</a></AnchorLink></li>
                        </ul>
                        <div onClick={() => setMenu(!menu)} className="md:hidden text-3xl">
                            {menu ? <IoCloseSharp /> : <IoMenu />}
                        </div>
                    </div>

                </div>

                {/* This is for Mobile view or Responsive */}
               {
                    menu && <div>
                        <ul className="md:hidden space-y-2 font-semibold absolute flex flex-col items-end border p-2 shadow-md right-5 bg-transparent backdrop-blur-3xl">
                            <li><AnchorLink className="anchor-link" offset={60} href="#home"><a href="" className="hover:text-sky-500 duration-100">Home</a></AnchorLink></li>
                            <li><AnchorLink className="anchor-link" offset={60} href="#about"><a href="" className="hover:text-sky-500 duration-100">About</a></AnchorLink></li>
                            <li><AnchorLink className="anchor-link" offset={60} href="#project"><a href="" className="hover:text-sky-500 duration-100">Projects</a></AnchorLink></li>
                            <li><AnchorLink className="anchor-link" offset={60} href="#skills"><a href="" className="hover:text-sky-500 duration-100">Skills</a></AnchorLink></li>
                            <li><AnchorLink className="anchor-link" offset={60} href="#contact"><a href="" className="hover:text-sky-500 duration-100">Contact</a></AnchorLink></li>
                        </ul>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;