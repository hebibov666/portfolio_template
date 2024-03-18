import React from 'react';

function Skills() {
   //Demo  Skills data
   const skills = [
      {
         skill_name: "Figma", // Skill name
         skill_img: "./figma.svg" // Skill icon image
      },
      {
         skill_name: "Sketch", // Skill name
         skill_img: "./sketch.svg" // Skill icon image
      },
      {
         skill_name: "React", // Skill name
         skill_img: "./react.svg" // Skill icon image
      },
      {
         skill_name: "Javascript", // Skill name
         skill_img: "./js.svg" // Skill icon image
      },
      {
         skill_name: "Css", // Skill name
         skill_img: "./css.png" // Skill icon image
      },
      {
         skill_name: "Php", // Skill name
         skill_img: "./php.png" // Skill icon image
      }
   ];

   return (
      <div id="skills" className="flex flex-col gap-[30px] items-center justify-center pb-[70px]">
         {/* Skills title */}
         <div>
            <span className="position-text text-4xl w-full text-center flex justify-center font-bold">My Skills</span>
         </div>
         {/* Skills grid */}
         <div className="grid w-[70%] max-[447px]:w-[80%] grid-cols-3 gap-[10px] max-[370px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill,index) => {
               return (
                  <div key={index} className="w-1/1 gap-[10px] flex flex-col items-center">
                     {/* Skill icon */}
                     <div className="w-[100px] h-[100px]  bg-[#0A0A0A] rounded-[15px] flex items-center justify-center">
                        <img src={skill.skill_img} className="w-[50%] h-[50%]" alt={skill.skill_name}></img>
                     </div>
                     {/* Skill name */}
                     <h1 className="text-white title">{skill.skill_name}</h1>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Skills;
