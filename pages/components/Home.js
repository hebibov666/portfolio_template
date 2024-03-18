import Contact from "./Contact"
import Counter from "./Counter"
import Education from "./Education"
import Experience from "./Experience"
import Portfolio from "./Portfolio"
import Reviews from "./Reviews"
import Services from "./Services"
import Skills from "./Skills"

function HomePage(){
    return(
        <div className="icon  min-h-[100vh] w-full rounded-[10px] flex flex-col gap-[40px]">
<Counter/>
<Services/>
<Portfolio/>
<Skills/>
<div className="grid grid-cols-2 max-[683px]:grid-cols-1 max-[683px]:gap-[50px] pb-[40px]">
    <Experience/>
    <Education/>
</div>
<Reviews/>
<Contact/>
        </div>
    )
}
export default HomePage