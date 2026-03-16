import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, Instagram, ExternalLink } from 'lucide-react'
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'
import Reveal from '../Reveal'

function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                "service_8jwnt9b",
                "template_qa123gd",
                form.current,
                "Gd6XqkpC0CXzzM3sV"
            )
            .then(
                () => {
                    setIsLoading(false);
                    form.current.reset();
                    toast.success("Message sent successfully! ✅", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark',
                    });
                },
                (error) => {
                    setIsLoading(false);
                    toast.error("Error Sending Message.", error);
                }
            )
    }

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "sauravdeep1711@gmail.com",
            link: "mailto:sauravdeep1711@gmail.com"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+91 8789098931"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Location",
            value: "Bihar, India"
        }
    ]

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, link: "https://github.com/Sauravdeep01", name: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/saurav-deep-1b2853298/", name: "LinkedIn" },
        { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/behind__you.16/", name: "Instagram" },
    ]

    return (
        <section
            id="contact"
            className="relative py-24 px-[7vw] lg:px-[15vw] scroll-mt-24 overflow-hidden"
        >
            <ToastContainer />

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Get In <span className="text-[#8245ec]">Touch</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-purple-400 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            I'm always open to new opportunities, collaborations, or just a friendly chat.
                            Feel free to reach out!
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Info & Socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                                <MessageSquare className="text-[#8245ec]" /> Let's Connect
                            </h3>

                            <div className="grid gap-4">
                                {contactInfo.map((info, index) => {
                                    const isLink = !!info.link;
                                    const CardWrapper = isLink ? 'a' : 'div';
                                    
                                    return (
                                        <CardWrapper
                                            key={index}
                                            href={info.link}
                                            target={isLink ? "_blank" : undefined}
                                            rel={isLink ? "noopener noreferrer" : undefined}
                                            className={`group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${isLink ? 'hover:border-[#8245ec]/50 cursor-pointer' : ''}`}
                                        >
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#8245ec]/10 text-[#8245ec] group-hover:bg-[#8245ec] group-hover:text-white transition-all duration-300">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                                                <p className="text-white font-semibold group-hover:text-[#8245ec] transition-colors">{info.value}</p>
                                            </div>
                                        </CardWrapper>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#8245ec] hover:bg-[#8245ec]/20 transition-all"
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8245ec] to-blue-500 rounded-3xl blur opacity-20"></div>
                        <div className="relative bg-[#050414] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your name"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec]/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="your.email@example.com"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec]/50 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Hello Saurav, I'd like to talk about..."
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-[#8245ec] focus:ring-1 focus:ring-[#8245ec]/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-300 ${isLoading
                                        ? "bg-gray-700 cursor-not-allowed"
                                        : "bg-gradient-to-r from-[#8245ec] to-[#a855f7] hover:shadow-[0_0_20px_rgba(130,69,236,0.4)]"
                                        }`}
                                >
                                    {isLoading ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            Send Message <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
