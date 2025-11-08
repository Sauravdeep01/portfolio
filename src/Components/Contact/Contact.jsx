import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import emailjs from '@emailjs/browser'

function Contact() {

    const form = useRef();
    const [isSent, setIsSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8jwnt9b",
                "template_qa123gd",
                form.current,
                "Gd6XqkpC0CXzzM3sV"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset(); // Reset form fields after sending
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
                    toast.error("Error Sending Message.", error);
                    toast.error("Failed to send Message. Please Try Again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark',
                    });
                }
            )
    
    }

    return (
        <section
            id="contact"
            className="flex flex-col justify-center items-center py-24 px-[12vw] md:px-[7vw] ld:px-[20vw]"
        >

            <ToastContainer/>

            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">CONTACT</h2>
                <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    I'd love to hear from you-reach out for any opportunities or questions!
                </p>
            </div>


            {/* Contact Form */}
            <div class="mt-8 w-full max-w-md bg-[#00081f] p-6 rounded-lg shadow-lg border border-gray-700">
                <div class="className='text-xl font-semibold text-white text-center">
                    Connect With Me
                </div>

                <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
                    <input type="email" name="user_email" placeholder='Your Email' required
                        class="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    <input type="text" name="user_name" placeholder='Your Name' required
                        class="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    <input type="text" name="subject" placeholder='Subject' required
                        class="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
                    />
                    <textarea name="message" placeholder='Message' rows="4"
                        class="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500">
                    </textarea>

                    {/* Send Button */}
                    <button type='submit'
                        className='w-full bg-linear-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition'
                    >
                        Send
                    </button>
                </form>
            </div>

        </section>
    )
}

export default Contact