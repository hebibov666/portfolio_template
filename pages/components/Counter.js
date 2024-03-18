import CountUp from 'react-countup';
function Counter(){
    return(
        <div className="grid w-full  p-[10px] gap-[5px] md:grid-cols-3 sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 max-[465px]:grid-cols-2">
<div  className="flex gap-[10px] rounded-[5px] w-1/1 flex-col items-center  bg-[#282830] justify-center h-[80px]">
    <span className="text-[#FFD700] counter font-bold text-4xl"> <CountUp start={0} end={10} duration={5} />+</span>
    <h1 className="text-white counter">Years experience</h1> 
</div>
<div className="flex gap-[10px] rounded-[5px] w-1/1 flex-col items-center bg-[#282830] justify-center h-[80px]">
<span className="text-[#FFD700] counter font-bold text-4xl"> <CountUp start={0} end={100} duration={5} />+</span>
    <h1 className="text-white counter">Completed project</h1>
</div>
<div  className="flex gap-[10px] rounded-[5px] w-1/1 flex-col items-center  bg-[#282830] justify-center h-[80px]">
<span className="text-[#FFD700] counter font-bold text-4xl"> <CountUp start={0} end={140} duration={5} />+</span>
    <h1 className="text-white counter">Happy Customers</h1>
</div>
<div  className="flex gap-[10px] rounded-[5px] w-1/1 flex-col items-center p-[20px]  bg-[#282830] justify-center h-[80px]">
<span className="text-[#FFD700] counter font-bold text-4xl"> <CountUp start={0} end={20} duration={5} />+</span>
    <h1 className="text-white counter">Awards</h1>
</div>
        </div>
    )
}
export default Counter