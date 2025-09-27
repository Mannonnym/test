import { Route, Routes } from "react-router"
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Creatpage";
import NoteDetailpage from "./pages/NoteDetailpage";
import toast from "react-hot-toast"
const App=()=>{
return (
  <div data-theme="forest">
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/create" element={<Createpage/>}/>
      <Route path="/note/:id" element={<NoteDetailpage/>}/>
    </Routes>
  </div>
)

}
export default App;