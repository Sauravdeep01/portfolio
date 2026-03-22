import React, { useState, useEffect, useRef } from 'react';
import { projects, SkillsInfo, education, achievements, certificates } from '../../Constants';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi 👋, want to know about Saurav Deep?", isBot: true }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const clearChat = () => {
        setMessages([
            { text: "Hi 👋, want to know about Saurav Deep?", isBot: true }
        ]);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (text) => {
        const userMsg = text || input;
        if (!userMsg.trim()) return;

        setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
        setInput('');

        // Simple bot logic
        setTimeout(() => {
            const reply = getBotResponse(userMsg.toLowerCase());
            setMessages(prev => [...prev, { text: reply, isBot: true }]);
        }, 600);
    };

    const getBotResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        // 1. Checks for specific project names
        for (const proj of projects) {
            const keywords = proj.title.toLowerCase().split(' ').filter(w => w.length > 3 && !['website', 'system', 'app'].includes(w));
            if (keywords.some(kw => lowerQuery.includes(kw))) {
                return `"${proj.title}" is ${proj.description.charAt(0).toLowerCase() + proj.description.slice(1)} It was built using: ${proj.tags.join(', ')}. Ask me about another project or check out its live demo in the Projects section!`;
            }
        }

        // 2. Generic project inquiry
        if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('portfolio') || lowerQuery.includes('what have you built')) {
            const projectNames = projects.map(p => p.title).join(', ');
            return `I've built several major projects, including: ${projectNames}. Ask me about any of these specifically (e.g., "Tell me about Confess Hub") to learn more about its features and the tech stack used!`;
        }

        // 3. Certificates query
        if (lowerQuery.includes('certificate') || lowerQuery.includes('certification') || lowerQuery.includes('course')) {
            const certNames = certificates.map(c => `${c.title} (from ${c.issuer})`).join(', ');
            return `I have earned several course certificates, including: ${certNames}. You can view the actual certificates in the Certificates section!`;
        }

        // 4. Skills inquiry
        if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack') || lowerQuery.includes('language') || lowerQuery.includes('tool')) {
            const frontend = SkillsInfo.find(s => s.title === 'Frontend')?.skills.map(s => s.name).join(', ');
            const backend = SkillsInfo.find(s => s.title === 'Backend')?.skills.map(s => s.name).join(', ');
            const languages = SkillsInfo.find(s => s.title === 'Languages')?.skills.map(s => s.name).join(', ');
            return `I am proficient in a wide range of technologies! \nFrontend: ${frontend}. \nBackend: ${backend}. \nProgramming Languages: ${languages}. I specialize heavily in the MERN stack.`;
        }

        // 5. Education / Background
        if (lowerQuery.includes('education') || lowerQuery.includes('college') || lowerQuery.includes('degree') || lowerQuery.includes('study') || lowerQuery.includes('university') || lowerQuery.includes('school')) {
            const allEd = education.map(e => `${e.degree} at ${e.school}`).join('. Before that, I completed my ');
            return `My educational background: I did my ${allEd}. I have a strong foundation in core computer science subjects.`;
        }

        // 6. Achievements / DSA / Coding profiles
        if (lowerQuery.includes('achievement') || lowerQuery.includes('dsa') || lowerQuery.includes('leetcode') || lowerQuery.includes('codechef') || lowerQuery.includes('rating') || lowerQuery.includes('problem')) {
            const text = achievements.map(a => `${a.title}: ${a.description}`).join(' ');
            return `Here are some of my proudest achievements: ${text}`;
        }

        // 7. Experience
        if (lowerQuery.includes('experience') || lowerQuery.includes('year') || lowerQuery.includes('background') || lowerQuery.includes('internship') || lowerQuery.includes('job')) {
            return "I have 2+ years of hands-on experience in software development and full-stack web engineering. I focus on building highly scalable, high-performance web applications.";
        }

        // 8. Contact
        if (lowerQuery.includes('contact') || lowerQuery.includes('hire') || lowerQuery.includes('reach') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('linkedin') || lowerQuery.includes('github')) {
            return "You can easily reach me via the Contact section below, or connect with me through my LinkedIn or GitHub links provided there. I am currently open to work and new opportunities!";
        }

        // 9. About / Identity / Greetings
        if (lowerQuery.includes('about you') || lowerQuery.includes('about saurav') || lowerQuery.includes('about me') || lowerQuery.includes('who are you') || lowerQuery.includes('who is saurav')) {
            return "I am the SD Assistant! Saurav Deep is a passionate Full Stack Developer specializing in the MERN stack. He focuses on creating clean, scalable code and seamless user experiences.";
        }
        if (lowerQuery.includes('hello') || lowerQuery.includes('hi ') || lowerQuery === 'hi') {
            return "Hello there! 👋 How can I help you today? You can ask me about Saurav's projects, skills, achievements, education, or certificates!";
        }

        // 10. Default fallback
        return "That's an interesting question! I am trained to answer questions specifically about Saurav's portfolio. Try asking about his 'skills', 'projects', 'certificates', 'education', or 'achievements'.";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-[#1a1a2e] w-80 sm:w-96 min-h-[400px] rounded-2xl shadow-[0_5px_40px_rgba(130,69,236,0.3)] border border-white/10 mb-5 overflow-hidden flex flex-col transform transition-all duration-300 origin-bottom-right">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#8245ec] to-[#a855f7] p-4 flex justify-between items-center shadow-md z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#8245ec] font-black text-lg shadow-inner">
                                SD
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm tracking-wide">SD Assistant</h3>
                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-green-400 border border-green-200 shadow-[0_0_5px_#4ade80] animate-pulse"></span>
                                    <span className="text-white/90 text-[10px] font-semibold tracking-wider">ONLINE</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            {messages.length > 1 && (
                                <button onClick={clearChat} title="Clear Chat" className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                </button>
                            )}
                            <button onClick={toggleChat} title="Close Chat" className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors focus:outline-none">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="h-80 p-5 overflow-y-auto flex flex-col gap-4 bg-white/5 backdrop-blur-sm custom-scrollbar relative">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.isBot ? 'bg-white/10 border border-white/5 text-gray-200 rounded-tl-sm' : 'bg-gradient-to-r from-[#8245ec] to-[#a855f7] text-white rounded-tr-sm'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        
                        {/* Suggested Questions (only show initially) */}
                        {messages.length === 1 && (
                            <div className="mt-4 animate-fade-in">
                                <p className="text-[10px] text-gray-400 mb-2.5 font-bold tracking-widest uppercase">Suggested Prompts</p>
                                <div className="flex flex-wrap gap-2">
                                    {['About Me', 'Skills', 'Projects', 'Contact'].map((suggestion) => (
                                        <button 
                                            key={suggestion} 
                                            onClick={() => handleSend(suggestion)}
                                            className="px-4 py-1.5 text-xs font-medium border border-white/20 text-gray-300 hover:border-[#8245ec] hover:bg-[#8245ec] hover:text-white transition-all duration-300 rounded-full shadow-sm"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-[#111122]/90 border-t border-white/10 flex items-center gap-2 relative z-10 backdrop-blur-md">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask me about Saurav..." 
                            className="flex-1 bg-white/5 border border-white/10 rounded-full text-sm text-white placeholder-gray-500 outline-none px-4 py-2.5 focus:border-[#8245ec]/50 transition-colors"
                        />
                        <button 
                            onClick={() => handleSend()}
                            className="bg-gradient-to-r from-[#8245ec] to-[#a855f7] hover:scale-105 p-2.5 rounded-full text-white transition-all shadow-md focus:outline-none flex-shrink-0"
                        >
                            <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button 
                onClick={toggleChat}
                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(130,69,236,0.6)] hover:scale-110 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300 focus:outline-none z-50 border-2 border-transparent hover:border-white/20"
            >
                {isOpen ? (
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
