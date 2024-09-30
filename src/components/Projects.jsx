import songs from '../../public/songs.jpg'

const Projects = () => {
    return (
        <div id='project' className=" max-w-screen-2xl flex flex-col items-center container mx-auto px-4 md:px-20 my-16 md:my-32">
            <h1 className="text-3xl md:text-5xl font-bold text-center">PROJECTS</h1>
            <p className="text-md md:text-xl font-semibold text-center mt-2 md:mt-5">Explore my all latest project with source code.</p>

            <div className=" mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* This is Project-1  */}
                <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
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
                </div>

                {/* This is Project-2  */}
                <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
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
                </div>
                {/* This is Project-3  */}
                <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
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
                </div>
                {/* This is Project-4  */}
                <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
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
                </div>
                {/* This is Project-5  */}
                <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
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
                </div>
                {/* This is Project-6  */}
                <div className=" card-compact bg-base-100 w-full md:w-96 shadow-xl hover:scale-105 duration-200">
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
                </div>

            </div>
        </div>
    );
};

export default Projects;