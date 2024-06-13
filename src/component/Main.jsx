import { Route, Routes } from "react-router-dom"
import Page from "./Page"
import Admin from "./Admin"
import LoginLayout from "./LoginLayout"


const Main = () => {
  return (
    
      <Routes>
        <Route path="/*" element={<Page/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
        <Route path="/login/*" element={<LoginLayout/>}/>
      </Routes>
    
  )
}

export default Main
