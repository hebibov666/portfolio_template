import ContactInfo from "./ContactInfo"

function Sidebar(){
    return(
<div id="home" className="icon w-full  min-h-auto pt-[40px] pb-[40px] flex max-[655px]:flex-col max-[655px]:flex-col-reverse  gap-[40px] items-center rounded-[10px] pt-[10px]">
    <div className="flex flex-col gap-[30px] pl-[30px] max-[655px]:pl-[10px] basis-[50%]">
    <div className="flex flex-col gap-[15px] items-start">
        <h1 className="text-white font-bold text-6xl max-[935px]:text-4xl">John Doe</h1>
        <span className="position-text text-white text-6xl max-[935px]:text-4xl">Web Developer</span>
        <p className="text-[#D3D3D3] text-[14px] lg:text-[15px] max-[935px]:text-[12px] sm:text-[10px] min-[1900px]:text-[18px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <ContactInfo/>
    </div>
   <div className="w-[50%] max-[655px]:w-full flex items-center justify-center">
   <div className="flex justify-center items-center max-[655px]:w-[50%] lg:w-[50%] lg:h-[30%] md:w-[70%] md:h-[45%] h-[35%] sm:w-[70%] sm:h-[45%] rotate-[5deg] hover:rotate-0 transition-all duration-500 border-[2px] border-[#FFD700] rounded-[20px]">
        <img src="./manlogo.png" className="w-full h-full object-cover rounded-[20px]" alt=""></img>
    </div>
   </div>
</div>
    )
}
export default Sidebar