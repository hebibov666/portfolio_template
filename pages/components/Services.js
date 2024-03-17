import 'animate.css';
function Services(){
   //Demo data for services. You can change this data with own data or request api endpoint and get data
    const services=[
        {
            service_name:"Front-end development",
            service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            service_name:"Back-end development",
            service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            service_name:"App development",
            service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            service_name:"UI/UX Design",
            service_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]
    return(
        <div id='services' className="w-full flex flex-col p-[10px] gap-[40px] pb-[60px]">
<div >
    <span className="position-text text-4xl w-full text-center flex justify-center font-bold">My Services</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  place-items-center gap-[20px] w-full justify-center">
{services.map((service,index)=>{
    return <div key={index} className="animate__animated animate__bounce service-box flex flex-col gap-[10px] p-[20px]  w-full bg-[#0A0A0A] border-[2px] border-[#252525] hover:border-white rounded-[7px]">
    <h1 className="text-xl text-white font-bold">{service.service_name}</h1>
    <p className="text-[#9B9B9B] text-[13px]">{service.service_description}</p>

</div>
})}
</div>
        </div>
    )
}
export default Services