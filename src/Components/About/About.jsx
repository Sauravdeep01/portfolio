import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt'
import ProfilePic from '../../assets/Profile_Image.png'

function About() {
    return (
        <section
            id='about'
            className='min-h-screen flex items-center px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans pt-24 scroll-mt-24'
        >
            <div className='flex flex-col-reverse md:flex-row justify-between items-center w-full'>
                {/* Left Side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:mr-16'>
                    {/* Open to Work Badge */}
                    <div className='inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-sm'>
                        <div className='relative flex h-2.5 w-2.5 md:h-3 md:w-3'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500'></span>
                        </div>
                        <span className='text-xs md:text-sm text-green-400 font-medium tracking-wide uppercase'>
                            Open to Work
                        </span>
                    </div>

                    {/* Greeting */}
                    <h1 className='text-3xl sm:text-5xl md:text-3xl font-bold text-white mb-0 leading-tight'>
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mt-0 mb-0'>
                        Saurav Deep
                    </h2>
                    {/* Typing Effect */}
                    <h3 className='text-xl sm:text-2xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <span className='text-white'>I am a </span>
                        <TypeAnimation
                            sequence={[
                                'Fullstack Developer',
                                1500, // Wait 1.5 seconds
                                'App Developer',
                                1500, // Wait 1.5 seconds
                                'UI/UX Designer', // Note: I corrected the typo from UI/UI to UI/UX
                                1500, // Wait 1.5 seconds
                                'Coder',
                                1500, // Wait 1.5 seconds
                            ]}
                            wrapper="span"
                            speed={50} // Typing speed (50 is the default)
                            repeat={Infinity} // Loop forever
                        />


                    </h3>

                    {/* About me paragraph */}
                    <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-10 mt-8 leading-relaxed max-w-2xl font-normal tracking-wide text-center md:text-left mx-auto md:mx-0'>
                        I'm a <span className='text-white font-semibold'>Full Stack Developer</span> specialized in building high-performance web applications using the <span className='text-[#8245ec] font-semibold'>MERN stack</span>. I focus on creating clean, scalable code and delivering seamless user experiences across all devices.
                    </p>

                    {/* CTA & Stats Section */}
                    <div className='flex flex-col xl:flex-row items-center md:items-start xl:items-center gap-8 md:gap-10 w-full'>
                        {/* Resume button */}
                        <a
                            href='/CV_Saurav_Deep.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group relative inline-flex items-center justify-center text-white py-3 px-8 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] whitespace-nowrap'
                            style={{
                                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                                boxShadow: '0 4px 15px rgba(130, 69, 236, 0.4)'
                            }}>
                            
                            {/* Shiny hover effect */}
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-10"></span>
                            
                            {/* Inner border pulse */}
                            <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/60 transition-colors duration-300 z-0"></span>
                            
                            <span className="relative flex items-center gap-2 z-10 transition-transform duration-300">
                                View Resume
                                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                        </a>

                        {/* Interactive Stats Grid */}
                        <div className='grid grid-cols-3 gap-3 md:gap-4'>
                            {/* Card 1: Projects */}
                            <div className='group relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:border-[#8245ec] hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] cursor-pointer'>
                                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0'></div>
                                <div className='absolute inset-0 bg-gradient-to-br from-[#8245ec]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <span className='text-2xl md:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#a855f7] transition-all duration-300 z-10 drop-shadow-lg group-hover:scale-110'>
                                    5<span className='text-[#8245ec] group-hover:text-[#a855f7]'>+</span>
                                </span>
                                <span className='text-[10px] md:text-xs text-gray-400 text-center uppercase tracking-widest mt-1 group-hover:text-white transition-colors duration-300 z-10'>
                                    Projects
                                </span>
                            </div>

                            {/* Card 2: Experience */}
                            <div className='group relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:border-[#8245ec] hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] cursor-pointer'>
                                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0'></div>
                                <div className='absolute inset-0 bg-gradient-to-br from-[#8245ec]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <span className='text-2xl md:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#a855f7] transition-all duration-300 z-10 drop-shadow-lg group-hover:scale-110'>
                                    2<span className='text-[#8245ec] group-hover:text-[#a855f7]'>+</span>
                                </span>
                                <span className='text-[10px] md:text-xs text-gray-400 text-center uppercase tracking-widest mt-1 group-hover:text-white transition-colors duration-300 z-10'>
                                    Years Exp.
                                </span>
                            </div>

                            {/* Card 3: DSA Problems */}
                            <div className='group relative flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/10 hover:border-[#8245ec] hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] cursor-pointer'>
                                <div className='absolute inset-0 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0'></div>
                                <div className='absolute inset-0 bg-gradient-to-br from-[#8245ec]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <span className='text-xl md:text-3xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#a855f7] transition-all duration-300 z-10 drop-shadow-lg group-hover:scale-110' style={{letterSpacing: '-1px'}}>
                                    150<span className='text-[#8245ec] group-hover:text-[#a855f7]' style={{letterSpacing: '0'}} >+</span>
                                </span>
                                <span className='text-[10px] md:text-xs text-gray-400 text-center uppercase tracking-widest mt-1 group-hover:text-white transition-colors duration-300 z-10 leading-tight'>
                                    DSA<br/>Problems
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='md:w-1/2 flex justify-center md:justify-end'>
                    <Tilt
                        className="w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center overflow-hidden"

                        // Tilt settings
                        transitionSpeed={2000}
                        scale={1.05}
                        perspective={1000}

                        // Interactive Light Settings
                        glareEnable={true}
                        glareMaxOpacity={0.4}
                        glareColor="#8245ec"

                        style={{
                            // 🌟 APPLIED BUTTON'S GRADIENT AND BOX SHADOW HERE 🌟
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)', // Corrected 90-deg to 90deg
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
                        }}
                    >
                        <img
                            src={ProfilePic}
                            alt="Saurav Deep"
                            loading="lazy"
                            className='w-full h-full object-cover'
                            style={{
                                // Ensuring the image remains circular inside the tilting element
                                borderRadius: '50%'
                            }}
                        />
                    </Tilt>
                </div>

            </div>

        </section>
    );
}

export default About;
