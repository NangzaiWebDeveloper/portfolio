import { useState } from 'react';
import songs from '../../public/songs.jpg'
import projects from "../assets/projects.json"

const allData = [
    {
        "id": 1,
        "image": "https://i.im.ge/2025/05/26/vHNA2c.pngegg.png",
        "title": "Sunset in the Mountains",
        "description": "A beautiful view of the sunset behind the snowy peaks."
    },
    {
        "id": 2,
        "image": "https://i.im.ge/2025/05/26/vHNA2c.pngegg.png",
        "title": "City Lights",
        "description": "The skyline sparkles as night falls over the bustling city."
    },
    {
        "id": 3,
        "image": "https://i.im.ge/2025/05/26/vHNA2c.pngegg.png",
        "title": "Forest Pathway",
        "description": "A peaceful path winds through a lush green forest."
    },
    {
        "id": 4,
        "image": "https://i.im.ge/2025/05/26/vHNA2c.pngegg.png",
        "title": "City Lights",
        "description": "The skyline sparkles as night falls over the bustling city."
    }
]

const Projects = () => {





    const [project, setProject] = useState([])

    // useState(()=>{
    //     fetch('projects.json')
    //         .then(response => response.json())
    //         .then(data => setProject(data))
    // }, [])

    return (
        <div id='project' className=" max-w-screen-2xl flex flex-col items-center container mx-auto px-4 md:px-20 my-16 md:my-32">
            <h1 className="text-3xl md:text-5xl font-bold text-center">PROJECTS</h1>
            <p className="text-md md:text-xl font-semibold text-center mt-2 md:mt-5">Explore my all latest project with source code.</p>

            <div className=" mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* This is Project-1  */}
                {
                    allData.map((element, index) => (
                        <div key={index} className='w-72 md:w-80 border shadow-lg p-3 rounded-lg'>
                            <div className='flex items-center justify-center'>
                                <img className='rounded-lg' src={element.image} alt="" />
                            </div>
                            <h2 className='font-semibold text-lg md:text-2xl mt-3'>{element.title}</h2>
                            <p className='text-sm md:text-lg'>{element.description}</p>

                            <div className='mt-3'>
                                <button className='mr-3 border-2 font-semibold border-blue-400 p-3 rounded-lg hover:scale-105 transition'>Live link</button>
                                <button className='border-2 font-semibold border-blue-400 p-3 rounded-lg hover:scale-105 transition '>Source code</button>
                            </div>
                        </div>
                    ))
                }




                {/* This is Project-1  */}
                {/* <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
                    <figure className='items-center'>
                        <img
                            src={songs}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit delectus.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info">Live link</button>
                            <button className="btn btn-outline btn-info">Source Code</button>
                        </div>
                    </div>
                </div> */}
                {/* This is Project-2  */}
                {/* <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={songs}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit delectus.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info">Live link</button>
                            <button className="btn btn-outline btn-info">Source Code</button>
                        </div>
                    </div>
                </div> */}
                {/* This is Project-3  */}
                {/* <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={songs}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit delectus.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info">Live link</button>
                            <button className="btn btn-outline btn-info">Source Code</button>
                        </div>
                    </div>
                </div> */}
                {/* This is Project-4  */}
                {/* <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={songs}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit delectus.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info">Live link</button>
                            <button className="btn btn-outline btn-info">Source Code</button>
                        </div>
                    </div>
                </div> */}
                {/* This is Project-5  */}
                {/* <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={songs}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit delectus.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info">Live link</button>
                            <button className="btn btn-outline btn-info">Source Code</button>
                        </div>
                    </div>
                </div> */}
                {/* This is Project-6  */}
                {/* <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img
                            src={songs}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit delectus.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-info">Live link</button>
                            <button className="btn btn-outline btn-info">Source Code</button>
                        </div>
                    </div>
                </div>  */}

            </div>
        </div>
    );
};

export default Projects;