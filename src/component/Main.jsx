import { HashRouter, Route, Routes } from "react-router-dom"
import Page from "./Page"
import Admin from "./Admin"


const Main = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Page/>}/>
        <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
    </HashRouter>
  )
}

export default Main
