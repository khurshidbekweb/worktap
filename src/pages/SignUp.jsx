
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import LoginImg from '../assets/image/mainImg.png'
import { authUtils } from '../utils/auth.utils';
import toastify from '../utils/toastify';



function SignUp() {
    const navigate = useNavigate()
    const roles = []
    const handlRoles = (e) => {
        if(e.target.name==="executor" || e.target.name==="customer"){
            roles.push(e.target.name)
        }
        console.log(roles);
    }
    const onRegistr = async (e) => {
        e.preventDefault();        
        if(e.target.customer.value === "costumer" ){
            roles.push(e.target.customer.value)
        }
        if(e.target.executor.value==="executor"){            
            roles.push(e.target.executor.value)
        }
        const registr = {
        name: e.target.forsName.value,
        surname: e.target.lastName.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        password: e.target.password.value === e.target.passwordAgain.value ? e.target.password.value : "Passworda hatolik"  ,
        roles: roles
        }
        console.log(registr);
        const info = await authUtils.registerAuth(registr)
        if(info.accessToken){
            navigate('/sign-in')
            toastify.successMessage("Muvaffaqiyat royhatdan o'tdingiz 🙌")
        }
    };


  return (
    <div className='login w-[100%] h-[100vh] flex items-start overflow-hidden'>
        <div className="login-auth-info w-[50%]">
            <NavLink to="/"><img className='mx-auto pt-7' src={Logo} alt="logo" /></NavLink>
            <div className="form-wrap w-[480px] ml-auto mt-4">
            <p>Добро пожаловать!</p>
            <p className='text-[25px] font-bold'>Войдите в свой аккаунт</p>
            <form onSubmit={onRegistr}>
                <label>
                    <span className='block text-start mt-3 text-[18px]'>Ваше имя</span>
                    <input type="text" name="forsName" className='input-user' placeholder='Имя'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Ваше фамилия</span>
                    <input type="text" name="lastName" className='input-user' placeholder='Ваше фамилия'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>E-mail</span>
                    <input type="email" name="email" className='input-user' placeholder='E-mail'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Телефон номер</span>
                    <input type="number" name="phone" className='input-user' placeholder='Телефон'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Пароль</span>
                    <input type="password" name="password" className='input-user' placeholder='Пароль'/>
                </label>
                <label>
                    <span className='block text-start mt-1 text-[18px]'>Повтарите пароль</span>
                    <input type="password" name="passwordAgain" className='input-user' placeholder='Пароль'/>
                </label>
                <div className="forgot-password flex gap-x-20 mt-4 items-center">
                    <label>
                        <input type="checkbox" name="customer" onChange={handlRoles}/>
                        <span className='text-[18px] font-medium ml-3'>Я исполнитель</span>
                    </label>
                    <label>
                        <input type="checkbox" name="executor" onChange={handlRoles}/>
                        <span className='text-[18px] font-medium ml-3'>Я заказчик</span>
                    </label>
                </div>
                <button type='submit' className='block w-[350px] rounded-[50px] mt-9 text-center text-[18px] p-2 bg-green-600 text-white'>Войти</button>
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