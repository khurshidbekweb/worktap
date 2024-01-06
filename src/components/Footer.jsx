import Facebook from '../assets/icons/facebook.svg'
import Twitter from '../assets/icons/twittwr.svg'
import Instagram from '../assets/icons/instagram.svg'
import Linkiden from '../assets/icons/linkedin.svg'

function Footer() {
  return (
    <>
        <div className="footer py-5 bg-[#F2F0FE]">
            <div className="container">
                <div className="fopter_inner flex items-start gap-x-36">
                    <ul>
                        <li className="footer_item font-bold text-[24px]">
                            Топ категории
                        </li>
                        <li className="footer_item text-[14px] font-normal mt-3">
                            Тексты и переводы
                        </li>  
                        <li className="footer_item text-[14px] font-normal mt-1">
                            Разработка
                        </li>       
                        <li className="footer_item text-[14px] font-normal mt-1">
                            Дизайн
                        </li> 
                        <li className="footer_item text-[14px] font-normal mt-1">
                            Аудио, видео монтаж
                        </li> 
                        <li className="footer_item text-[14px] font-normal mt-1">
                            Соцсети и реклама
                        </li>  
                        <li className="footer_item text-[14px] font-normal mt-1">
                            Бизнес и жизнь
                        </li>
                        <li className="footer_item text-[14px] font-normal mt-1">
                            SEO и оптимизация
                        </li>                                      
                    </ul>
                    <ul>
                        <li className="footer_item font-bold text-[24px]">
                        О Проекте
                        </li>
                        <li className="footer_item text-[14px] font-normal mt-3">
                        О Нас
                        </li>  
                        <li className="footer_item text-[14px] font-normal mt-1">
                        Как Это Работает
                        </li>       
                        <li className="footer_item text-[14px] font-normal mt-1">
                        Политика Приватности
                        </li> 
                        <li className="footer_item text-[14px] font-normal mt-1">
                        Правила Пользования 
                        </li> 
                        <li className="footer_item text-[14px] font-normal mt-1">
                        Пресса о нас
                        </li>                                       
                    </ul>
                    <ul>
                        <li className="footer_item font-bold text-[24px]">
                        Поддержка
                        </li>
                        <li className="footer_item text-[14px] font-normal mt-3">
                        Контакты
                        </li>  
                        <li className="footer_item text-[14px] font-normal mt-1">
                        Политика Безопасности
                        </li>       
                        <li className="footer_item text-[14px] font-normal mt-1">
                        FAQ
                        </li>                                     
                    </ul>
                    <ul>
                        <li className="font-bold text-[24px]">Follow</li>
                        <li className='flex gap-x-9 mt-3'>
                            <a href="#"><img src={Facebook} alt="facebook" /></a>
                            <a href="#"><img src={Twitter} alt="facebook" /></a>
                            <a href="#"><img className='bg-[#222222] p-3 rounded-full' src={Instagram} alt="facebook" /></a>
                            <a href="#"><img src={Linkiden} alt="facebook" /></a>
                        </li>
                    </ul>
                </div>
                <p className='text-center mt-4'>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer