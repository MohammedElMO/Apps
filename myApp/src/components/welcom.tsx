import * as React from 'react';
import video from "../assets/Desk.mp4"
const Welcome = () => {
    return (
        <section className=' font-Poppin flex items-center justify-center flex-col w-full h-[100vh]'>
            
            <video className='relative object-cover  w-full h-full '
                autoPlay
                loop
                muted
                src={video} >
                </video>
            <div className="  opacity-50 absolute inset-0 bg-black"></div>

            <div className='  flex flex-col-reverse absolute gap-3'>
                <p className="text-white font-medium text-sm">
                    Click To Register To
                    Our Landing Product Page
                </p>

                <button
                    className='
                self-center
                rounded-md
                 p-4 text-white
                  font-bold
                  hover:opacity-20
                   hover:bg-white
                    transition-all
                     duration-75
                      ease-out
                        hover:text-black border'>
                    Register
                </button>



            </div>
        </section>
            
    );
};

export {Welcome }