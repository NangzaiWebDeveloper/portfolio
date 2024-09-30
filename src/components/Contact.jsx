import React from 'react';

const Contact = () => {


    //using Web3Forms submit in react
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "93bc159f-51c2-4482-afcc-3f448ef29051");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



    return (
        <div id='contact' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16 md:mt-32'>
            <h1 className="text-3xl md:text-5xl font-bold text-center">CONTACT</h1>

            {/* contact sections */}
            <div className='md:py-24'>
                <section>
                    <div className="grid max-w-6xl grid-cols-1 px-0 md:px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                        <div className="py-6 md:py-0 md:px-6">
                            <h1 className="text-2xl text-center md:text-start md:text-4xl font-bold">Get in touch</h1>
                            <p className="pt-2 pb-4  text-center md:text-justify text-sm md:text-md">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                            
                            <div className="space-y-2 text-sm md:text-lg md:space-y-4 mt-3 md:mt-7">
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span>Moulvibazar, Sylhet, Bangladesh</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                    </svg>
                                    <span>+88 01794-881454</span>
                                </p>
                                <p className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <span>abujamnangzai00@gmail.com</span>
                                </p>
                            </div>
                        </div>

                        {/* form sections  */}
                        <form onSubmit={onSubmit} className="flex flex-col space-y-3 md:space-y-6  md:py-0 md:px-6 text-sm md:text-lg">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" name='name' placeholder="Name" className="rounded-sm outline-0 border-0 hover:border-b hover:border-cyan-400 required px-2 md:px-3 py-2 md:py-4 placeholder:pl-3 w-full shadow-sm" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email</span>
                                <input type="email" name='email' placeholder="Email" className="rounded-sm outline-0 border-0 hover:border-b hover:border-cyan-400 required px-2 md:px-3 py-2 md:py-4 placeholder:pl-3 w-full shadow-sm  " />
                            </label>
                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="5" name='message' className="rounded-sm outline-0 border-0 hover:border-b hover:border-cyan-400 block w-full required px-3 py-2"></textarea>
                            </label>
                            <button type='submit' className="btn btn-outline btn-info self-center px-3 md:px-6 text-lg rounded">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
            
        </div>
    );
};

export default Contact;