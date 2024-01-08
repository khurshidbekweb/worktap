
import Footer from "../components/Footer"
import Header from "../components/Header"
import AddDocument from '../assets/icons/addDoc.svg'

function CreateOrder() {
  return (
    <>
        <Header/>
        <main>
            <section className="create-order mt-10">
                <div className="container">
                    <div className="order-inner">
                        <h1 className="text-[24px] font-bold">Опубликуйте ваш заказ</h1>
                        <form>
                            <h3 className="text-[18px] font-medium">Название </h3>
                            <input type="text" name="name" className="p-1 my-2 border w-[550px] rounded-lg" placeholder="Название..." />
                            <h3 className="text-[18px] font-medium">Описание </h3>
                            <textarea placeholder="Описание..." name="description" className="p-1 my-2 border w-[550px] rounded-lg" cols="70" rows="10"></textarea>
                            <div className="category-wrap w-[550px] flex justify-between items-start">
                                <label className="w-[50%]">
                                    <span className="text-[18px] font-medium block mb-2">Категория</span>
                                    <select name="category"  className="border px-10 p-1 rounded-md">
                                        <option value="one">Категория</option>
                                    </select>
                                </label>
                                <label className="w-[50%] px-10">
                                    <span className="text-[18px] font-medium block mb-2">Подкатегория</span>
                                    <select name="subcategory" className="border px-10 p-1 rounded-md">
                                        <option value="one">Подкатегория</option>
                                    </select>
                                </label>
                            </div>
                            <h3 className="text-[18px] font-medium mt-7">Бюджет в тенге </h3>
                            <input type="text" name="price" className="p-1 my-2 border w-[550px] rounded" placeholder="Бюджет в тенге..." />
                            <h3 className="text-[18px] font-medium mt-7">Документы</h3>
                            <label className="block">
                                <div className="w-[550px] border py-16 rounded-lg bg-[#F2F0FE] cursor-pointer my-5 text-center">
                                    <input type="file" name="childimg" multiple className="hidden w-[195px] overflow-hidden"/>
                                    <img className="mx-auto" src={AddDocument} alt="add" />
                                    <p className="addnew-add-text">Перетащите файл сюда или нажмите</p>
                                    <p className="text-[#FBA457]">Загрузить</p>
                                </div>
                            </label>
                            <button type="submit" className="p-2 px-10 border rounded-[50px] ml-0 block text-white bg-green-600 text-start my-5">Опубликовать</button>

                        </form>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default CreateOrder