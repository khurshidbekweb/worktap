
import Logo from '../assets/icons/logo.svg'

function Header() {
  return (
    <header className='bg-[#F7F6FF]'>
        <div className="container mx-auto">
            <div className="header_inner flex justify-between p-2 pt-4  items-center w-[100%]">
                <a href="#">
                    <img src={Logo} alt="logo" />
                </a>
                <nav className='w-[45%]'>
                  <ul className="navbar_list flex gapx-x-8 items-center justify-between w-[100%]">
                    <li className="navbar_item">
                      <a href="#" className='font-medium text-[16px]'>Биржа</a>
                    </li>
                    <li className="navbar_item">
                      <a href="#" className='font-medium text-[16px]'>Ворки</a>
                    </li>
                    <li className="navbar_item">
                      <a href="#" className='font-medium text-[16px]'>Конкурсы</a>
                    </li>
                    <li className="navbar_item">
                      <a href="#" className='font-medium text-[16px]'>Создать ворк</a>
                    </li>
                    <li className="navbar_item">
                      <a href="#" className='font-medium text-[16px]'>Создать заказ</a>
                    </li>
                  </ul>
                </nav>
                <div className="header_auth flex gap-x-3 items-center">
                  <a to='sign-up' className='p-2 px-6 bg-[#F2F0FE] font-medium cursor-pointer text-green-600 rounded-[50px]'>Регистрация</a>
                  <a to='sign-in' className='p-2 px-6 bg-green-600 font-medium cursor-pointer text-white rounded-[50px]'>Войти</a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header