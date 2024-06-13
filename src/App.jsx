import { BrowserRouter } from 'react-router-dom'
import Main from './component/Main'


function App() {
  return (
    <div className="bg-black text-white h-screen">
      <BrowserRouter>
      <Main/>    
      </BrowserRouter>
    </div>
  )
}

export default App
