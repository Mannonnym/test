import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI"
import axios from "axios"
const Homepage=()=>{
    const [isRateLimited,setisRateLimited]=useState(true)
    const [Notes,setNotes]=useState([])
    const [Loading,setLoading]=useState(true)
    useEffect(()=>{
      const fetshNotes=async ()=>{
        try {
        const res=await axios.get("http://localhost:5000/api/notes")
        console.log(res.data)
        setNotes(res.data)
        setLoading(false)

      } catch (error) {
        console.log("error")
      }
      }
      
  fetshNotes();


    },[])
return (
  <div className="min-h-screen">
    <Navbar />
    {isRateLimited && <RateLimitedUI/>}

    </div>
)

}
export default Homepage;