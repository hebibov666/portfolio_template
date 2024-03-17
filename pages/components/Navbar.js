import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import CallIcon from '@mui/icons-material/Call';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
function Navbar({nav}){
   const [activeItem,setActiveItem]=useState("#home")
 
  const listitems=[
    {
        href:"#home",
        icon:<HomeIcon/>
    },
    {
        href:"#services",
        icon:<MiscellaneousServicesIcon />
    },
    {
        href:"#skills",
        icon:<WbIncandescentIcon />
    },
    {
        href:"#portfolio",
        icon:<WorkIcon />
    },
    {
        href:"#education",
        icon:<SchoolIcon />
    },
    {
        href:"#reviews",
        icon:<WebStoriesIcon />
    },
    {
        href:"#contact",
        icon:<CallIcon />
    }
  ]
  
    return(
        <div className="fixed min-[700px]:top-[50%] translate-y-[-50%] right-[10px] max-[700px]:w-[90%] max-[700px]:h-[50px] max-[700px]:flex-row max-[700px]:right-0 max-[700px]:left-[50%] max-[700px]:bottom-[10px] max-[700px]:translate-y-0 max-[700px]:translate-x-[-50%] flex flex-col items-center justify-center gap-[30px] max-[406px]:gap-[20px] w-[50px] h-[400px] z-[9999] bg-black border-[2px] border-[#252525] rounded-full">
{listitems.map((item,index)=>{
    return <a key={index} href={item.href} onClick={()=>{setActiveItem(item.href)}} className={`${activeItem===item.href ? "text-yellow-600" : "text-white"}`} >{item.icon}</a>
})}
        </div>
    )
}
export default Navbar