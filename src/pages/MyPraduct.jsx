import { useQuery } from "@tanstack/react-query"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PraductCard from "../components/PraductCard"
import { orderUtils } from "../utils/order.utilis"


function MyPraduct() {
  const myOrder = useQuery({
    queryKey: ["myOrders"],
    queryFn: orderUtils.getAllOrderUtils
  })
  return (
    <>
        <Header/>
        <main>
            <section className="myPraduct">
                <h2 className="text-[36px] mt-10 font-bold text-center">Мои <span className="text-[#FBA457]">заказы</span></h2>
                <div className="container">
                    <div className="mypraducr_inner my-4">
                        <div className="praduct-hearder flex justify-between">
                          <h3 className="text-[24px] font-medium">Всего {myOrder.data?.length} заявок</h3>
                          <form>
                            <select name="price" className="p-2 border rounded-xl">
                              <option value="kotatilgan narx">По возрастанию цены</option>
                            </select>
                          </form>
                        </div>
                        <div className="my-praduct-body">
                          {
                            myOrder.data?.length && myOrder.data.map(e => {
                              return <PraductCard key={e.id} el={e}/>  
                            })
                          }                        
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default MyPraduct