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
                            className='w-[280px] md:w-[350px] h-[420px] flex-shrink-0 cursor-pointer group relative [perspective:1000px]'
                        >
                            {/* Glow Effect on Hover (positioned outside flipper to safely wrap the card) */}
                            <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-700 blur'></div>

                            {/* Flipper Container */}
                            <div className='w-full h-full relative transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-hover:-translate-y-3 rounded-2xl'>

                                {/* --- FRONT SIDE --- */}
                                <div className='absolute inset-0 [backface-visibility:hidden] flex flex-col border border-white/10 bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl z-20'>
                                    {/* 1. Image */}
                                    <div className='relative h-48 overflow-hidden flex-shrink-0'>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            loading="lazy"
                                            className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110'
                                        />
                                        { /* Date Badge */}
                                        <div className='absolute top-3 right-3 z-30 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full'>
                                            <span className='text-[10px] font-semibold text-purple-300 tracking-wider'>
                                                {project.date}
                                            </span>
                                        </div>
                                        <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80 z-10'></div>
                                    </div>

                                    {/* 2. Content */}
                                    <div className='p-6 md:p-8 flex flex-col justify-center items-center text-center flex-grow'>
                                        <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3'>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* --- BACK SIDE --- */}
                                <div className='absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-purple-500/50 bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl p-4 md:p-5 flex flex-col z-10'>

                                    <div className='flex-grow text-left flex flex-col min-h-0 overflow-hidden'>

                                        <h4 className='text-[11px] md:text-xs font-bold text-white mb-2 uppercase tracking-widest flex-shrink-0'>Features</h4>
                                        <ul className='list-disc list-outside ml-4 text-gray-300 text-[11px] md:text-xs leading-relaxed font-medium mb-3 space-y-1.5 pr-1'>
                                            {project.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>

                                        <div className='mt-2 flex-shrink-0'>
                                            <h4 className='text-[11px] md:text-xs font-bold text-white mb-2 uppercase tracking-widest'>Tech Stacks</h4>
                                            <div className='flex flex-wrap gap-2'>
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className='text-[9px] md:text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-md'
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className='flex items-center justify-between gap-3 mt-auto pt-3 border-t border-purple-500/20 flex-shrink-0'>
                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-[11px] md:text-xs font-semibold bg-gray-800 text-white rounded-md hover:bg-purple-600 transition-all shadow border border-white/10'
                                        >
                                            <Github size={14} /> Code
                                        </a>
                                        <a
                                            href={project.webapp}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-[11px] md:text-xs font-semibold bg-gray-800 text-white rounded-md hover:bg-purple-600 transition-all shadow border border-white/10'
                                        >
                                            <ExternalLink size={14} /> Demo
                                        </a>
                                    </div>
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