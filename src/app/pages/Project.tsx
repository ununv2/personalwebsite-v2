import React, { useEffect, useState } from "react";
import Image from 'next/image'

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (

    <div id="project" className='w-screen min-h-screen z-50 bg-cover bg-center' style={{ backgroundImage:`url('/bg3.png')` }}>
      {/* Title */}
        <div data-aos="fade-up" className='w-full pt-12 sm:pt-20 sm:mb-15'>
          <h2 className="flex items-center justify-center text-2xl md:text-3xl font-bold text-white mb-5 sm:mb-10 md:mb-16">
            <span className="w-10 md:w-[15vw] h-0.5 bg-white mr-4"></span>
              My Recent Projects
            <span className="w-10 md:w-[15vw] h-0.5 bg-white ml-4"></span>
          </h2>
        </div>
      {/* Projects Cards*/}
      <div data-aos="zoom-in-down" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-12 md:max-w-7xl mx-auto p-6 sm:p-5'>
        {projects.map((project) => (
          <div key={project.id} className="bg-white bg-opacity-40 relative flex flex-col rounded-lg p-6 m-[2em] md:m-0 hover:scale-105 transition-transform duration-300">
            {/* Image */}
            <div className='w-full md:h-[20em] overflow-hidden rounded-lg'>
              <Image className="w-full h-full object-fill" 
                src={project.img} 
                alt={project.title}
                width="500"
                height="500"/>
            </div>
            {/* Content */}
            <div className='p-2 pt-6 mb-12'>
              <h3 className='text-xl text-white font-bold mb-2'>{project.title}</h3>
              <p className='text-white'>{project.description}</p>
            </div>
            {/* Button */}
            <div className='absolute bottom-6 left-4'>
              {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition duration-300"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="text-gray-500">No Link Available</span>
                )}
            </div>
          </div>
        ))}

        
      </div>
      
      

        
    </div>
  )
}
