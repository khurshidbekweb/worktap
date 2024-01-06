import Footer from "../components/Footer"
import Header from "../components/Header"

import main_img from '../assets/image/hero_img.png'
import Star from '../assets/icons/star.svg'
import Point from '../assets/icons/nuqta.svg'
import Wave from '../assets/icons/wave.svg'
import Massage from '../assets/icons/massage.svg'
import Coin from '../assets/icons/coin.svg'
import CardCurrent from "../components/CardCurrent"
import FreelanserCard from "../components/FreelanserCard"
import Card from '../assets/icons/cart.svg'
import Img from '../assets/image/bg-img.png'
import Cash from '../assets/icons/cash.svg'
import Time from '../assets/icons/time.svg'

function Home() {
  return (
    <>
        <Header/>
        <main>
            <section className="hero bg-[#F7F6FF] py-5 z-[-3]">
                <div className="container">
                    <div className="hero_inner flex justify-between items-center my-14">
                        <div className="hero_info w-[590px]">
                            <h2 className="hero_totle text-[36px] w-[85%] font-bold">
                            Покупайте фриланс-услуги в <span className="text-green-600">два клика</span>
                            </h2>
                            <p className="font-normal text-[20px] w-[80%] mt-7">Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
                            <form className="relative mt-12">
                                <input type="search" name="search" placeholder="Что нужно сделать?"  className="p-4 bg-[#F2F0FE] w-[100%] rounded-[50px]"/>
                                <button type="submit" className="p-4 right-0 px-12 bg-[#FBA457] rounded-[50px] absolute text-white test-[16px] font-medium">Найти</button>
                            </form>
                            <h3 className="text-[16px] font-medium mt-12">Выберите рубрику, чтобы начать</h3>
                            <ul className="hero_category_list mt-7 flex flex-wrap gap-10">
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">Тексты и переводы</a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">Разработка</a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">Дизайн</a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">ТАудио, видео монтаж </a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">SEO и оптимизация</a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">Бизнес и жизнь</a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">Соцсети и реклама</a>
                                </li>
                                <li className="hero-category-item">
                                    <a className="border p-2 px-4 rounded-[50px] hover:text-[#FBA457] hover:border-[#FBA457]" href="#">Все категории</a>
                                </li>
                            </ul>
                        </div>
                        <div className="hero_image relative">
                            <span className="bg-[#FFEDDD] absolute top-5 rounded-full p-12"></span>
                            <span className="bg-[#FBA457] absolute top-40 right-5 rounded-full p-6"></span>
                            <img className="z-10 relative" src={main_img} alt="" />
                            <p className="bg-[#eacaae] p-64 absolute rounded-full top-20 right-2 z-[0]"></p>
                            <img className="absolute right-3 top-96 z-20" src={Star} alt="satra" />
                            <img src={Point} alt="" />
                            <img className="right-7 absolute top-[550px]" src={Wave} alt="wave" />
                            <img className="absolute top-40 left-[-90px]" src={Massage} alt="massage" />
                            <img className="absolute top-44 left-[-35px]" src={Coin} alt="massage" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="current-works mt-32">
                <div className="container">
                    <h2 className="font-bold text-[24px] mb-12">Актуальные ворки</h2>
                    <div className="current-works_inner flex flex-wrap gap-7">
                        <CardCurrent/>
                        <CardCurrent/><CardCurrent/><CardCurrent/><CardCurrent/>
                    </div>
                </div>
            </section>
            <section className="top-freelanser">
                <div className="container">
                    <h2 className="font-bold text-[24px] my-12">Топ фрилансеров</h2>
                    <div className="top-works-freelanser flex flex-wrap gap-7">
                        <FreelanserCard/>
                        <FreelanserCard/>
                        <FreelanserCard/>
                        <FreelanserCard/>
                        <FreelanserCard/>
                    </div>
                </div>
            </section>
            <section className=" bg-[#EFB400] p-12 mt-14 overflow-hidden">
                <div className="container">
                    <h2 className="font-medium text-[24px] text-white">Как WorkTap помогает бизнесу?</h2>
                    <div className="businer-section relative">
                        <ul className="busines-card-list w-[520px] mt-10">
                            <li className="busines-item flex gap-x-5 items-center bg-white px-9 py-5 rounded-[20px]">
                                <img src={Card} alt="card" />
                                <p className="text-[14px] font-normal">Оплачивайте с р/с или карты компании</p>
                            </li>
                            <li className="busines-item flex my-5 gap-x-5 items-center bg-white px-9 py-5 rounded-[20px]">
                                <img src={Cash} alt="card" />
                                <p className="text-[14px] font-normal">Экономьте до 87% бюджета на фрилансе</p>
                            </li>
                            <li className="busines-item flex gap-x-5 items-center bg-white px-9 py-5 rounded-[20px]">
                                <img src={Time} alt="card" />
                                <p className="text-[14px] font-normal">ОЭкономьте до 75% времени на решении фриланс задач</p>
                            </li>
                            <li className="busines-item my-5">
                                <p className="text-white text-[20px] fonr-medium">WorkTap — быстро, просто и безопасно!</p>
                            </li>
                            <li className="busines-item mt-10">
                                <a href="#" className="p-5 px-14 rounded-[50px] bg-[#5E4EDB] text-white">Начать!</a>
                            </li>
                        </ul>
                        <div className="">
                            <img className="h-[600px] w-[850px] top-[-125px] right-[-210px] absolute" width={700} height={850} src={Img} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default Home