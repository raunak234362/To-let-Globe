import { Route, Routes } from "react-router-dom"
import Page from "./Page"
import Admin from "./Admin/Admin"


const Main = () => {
  return (
    
      <Routes>
        <Route path="/*" element={<Page/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
    
  )
}

export default Main
