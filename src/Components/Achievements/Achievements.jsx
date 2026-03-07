import React from 'react';
import { achievements } from '../../Constants';

function Achievements() {
    return (
        <section id="achievements" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans scroll-mt-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white uppercase tracking-wider">Achievements</h2>
                <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-medium">
                    Recognitions and milestones that mark my professional journey.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map((item) => {
                    const Content = (
                        <div className="h-full flex flex-col p-8 bg-[#00081f] border border-gray-800 rounded-3xl transition-all duration-500 group-hover:border-[#8245ec] group-hover:shadow-[0_0_30px_rgba(130,69,236,0.15)] transform group-hover:-translate-y-2">
                            <div className="text-5xl mb-6 bg-[#0a122e] w-20 h-20 flex items-center justify-center rounded-2xl border border-gray-700 group-hover:border-[#8245ec] transition-colors duration-500 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#8245ec] transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800/50">
                                <span className="text-[#8245ec] font-bold text-sm tracking-widest uppercase">{item.date}</span>
                                {item.link ? (
                                    <div className="flex items-center text-[#8245ec] text-xs font-bold uppercase tracking-tighter">
                                        View Profile <span className="ml-1">↗</span>
                                    </div>
                                ) : (
                                    <div className="h-2 w-2 rounded-full bg-[#8245ec] animate-pulse"></div>
                                )}
                            </div>
                        </div>
                    );

                    return item.link ? (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block h-full outline-none focus:ring-2 focus:ring-[#8245ec] rounded-3xl"
                        >
                            {Content}
                        </a>
                    ) : (
                        <div key={item.id} className="group">
                            {Content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Achievements;
