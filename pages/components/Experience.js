function Experience(){
    //Demo data for experience
    const experince=[
        {
            title:"Frontend developer",
            year: "2022 - present",
            company:"Zsolution, USA"
        },
        {
            title:"Backend developer",
            year: "2021 - 2022",
            company:"Dynamic, USA"
        },
        {
            title:"UI designer",
            year: "2029 - 2021",
            company:"Scrum Technologies, USA"
        }
    ]
    return(
<div className="flex flex-col items-center gap-[30px]">
    <span className="position-text flex text-4xl font-bold">Experience</span>
{experince.map((item,index)=>{
    return <div key={index} data-aos="zoom-in-up" className=" experince-box flex flex-col gap-[10px] w-[90%] p-[20px] bg-[#0A0A0A] border-[2px] border-[#252525] rounded-[10px]">
    <h1 className="text-xl text-yellow-600 font-bold">{item.year}</h1>
    <span className="text-xl font-bold text-white">{item.title}</span>
    <span className="text-[#9B9B9B]">{item.company}</span>
    </div>
})}
</div>
    )
}
export default Experience