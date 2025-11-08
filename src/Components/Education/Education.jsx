import { education } from "../../Constants"

function Education() {

     const SKILLS_BACKGROUND_GRADIENT =
        'linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%), linear-gradient(141.27deg, rgba(0,70,209,0.15) 0%, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)';

    return (
        <section
            id="education"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans clip-path-custom-2"

            style={{
                backgroundImage: SKILLS_BACKGROUND_GRADIENT,
                paddingTop: '2rem',
            }}
        >
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    My education journey has been all about learning, exploring, and building with technology.
                </p>
            </div>

            {/* Education Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 w-1 bg-white h-full "></div>
                
                {/* Education Entries */}
                {education.map((edu, index) => (
                    <div
                        key={edu.id}
                        className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                            }`}
                    >
                        {/* Content Section (The styled content box) */}
                        <div
                            className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                            ${index % 2 === 0 ? "sm:mr-44" : "sm:ml-44"} ml-8 transform transition-transform duration-300 hover:scale-105`}
                        >
                            {/* Flex Container for text (Degree, School, Grade, Date, Desc) */}
                            <div className="flex flex-col justify-between">
                                <div className="text-xl sm:text-2xl font-semibold text-white">
                                    {edu.degree}
                                </div>
                                <h4 className="text-md sm:text-sm text-gray-300">
                                    {edu.school}
                                </h4>
                            </div>

                            {/* Date */}
                            <p className="text-sm text-gray-500 mt-2 mb-4">
                                {edu.date}
                            </p>
                            
                            {/* NEW: Grade and Description */}
                            <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education