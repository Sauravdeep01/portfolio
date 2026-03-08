import React, { useState, useRef, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../Constants';

function Projects() {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const scrollPos = useRef(0);
    const requestRef = useRef(null);

    const animate = () => {
        if (!isHovered && sliderRef.current) {
            scrollPos.current += 0.8; // Adjusted speed to be closer to original CSS 30s marquee
            const maxScroll = sliderRef.current.scrollWidth / 2;
            if (scrollPos.current >= maxScroll) {
                scrollPos.current = 0;
            }
            sliderRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
        }
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isHovered]);

    useEffect(() => {
        const handleWheel = (e) => {
            if (isHovered && sliderRef.current) {
                // Only scroll the slider if the user is performing a horizontal gesture
                if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                    // Prevent default only for horizontal scroll to avoid browser history navigation
                    e.preventDefault();

                    scrollPos.current += e.deltaX * 0.8;

                    const maxScroll = sliderRef.current.scrollWidth / 2;

                    // Wrap around logic for seamless loop
                    if (scrollPos.current >= maxScroll) {
                        scrollPos.current -= maxScroll;
                    } else if (scrollPos.current < 0) {
                        scrollPos.current += maxScroll;
                    }

                    sliderRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
                }
                // Vertical scrolling (deltaY) is ignored here, allowing the page to scroll naturally
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }
        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [isHovered]);

    return (
        <section
            id='projects'
            className='py-24 font-sans relative scroll-mt-10 overflow-hidden'
        >
            {/* Section Title */}
            <div className='px-[12vw] md:px-[7vw] lg:px-[20vw] text-center mb-16'>
                <h2 className='text-4xl font-bold text-white uppercase tracking-widest'>
                    Projects
                </h2>
                <div className='w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full shadow-[0_0_10px_purple]'></div>
                <p className='text-gray-400 mt-6 text-lg max-w-2xl mx-auto'>
                    A showcase of the projects I have worked on, highlighting my skills
                    and experience in various technologies
                </p>
            </div>


            {/* Project Slider Container */}
            <div
                ref={containerRef}
                className='relative w-full py-10 px-4 md:px-10 overflow-hidden'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Visual fading edges - Softer and more subtle */}
                <div className='absolute left-0 top-0 bottom-0 w-[5%] bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none'></div>
                <div className='absolute right-0 top-0 bottom-0 w-[5%] bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none'></div>

                <div
                    ref={sliderRef}
                    className='flex gap-10 w-max'
                    style={{ willChange: 'transform' }}
                >
                    {/* Render projects twice for seamless loop */}
                    {[...projects, ...projects].map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className='w-[280px] md:w-[350px] flex-shrink-0 border border-white/10 bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:border-purple-500/50 hover:shadow-purple-500/20 hover:-translate-y-3 transition-all duration-500 group relative'
                        >
                            {/* Glow Effect on Hover */}
                            <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur'></div>

                            {/* 1. Image */}
                            <div className='relative h-52 overflow-hidden'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80'></div>

                                {/* Overlay Buttons on Card Hover */}
                                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-20'>
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='p-2.5 bg-gray-800/90 text-white rounded-full hover:bg-purple-600 transition-all hover:scale-110 shadow-xl border border-white/10'
                                        title='View Code'
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.webapp}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='p-2.5 bg-gray-800/90 text-white rounded-full hover:bg-purple-600 transition-all hover:scale-110 shadow-xl border border-white/10'
                                        title='Live Demo'
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* 2. Content */}
                            <div className='p-6 relative'>
                                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors'>
                                    {project.title}
                                </h3>
                                <p className='text-gray-400 mb-6 text-xs line-clamp-3 leading-relaxed font-medium'>
                                    {project.description}
                                </p>
                                <div className='flex flex-wrap gap-2.5'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className='text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 bg-purple-500/5 text-purple-400 border border-purple-500/10 rounded-md group-hover:border-purple-500/40 transition-colors'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Projects