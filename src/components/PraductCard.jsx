import { NavLink } from "react-router-dom";
import FileDoc from '../assets/image/file.png'
import { BASE_URL } from "../constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderUtils } from "../utils/order.utilis";
import toastify from "../utils/toastify";
import Delet from '../assets/image/trash.png'

function PraductCard(el) {
  console.log(el.el);
  const queryCleint = useQueryClient()
  const deletOrder = useMutation({
    mutationFn: orderUtils.deletOrder,
    onSuccess: () => {
      queryCleint.invalidateQueries({queryKey: ["myOrders"]})
      toastify.successMessage("Muafaqiatli o'chirildi")
    }
  })
  return (
    <div className="w-[100%] flex justify-between items-start border p-5 rounded-[20px] mt-5">
        <div className="cart-left w-[64%]">
            <h2 className="praduct-title text-[24px] font-medium">{el.el.name}</h2>
            <p className="praduct-text my-7 text-[16px] font-normal">{el.el.description}</p>
            <div className="file-wrap flex">
            {el.el?.files?.length && el.el.files.map(e => {
              return <NavLink to={`${BASE_URL}${e}`} key={Math.random()}><img width={50} src={FileDoc} alt="file" /></NavLink>
            })}
            </div>
            <p className="accepting-bets text-[#FBA457] text-[18px] font-medium">Прием ставок</p>
        </div>
        <div className="card-right text-end">
            <h2 className="praduct-price text-[24px] font-medium text-[#1DBF73]">Бюджет: {el.el.price} тенге</h2>
            <p className="text-[14px]">4 часа 28 минут назад</p>
            <button className="mt-14" onClick={()=> deletOrder.mutate(el.el.id)}> <img src={Delet} alt="delet" /> </button>
            <p className="text-[18px] mt-16">Предложений: 50</p>
        </div>
    </div>
  )
}

export default PraductCard