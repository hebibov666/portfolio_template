import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function Portfolio() {
  // State to manage active category and filtered projects
  const [activeCategory, setActiveCategory] = useState("Website");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Categories and projects data
  const categories = ["Website", "Design", "App"];
  const projects = [
    { project_img: "./web1.png", project_url: "https://", category: "Website" },
    { project_img: "./web2.png", project_url: "https://", category: "Website" },
    { project_img: "./design.png", project_url: "https://", category: "Design" },
    { project_img: "./design2.jpg", project_url: "https://", category: "Design" }
  ];

  // Filtering projects based on active category
  useEffect(() => {
    setFilteredProjects(projects.filter(project => project.category === activeCategory))
  }, [activeCategory])

  // Function to filter projects based on category
  const filterProject = (category, index) => {
    setActiveCategory(category);
  }

  return (
    <div id='portfolio' className="flex flex-col gap-[30px] items-center justify-center pb-[70px]">
      {/* Portfolio title */}
      <div>
        <span className="position-text text-4xl w-full text-center flex justify-center font-bold">Portfolio</span>
      </div>
      {/* Category filter buttons */}
      <div className='w-full flex gap-[20px] justify-center items-center'>
        {categories.map((category, index) => (
          <span
            key={index}
            onClick={() => { filterProject(category, index) }}
            className={`text-white font-bold h-[30px] ${activeCategory === category ? "bg-yellow-600" : "none"} flex items-center justify-center rounded-[15px] w-[90px] transition-all duration-500`}
          >
            {category}
          </span>
        ))}
      </div>
      {/* Display filtered projects */}
      {filteredProjects.length > 0 ? (
        <div className='grid grid-cols-2 gap-[10px] max-[900px]:grid-cols-1'>
          {filteredProjects.map((project, index) => (
            <div key={index} data-aos="zoom-in-up" className='relative flex flex-col w-[98%] bg-black'>
              {/* Project image */}
              <div className='h-[350px] max-[500px]:h-[250px]'>
                <img src={project.project_img} className='h-full w-full object-cover' alt={`Project ${index + 1}`} />
              </div>
              {/* Live preview button */}
              <div className='absolute top-2 left-2 w-full h-[30px] left-0 top-0'>
                <a className='text-white w-[110px] h-[30px] font-bold bg-red-600 rounded-[5px] flex items-center justify-center cursor-pointer'>Live preview</a>
              </div>
              {/* Accordion for project description */}
              <Accordion className='bg-[#0A0A0A] w-1/1'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className='text-white font-bold text-[30px]' />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className='text-white font-bold '
                >
                  Project description
                </AccordionSummary>
                <AccordionDetails className='text-[#9B9B9B]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      ) : (
        // No projects found message
        <div className="pt-[50px] text-white font-bold flex justify-center w-full">
          <span className='text-center'>No projects found for the selected category.</span>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
