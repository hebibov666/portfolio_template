import React from 'react';

// Education component
function Education() {
    // Demo data for education. You can change this data with own education data or request api endpoint and get data
    const education = [
        {
            title: "Frontend Development", // Title of education
            course: "Coursera", // Course of education
            year: "2018 - 2019", // Year of education
        },
        {
            title: "Backend Development", // Title of education
            course: "Udemy", // Course of education
            year: "2019 - 2021", // Year of education
        },
        {
            title: "UI Design", // Title of education
            course: "University", // Course of education
            year: "2017 - 2018", // Year of education
        }
    ];

    return (
        <div id="education" className="flex flex-col items-center gap-[30px]">
            <span className="position-text flex text-4xl font-bold">Education</span>
            {education.map(item => {
                return (
                    // Education box
                    <div key={item.title} data-aos="zoom-in-up" className="experience-box flex flex-col gap-[10px] w-[90%] p-[20px] bg-[#0A0A0A] border-[2px] border-[#252525] rounded-[10px]">
                        <h1 className="text-xl text-yellow-600 font-bold">{item.year}</h1>
                        <span className="text-xl font-bold text-white">{item.title}</span>
                        <span className="text-[#9B9B9B]">{item.course}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default Education;
