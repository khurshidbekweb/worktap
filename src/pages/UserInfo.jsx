import { useQuery } from "@tanstack/react-query"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { userUtils } from "../utils/user.utils"
import { BASE_URL } from "../constants"
import { NavLink } from "react-router-dom"
import Edit from '../assets/image/edit.png'
import { workUtils } from "../utils/work.utils"

function UserInfo() {

    const user = useQuery({
        queryKey: ["users"],
        queryFn: userUtils.getUser
    })

    
    const works = useQuery({
        queryKey: ["works"],
        queryFn: workUtils.getWork
    })
    console.log("works", works.data);

  return (
    <>
        <Header/>
            <main>
                <section className="user-info">
                    <div className="container">
                        <div className="user-info-inner flex gap-x-44 w-[100%] items-center">
                            <div className="user-main-info w-[350px] p-10">
                                <p className="text-[24px] font-bold">{user.data?.name}</p>
                                <hr />
                                <p className="text-[24px] font-bold mt-3">{user.data?.surname}</p>
                                <hr />
                                <p className="text-[24px] font-bold mt-3">{user.data?.phone}</p>
                                <hr />
                                <p className="text-[24px] font-bold mt-3">{user.data?.email}</p>
                                <hr />
                            </div>
                            <div className="user-img p-10">
                                <img className=" rounded-full w-[300px] h-[300px]" src={`${BASE_URL}${user.data?.image}`} alt="img" />
                                <NavLink to='/user' className=" absolute top-[350px] block "> <img src={Edit} alt="edit" /> </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="works-user">
                    <div className="container">
                        <div className="user-certe-work-inner flex flex-wrap gap-10 my-10">
                            {works.data?.length && works.data.map(e => {
                                return <div key={e.id} className="current-cart w-[400px] rounded-[20px] p-2">
                                            <div className="card-header">
                                                <img className="w-[100%] h-[200px] rounded-t-[30px]" src={`${BASE_URL}${e.image}`} alt="user-img" />
                                                <h4 className="font-bold text-[18px] mt-2 px-5">{e.name}</h4>
                                            </div>
                                            <div className="card-body mt-3  overflow-hidden px-5">
                                                <p className='text-[20px]  text-[#1DBF73] font-bold'>{e.price} тенге</p>
                                            </div>                                            
                                        </div>
                            })}
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
    </>
  )
}

export default UserInfo