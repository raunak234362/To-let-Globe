import { Route, Routes } from "react-router-dom"
import Homepage from "./landingpage/Homepage"
import NavBar from "./NavBar"
import Contact from "./contact/Contact"
import Service from "./service/Service"
import Blog from "./blog/Blog"
import AboutUs from "./About/AboutUs"
import PropertyListing from "./property/PropertyListing"


const Page = () => {
  return (
  <>
  
    <NavBar/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/property' element={<PropertyListing/>}/>
    </Routes>
    </>
  )
}

export default Page
