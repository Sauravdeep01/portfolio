import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt'
import ProfilePic from '../../assets/Profile_Image.png'

function About() {
    return (
        <section
            id='about'
            className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
        >
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* Left Side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:mr-16'>
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
                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                        I am a versatile Fullstack Developer constantly expanding my skillset within the MERN ecosystem. While deeply proficient in MongoDB, Express, React, and Node.js, I bring a keen eye for modern UI/UX design and clean architecture to every project. My goal is to craft highly responsive interfaces while maintaining the security and performance required of enterprise-level applications.
                    </p>

                    {/* Resume button */}
                    <a
                        href='/Saurav_Developer_CV.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block text-white py-3 px-8 rounded-full mt-0 text-lg font-bold transition duration-300 transform hover:scale-105'
                        style={{
                            background: 'linear-gradient(90-deg, #8245ec, #a855f7',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec'
                        }}>
                        Download CV
                    </a>
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
