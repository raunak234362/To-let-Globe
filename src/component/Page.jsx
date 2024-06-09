import { Route, Routes } from "react-router-dom"
import Homepage from "./landingpage/Homepage"
import NavBar from "./NavBar"
import Contact from "./contact/Contact"
import Service from "./service/Service"
import Blog from "./blog/Blog"


const Page = () => {
  return (
  <>
  
    <NavBar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </>
  )
}

export default Page
