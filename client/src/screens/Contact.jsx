import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const contactDetails = [
        {
            type: "Email",
            value: "vpstudent1@gmail.com",
            link: "mailto:vpstudent1@gmail.com",
            icon: <FaEnvelope className="text-blue-400 text-xl" />
        },
        {
            type: "phone",
            value: "=91 9653197252",
            link: "tel:+919653197252",
            icon: <FaPhoneAlt className="text-blue-400 text-xl" />,
        },
        {
            type: "GitHub",
            value: "github.com/Sameer014",
            link: "https://github.com/Sameer014",
            icon: <FaGithub className="text-blue-400 text-xl" />,
        },
        {
            type: "LInkedIn",
            value: "linkedin.com/in/sameer014",
            link: "https://www.linkedin.com/in/sameer014",
            icon: <FaLinkedin className="text-blue-400 text-xl" />,
        },
    ];

    return (
        <section id="contact" className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-16  dark:bg-white dark:text-black">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">
                    Get in <span className="text-blue-400">Touch</span>
                </h2>
                <ul className="space-y-6">
                    {contactDetails.map((detail, i) => (
                        <li key={i} className="flex items-center gap-4 justify-center text-lg">
                            {detail.icon}
                            <a href={detail.link}
                               target="_blank"
                               className="text-white underline hover:text-blue-400 transition dark:bg-white dark:text-black">
                                {detail.value}
                               </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
