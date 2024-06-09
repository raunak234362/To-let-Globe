import { HashRouter } from 'react-router-dom'
import Main from './component/Main'


function App() {
  return (
    <div className="bg-black text-white h-screen">
      <HashRouter>
      <Main/>    
      </HashRouter>
    </div>
  )
}

export default App
