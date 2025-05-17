import React from "react";
import shelby from "../assets/portfolio-image.jpg";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section id="home" className=" h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6  dark:bg-white dark:text-black text-center md:pt-1 ">
            <div className="mb-6">
                <img src={shelby} alt="Profile" className="w-56 h-56 object-cover rounded-full shadow-lg border-1 border-blue-100" />
            </div>

            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm <span className="text-blue-400">Sameer Ansari </span> 
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    I'm a passionate and dedicated{" "}
                    <span className="text-blue-400"> MERN stack developer</span>  with strong knowledge of modern JavaScript, REST APIs, and front-end development 
                    using React. Comfortable working across the full development stack and continuously improving through coding challenges, projects, and learning new tools. 
                    Seeking a role where I can turn my skills into impactful solutions.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                    <Link to="contact" smooth={true} duration={500} className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-500 hover:text-white transition">
                     Contact Me </Link>
                     <a href="/sameer-ansari.pdf"
                     download="sameer-ansari.pdf"
                     className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition">
                    Resume
                    </a> 
                </div>
            </div>
        </section>
    );
};

export default Hero;
