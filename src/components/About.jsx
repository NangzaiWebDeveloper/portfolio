import me from "../../public/formal.png"

const About = () => {
    return (
        <div id="about" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 md:my-32'>
            <h1 className="text-3xl md:text-5xl font-bold text-center">ABOUT ME</h1>

            <div className="my-8 md:my-14 flex flex-col md:flex-row">

                {/* Here is image  */}
                <div className=" w-full md:w-[45%] flex justify-center items-center">
                    <img className="w-[70%] md:w-[50%] border-4 md:border-8 rounded-full border-cyan-400" src={me} alt="" />
                </div>

                    {/* Here is About descriptions  */}
                <div className="mt-4 md:mt-0 w-full md:w-[55%] flex flex-col justify-center text-sm md:text-lg">
                    <p className="text-justify">I'm a passionate Frontend Developer with a strong eye for design and detail. Proficient in HTML, CSS, and JavaScript, I build responsive, user-friendly interfaces that enhance user experience. I have hands-on experience with modern libraries like React and Next.js, ensuring fast and scalable web applications. I love turning complex problems into simple, intuitive solutions through clean, maintainable code. </p>
                    <br /> 
                    <p className="text-justify">Collaboration is key, and I thrive in agile teams, working closely with designers and backend developers to bring ideas to life. I'm always exploring new tools and techniques to stay current in the fast-evolving tech landscape.</p>
                    <br />
                    <p className="text-md font-bold italic">Interested In: <span className="font-semibold">Full Stack Developer</span></p>
                </div>

            </div>
        </div>
    );
};

export default About;