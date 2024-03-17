//Review Section component. You can edit Reviews section in this component
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
function Reviews(){
    //Demo data for reviews. Change this data with own real review data
    const reviews=[
        {
            name:"Tim Bailey",
            position:"Senior Frontend developer",
            img:"./man1.avif",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt feugiat scelerisque. Pellentesque sed lectus ut justo molestie ultrices sed non felis. Donec eget sapien neque. Cras rhoncus nunc sit amet ligula sodales, sed elementum ex varius. Nulla viverra dictum arcu. "
        },
        {
            name:"Brian Connor",
            position:"Senior Backend developer",
            img:"./man2.avif",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt feugiat scelerisque. Pellentesque sed lectus ut justo molestie ultrices sed non felis. Donec eget sapien neque. Cras rhoncus nunc sit amet ligula sodales, sed elementum ex varius. Nulla viverra dictum arcu. "
        },
        {
            name:"Julian Carlos",
            position:"Senior UX designer",
            img:"./man3.avif",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt feugiat scelerisque. Pellentesque sed lectus ut justo molestie ultrices sed non felis. Donec eget sapien neque. Cras rhoncus nunc sit amet ligula sodales, sed elementum ex varius. Nulla viverra dictum arcu. "
        },
        {
            name:"Steve Alison",
            position:"Senior Software Engineer",
            img:"./man4.jpg",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt feugiat scelerisque. Pellentesque sed lectus ut justo molestie ultrices sed non felis. Donec eget sapien neque. Cras rhoncus nunc sit amet ligula sodales, sed elementum ex varius. Nulla viverra dictum arcu. "
        }
    ]
    return(
        <div data-aos="fade-right" id='reviews' className="w-full flex flex-col items-center p-[10px] gap-[40px] pb-[60px]">
<div >
    <span className="position-text text-4xl w-full text-center flex justify-center font-bold">Reviews</span>
</div>
<Swiper
 spaceBetween={50}
 modules={[Navigation, Pagination, Scrollbar, A11y]}
 className='w-full h-[420px] flex justify-center pb-[70px] '
 pagination={true}
 breakpoints={{
    300:{
slidesPerView:1,
    },
    590:{
slidesPerView:2,
    },
    1000:{
      slidesPerView:3
    }
   }}
 loop={true}
>
    {reviews.map(review=>{
        return <SwiperSlide>
        <div  className='w-1/1 h-auto pb-[20px] bg-[#0A0A0A] p-[20px] rounded-[10px] flex flex-col items-center gap-[20px]'>
<div className='flex justify-center items-center w-[120px] h-[120px]'>
    <img src={review.img} className='w-full h-full rounded-full object-cover' alt=''></img>
</div>
<div className='flex flex-col items-center gap-[5px]'>
    <h1 className='text-white font-bold'>{review.name}</h1>
    <p className='text-white'>{review.position}</p>
    <p className='text-[#9B9B9B]'>{review.message}</p>
</div>
        </div>
    </SwiperSlide>
    })}
</Swiper>

        </div>
    )
}
export default Reviews