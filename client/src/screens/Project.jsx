const Projects = () => {
  const projects =[
    {
        title: "E-commerce Website",
        description: 
          "Designed and developed a full-stack e-commerce web application using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse products, add items to a cart, and place orders, offering a simple and responsive shopping experience. Features include user authentication, product search, and category filtering. Built with a clean, modern UI and structured backend API, the application ensures smooth navigation, secure login, and efficient data handling. Fully responsive and scalable, it provides a consistent user experience across desktop and mobile devices.",
        demoLink: "project-link",
        repoLink:  "#"
    }
  ];
  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6 sm:px-12 lg:px-16  dark:bg-white dark:text-black ">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">
                My <span className="text-blue-400">Projects</span>
            </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:px-28 gap-10 ">
            {projects.map((project,index) => (
              <div key={index} className=" bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 px-30 dark:bg-white dark:text-black">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">{project.title}
                </h3>
                <p className="text-lg mb-4 ">{project.description} </p> 
                <div className="flex justify-between">
                    <a href={project.repoLink} target="_blank" rel="noreffer noreffer " className="text-blue-400 underline">
                        GitHub Repo 
                    </a> 
                </div>   
              </div>
            ))}
        </div>
        </div>
    </section>
  );
}; 

export default Projects;
