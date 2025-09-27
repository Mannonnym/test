import { useState } from "react";
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
const Homepage=()=>{
    const [isRateLimited,setisRateLimited]=useState(true)
    const [Notes,setNotes]=useState([])
    const [Loading,setLoading]=useState(true)
return (
  <div className="min-h-screen">
    <Navbar />
    {isRateLimited && <RateLimitedUI/>}

    </div>
)

}
export default Homepage;