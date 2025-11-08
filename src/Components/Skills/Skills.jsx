// Corrected import path
import { SkillsInfo } from "../../Constants";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'

function Skills() {
    // Define the complex gradient string separately for cleaner code
    const SKILLS_BACKGROUND_GRADIENT =
        'linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0.15) 0%, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)';

    return (
        <section
            id="skills"
            className="
                pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans 
                relative z-20 clip-path-custom
            "
            style={{
                backgroundImage: SKILLS_BACKGROUND_GRADIENT,
                paddingTop: '2rem',
            }}
        >

            {/*  Seamless Divider (Reverse Fade Blend) */}
            <div
                className="absolute top-0 left-0 w-full h-16 pointer-events-none"
                aria-hidden="true"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, #000000, transparent)',
                    zIndex: 30,
                }}
            />


            {/* Section Title */}
            <div className="text-center mb-8 pt-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">A blend of technologies and skills that define my work and passion for development.</p>
            </div>


            {/* Skills Category */}
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
                {SkillsInfo.map((category) => (
                    <div
                        key={category.title}
                        className="bg-gray-900/50 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white/10
                        shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                            {category.title}
                        </h3>


                        {/* Skill items - 3 per row on larger screens */}
                        <Tilt
                                perspective={1500} 
                                glareEnable={true}
                                glareMaxOpacity={0.1}
                                glareColor="#ffffff"
                                scale={1.01} // Very slight scale
                                transitionSpeed={600}
                                className="w-full" // Ensure Tilt covers the full width
                            >
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center bg-transparent border-2 border-gray-700 rounded-3xl space-x-2 py-2 px-2 text-center justify-start 
                                                transition-all duration-300 ease-in-out 
                                                hover:border-[#8245ec] hover:scale-105 hover:shadow-lg hover:shadow-[#8245ec]/50"
                                            // Individual item Tilt removed, hover effect restored
                                        >
                                            <img
                                                src={skill.logo}
                                                alt={`${skill.name} logo`}
                                                className="w-6 h-6 sm:w-8 sm:h-8"
                                            />
                                            <span 
                                                className="text-xs truncate text-gray-300"
                                            >
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </Tilt>


                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills
