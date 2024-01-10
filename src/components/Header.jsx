
import { Outlet, useNavigate } from 'react-router'
import Logo from '../assets/icons/logo.svg'
import { NavLink } from 'react-router-dom'
import Favarite from '../assets/icons/fav.svg'
import Natification from '../assets/icons/nat.svg'
import Message from '../assets/icons/mess.svg'
import { useQuery } from '@tanstack/react-query'
import { userUtils } from '../utils/user.utils'
import { BASE_URL } from '../constants'
import Person from '../assets/image/person.jpg'
import { useRef } from 'react'

function Header() {
  const navigate = useNavigate()
  const register = useRef(null)
  const auth = useRef(null)
  const createWork = useRef(null)
  const user = useQuery({
    queryKey: ["users"],
    queryFn: userUtils.getUser
  })
  const accessToken = localStorage.getItem("accessToken")
  const refreshToken = localStorage.getItem("refreshToken")
  if(accessToken && refreshToken){
    register.current?.classList.add("hidden")
    register.current?.classList.remove("flex")
    auth.current?.classList.remove("hidden")
    auth.current?.classList.add('flex')
  }else{
    register.current?.classList.remove("hidden")
    register.current?.classList.add("flex")
    auth.current?.classList.add("hidden")
    auth.current?.classList.remove('flex')
    navigate('/')
  }

  const handleRole = (e) => {
     const value = e.target.value
     if(value=="customer"){
      createWork.current.classList.add("hidden")
     }else{
      createWork.current.classList.remove("hidden")
     }
  }


  return (
    <>
        <div className="container mx-auto">
            <div className="header_inner flex justify-between p-2 pt-4  items-center w-[100%]">
                <NavLink to="/">
                    <img src={Logo} alt="logo" />
                </NavLink>
                <nav className='w-[45%]'>
                  <ul className="navbar_list flex gapx-x-8 items-center justify-between w-[100%]">
                    <li className="navbar_item">
                      <NavLink to="/home" className='font-medium text-[16px]'>Биржа</NavLink>
                    </li>
                    <li className="navbar_item">
                      <NavLink to="/user-info" className='font-medium text-[16px]'>Пользователь</NavLink>
                    </li>
                    <li className="navbar_item">
                      <NavLink to="/my-praduct" className='font-medium text-[16px]'>Мои заказы</NavLink>
                    </li>
                    <li className="navbar_item" ref={createWork}>
                      <NavLink to="/crate-work" className='font-medium text-[16px]'>Создать ворк</NavLink>
                    </li>
                    <li className="navbar_item">
                      <NavLink to="/create-order" className='font-medium text-[16px]'>Создать заказ</NavLink>
                    </li>
                  </ul>
                </nav>
                <div ref={register} className="header_auth flex gap-x-3 items-center">
                  <NavLink to='/sign-up' className='p-2 px-6 bg-[#F2F0FE] font-medium cursor-pointer text-green-600 rounded-[50px]'>Регистрация</NavLink>
                  <NavLink to='/sign-in' className='p-2 px-6 bg-green-600 font-medium cursor-pointer text-white rounded-[50px]'>Войти</NavLink>
                </div>
                <div ref={auth} className="auth-login hidden gap-x-10 items-center">
                  <div className="natification flex gap-x-3">
                    <button><img src={Favarite} alt="favarite" /></button>
                    <button><img src={Natification} alt="favarite" /></button>
                    <button><img src={Message} alt="favarite" /></button>                  
                  </div>
                  <div className="profil flex items-center gap-2 relative">
                    <h3 className='font-bold text-[20px]'>{user?.data?.name}</h3>
                    <img className='rounded-full' width={40} src={user.data?.image?`${BASE_URL}${user.data?.image}`:Person} alt="user-img" />                    
                    <select onChange={(handleRole)} name="role" className='absolute right-[-25px] top-5  bg-[inherit]'>
                      <option hidden></option>
                      {user.data?.roles?.length && user.data?.roles.map(e => {
                        return <option key={Math.random()} value={e}>{e=="customer"?"Я исполнитель":"Я заказчик"}</option>
                      })}
                    </select>
                  </div>
                </div>
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Header