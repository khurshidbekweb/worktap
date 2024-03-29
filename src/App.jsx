
import { Route, Routes } from "react-router"
import CreateOrder from "./pages/CreateOrder"
import CreateWork from "./pages/CreateWork"
import MyPraduct from "./pages/MyPraduct"
import Home from './pages/Home'
import User from "./pages/User/User"
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import UserInfo from "./pages/UserInfo"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/home" element ={<Home/>}/>
        <Route path="/my-praduct" element={<MyPraduct/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/create-order" element={<CreateOrder/>}/>
        <Route path="/crate-work" element={<CreateWork/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/user-info" element={<UserInfo/>}/>
      </Routes>
    </>
  )
}

export default App
