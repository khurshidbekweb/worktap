
import { NavLink } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import Google from '../assets/icons/google.png'
import LoginImg from '../assets/image/mainImg.png'



function SignUp() {
  return (
    <div className='login w-[100%] h-[100vh] flex items-start overflow-hidden'>
        <div className="login-auth-info w-[50%]">
            <NavLink to="/"><img className='mx-auto pt-7' src={Logo} alt="logo" /></NavLink>
            <div className="form-wrap w-[480px] ml-auto mt-4">
            <p>Добро пожаловать!</p>
            <p className='text-[25px] font-bold'>Войдите в свой аккаунт</p>
            <form>
                <label>
                    <span className='block text-start mt-3 text-[18px]'>Ваше имя</span>
                    <input type="text" name="fors-name" className='input-user' placeholder='Имя'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Ваше фамилия</span>
                    <input type="text" name="last-name" className='input-user' placeholder='Ваше фамилия'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>E-mail</span>
                    <input type="email" name="email" className='input-user' placeholder='E-mail'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Телефон номер</span>
                    <input type="number" name="number" className='input-user' placeholder='Телефон'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Пароль</span>
                    <input type="password" name="password" className='input-user' placeholder='Пароль'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Повтарите пароль</span>
                    <input type="password" name="password" className='input-user' placeholder='Пароль'/>
                </label>
                <div className="forgot-password flex gap-x-20 mt-4 items-center">
                    <label>
                        <input type="radio" name="remember"/>
                        <span className='text-[18px] font-medium ml-3'>Я исполнитель</span>
                    </label>
                    <label>
                        <input type="radio" name="remember"/>
                        <span className='text-[18px] font-medium ml-3'>Я заказчик</span>
                    </label>
                </div>
                <button type='submit' className='block w-[350px] rounded-[50px] mt-9 text-center text-[18px] p-2 bg-green-600 text-white'>Войти</button>
                <button type='submit' className='w-[350px] rounded-[50px] mt-4 text-[18px] p-2 flex items-center px-5 gap-3 bg-[#2D3748] text-white'> <img src={Google} alt="" /> <p>Или войдите с помощю Google</p></button>
            </form>
            </div>
        </div>
        <div className="img w-[60%] relative">
            <img src={LoginImg} alt="img" className='w-[100%] h-[100vh]'/>
            <p className='absolute p-1 bg-white text-black z-10 bottom-20 w-[80%] rounded-lg left-9'>Worktap — это маркетплейс фриланс услуг, где можно купить услугу как товар в магазине или создать индивидуальный заказ на бирже. </p>
        </div>
    </div>
  )
}

export default SignUp