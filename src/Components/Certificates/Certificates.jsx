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
        <>
            <style jsx>{`
                .flip-card-container {
                    perspective: 1000px;
                }
                
                .flip-card {
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }
                
                .flip-card-container:hover .flip-card {
                    transform: rotateY(180deg);
                }
                
                .flip-card-front,
                .flip-card-back {
                    backface-visibility: hidden;
                }
                
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                
                .backface-hidden {
                    backface-visibility: hidden;
                }
            `}</style>
            
            <section id="certificates" className="py-16 px-[8vw] md:px-[4vw] lg:px-[12vw] font-sans scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white uppercase tracking-wider">Certificates</h2>
                <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-medium">
                    Showcasing my academic and professional achievements through continuous learning.
                </p>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((cert) => (
                    <div key={cert.id} className="flip-card-container h-80">
                        <div className="flip-card relative w-full h-full">
                            {/* Front of card - Certificate Image */}
                            <div className="flip-card-front absolute w-full h-full backface-hidden">
                                <a
                                    href={cert.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative bg-[#00081f] border border-gray-800 rounded-2xl overflow-hidden w-full h-full block transition-all duration-500 hover:border-[#8245ec] hover:shadow-[0_0_30px_rgba(130,69,236,0.2)]"
                                >
                                    {/* Image Container */}
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={getEmbedLink(cert.image)}
                                            alt={cert.title}
                                            loading="lazy"
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                            onError={(e) => {
                                                e.target.src = "https://via.placeholder.com/400x300?text=Certificate";
                                            }}
                                        />
                                        
                                        {/* Full Title Always Visible */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <h3 className="text-xl font-bold text-white line-clamp-2">
                                                {cert.title}
                                            </h3>
                                        </div>
                                    </div>

                                                                    </a>
                            </div>

                            {/* Back of card - Detailed Information */}
                            <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180">
                                <div className="bg-gray-900 border border-gray-600 rounded-2xl p-6 h-full flex flex-col justify-between shadow-[0_0_40px_rgba(31,41,55,0.8)]">
                                    <div className="text-center space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                                {cert.title}
                                            </h3>
                                        </div>
                                        
                                        <div className="space-y-3 text-white text-base">
                                            <p><span className="font-semibold">Organization:</span> {cert.issuer}</p>
                                            <p><span className="font-semibold">Date:</span> {cert.date}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col space-y-2">
                                        <a
                                            href={cert.image}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2 text-base"
                                        >
                                            <span>View Certificate</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <p className="text-gray-400 text-sm text-center">Hover to flip back</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Certificates;
