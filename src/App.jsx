
import { Route, Routes } from "react-router"
import CreateOrder from "./pages/CreateOrder"
import CreateWork from "./pages/CreateWork"
import MyPraduct from "./pages/MyPraduct"
import Home from './pages/Home'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/my-praduct" element={<MyPraduct/>}/>
        <Route path="/create-order" element={<CreateOrder/>}/>
        <Route path="/crate-work" element={<CreateWork/>}/>
      </Routes>
    </>
  )
}

export default App
