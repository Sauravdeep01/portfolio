import { projects } from '../../Constants';

function Projects() {
    return (
        <section
            id='projects'
            className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
        >
            {/* Section Title ... (rest of the code) */}
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-white'>
                    PROJECTS
                </h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                <p className='text-gray-400 mt-4 text-lg font-semibold'>
                    A showcase of the projects I have worked on, highlighting my skills
                    and experience in various technologies
                </p>
            </div>


            {/* Project Grid */}
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
                    >
                        {/* 1. Image */}
                        <div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className='w-full h-48 object-cover rounded-t-xl' // Updated class for border radius
                            />
                        </div>
                        
                        {/* 2. Title, Description, and Tags (The Missing Part) */}
                        <div className='p-6'>
                            <h3 className='text-2xl font-bold text-white mb-3'>
                                {project.title}
                            </h3>
                            <p className='text-gray-400 mb-4 text-sm'>
                                {project.description}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className='text-xs font-semibold px-2 py-1 mr-2 mb-2 bg-[#251f38] text-purple-500 rounded-full'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects