
import Footer from "../components/Footer"
import Header from "../components/Header"
import AddImg from '../assets/icons/add.svg'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { workUtils } from "../utils/work.utils"
import toastify from "../utils/toastify"

function CreateWork() {
    const queryCleint = useQueryClient()
    const addWorks = useMutation({
        mutationFn: workUtils.postWork,
        onSuccess: () => {
            queryCleint.invalidateQueries({queryKey: ["all_works"]})
            toastify.successMessage("Muvaffaqiyat qo'shildi")
        },
        onError: (err) => {
            console.log(err);
            toastify.errorMessage(err.message)
        }
    })

    const handlWork = (e) => {
        e.preventDefault()
        addWorks.mutate({
            description: e.target.description.value,
            image: e.target.image.files[0],
            name: e.target.name.value,
            price: e.target.price.value
        })
    }
    console.log(addWorks.variables);

  return (
    <>
        <Header/>
        <main>
            <div className="work_create mt-12">
                <div className="container">
                    <div className="work-creatr-inner">
                        <form onSubmit={handlWork}>
                            <h2 className="text-[24px] font-bold">Название</h2>
                            <input type="text" name="name" className="border p-1 w-[450px] rounded my-2" placeholder="Название"/>
                            <h2 className="text-[24px] font-bold">Цена в тенге</h2>
                            <input type="number" name="price" className="border p-1 w-[450px] rounded my-2" placeholder="Цена в тенге"/>
                            <h2 className="text-[24px] font-bold">Фотографии ворка</h2>
                            <p className="work-title text-[16px] font-normal my-5 w-[550px]">
                                Загрузите фотографии, которые описывают или имеют отношение к вашему ворку. Только файлы с расширением png, jpg, jpeg.
                            </p>
                            <label className="block">
                                <div className="w-[195px] border py-10 rounded-lg bg-[#EBE8FF] cursor-pointer my-5 text-center">
                                    <input type="file" name="image" multiple className="hidden w-[195px] overflow-hidden"/>
                                    <img className="ml-14" src={AddImg} alt="add" />
                                    <p className="addnew-add-text">Добавить фото</p>
                                </div>
                            </label>
                            <h2 className="text-[24px] font-bold">Описание</h2>
                            <textarea name="description" placeholder="Описание..." className="border my-5 rounded-lg p-2" cols="65" rows="10"></textarea>

                            <button type="submit" className="p-2 px-10 border rounded-[50px] ml-0 block text-white bg-green-600 text-start my-5">Опубликовать</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
  )
}

export default CreateWork