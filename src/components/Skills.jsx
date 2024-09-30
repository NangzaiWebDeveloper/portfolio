import React from 'react';

const Skills = () => {
    return (
        <div id='skills' className='max-md:w-screen-2xl container mx-auto px-4 md:px-20 my-16 md:my-32'>
            <h1 className="text-3xl md:text-5xl font-bold text-center">SKILLS</h1>
            <div className='md:flex items-center justify-evenly mt-8 md:mt-20'>
                <div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>HTML</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="90" max="100">HTML</progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>CSS</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="80" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>Tailwind CSS</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="80" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>JAVASCRIPT</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="70" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>React.JS</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="80" max="100"></progress>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>Rest API</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="80" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>Firebase</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="90" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>Node.JS</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="65" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>Express.JS</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="80" max="100"></progress>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-md md:text-xl font-semibold '>MongoDB</h1>
                        <progress className="w-72 h-2 progress-info md:w-80" value="70" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;