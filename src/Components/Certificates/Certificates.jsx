import React from 'react';
import { certificates } from '../../Constants';

function Certificates() {
    // Helper to convert Google Drive links to direct image links
    const getEmbedLink = (link) => {
        if (!link) return "";
        if (link.includes("drive.google.com/file/d/")) {
            const fileId = link.split("/d/")[1].split("/")[0];
            return `https://lh3.googleusercontent.com/d/${fileId}`;
        }
        // For folders or other links, return a neutral placeholder or the link itself
        if (link.includes("folders")) {
            return "https://via.placeholder.com/400x300?text=View+Folder";
        }
        return link;
    };

    return (
        <section id="certificates" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans scroll-mt-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white uppercase tracking-wider">Certificates</h2>
                <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-medium">
                    Showcasing my academic and professional achievements through continuous learning.
                </p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert) => (
                    <a
                        key={cert.id}
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-[#00081f] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#8245ec] hover:shadow-[0_0_30px_rgba(130,69,236,0.2)]"
                    >
                        {/* Image Container with Overlay */}
                        <div className="h-52 overflow-hidden relative">
                            <img
                                src={getEmbedLink(cert.image)}
                                alt={cert.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/400x300?text=Certificate";
                                }}
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#8245ec]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="bg-white text-[#8245ec] px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    View Link
                                </span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-[#8245ec] transition-colors">
                                {cert.title}
                            </h3>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-gray-400 font-medium text-sm mb-1">{cert.issuer}</p>
                                    <p className="text-gray-500 text-xs font-semibold">{cert.date}</p>
                                </div>
                                <div className="text-[#8245ec]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Certificates;
