import Footer from "../components/Footer";
import Header from "../components/Header";
import AddDocument from "../assets/icons/addDoc.svg";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { orderUtils } from "../utils/order.utilis";
import toastify from "../utils/toastify";
import { categoryAuth } from "../utils/category.utils";
import { useState } from "react";

function CreateOrder() {
  const [subcategory, setSubcategory] = useState({
    isActive: false,
    categories: [],
  });

  const category = useQuery({
    queryKey: ["categories"],
    queryFn: categoryAuth.getCAtegory,
  });
  console.log(category.data);
  const queryCleint = useQueryClient();
  const myOrder = useMutation({
    mutationFn: orderUtils.postOrder,
    onSuccess: () => {
      queryCleint.invalidateQueries({ queryKey: ["myOrders"] });
      toastify.successMessage("Muvaffaqiyat qo'shildi");
    },
    onError: (err) => {
      console.log(err);
      toastify.errorMessage(err.message);
    },
  });

  const handleCategory = (e) => {
    const categoryId = e.target.value;
    const foundedCategory = category.data.find((e) => e.id == categoryId);

    setSubcategory({
      isActive: true,
      categories: foundedCategory.subcategory,
    });
  };

  const handlOrder = (e) => {
    e.preventDefault();
      myOrder.mutate({
      description: e.target.description.value,
      price: e.target.price.value,
      name: e.target.name.value,
      categoryId: e.target.subcategory.value,
      files: e.target.files.files
    });
  };
  return (
    <>
      <Header />
      <main>
        <section className="create-order mt-10">
          <div className="container">
            <div className="order-inner">
              <h1 className="text-[24px] font-bold">Опубликуйте ваш заказ</h1>
              <form onSubmit={handlOrder}>
                <h3 className="text-[18px] font-medium">Название </h3>
                <input
                  type="text"
                  name="name"
                  className="p-1 my-2 border w-[550px] rounded-lg"
                  placeholder="Название..."
                />
                <h3 className="text-[18px] font-medium">Описание </h3>
                <textarea
                  placeholder="Описание..."
                  name="description"
                  className="p-1 my-2 border w-[550px] rounded-lg"
                  cols="70"
                  rows="10"
                ></textarea>
                <div className="category-wrap w-[550px] flex justify-between items-start">
                  <label className="w-[50%]">
                    <span className="text-[18px] font-medium block mb-2">
                      Категория
                    </span>
                    <select
                      name="category"
                      className="border px-10 p-1 rounded-md"
                      onChange={handleCategory}
                    >
                      <option disabled>Категория</option>
                      {category.data?.length &&
                        category.data.map((e) => {
                          return (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                  <label className="w-[50%] px-10">
                    <span className="text-[18px] font-medium block mb-2">
                      Подкатегория
                    </span>
                    <select
                      name="subcategory"
                      disabled={!subcategory.isActive}
                      className="border px-10 p-1 rounded-md"
                    >
                      <option disabled>Подкатегория</option>
                      {subcategory.categories?.length &&
                        subcategory.categories.map((e) => {
                          return (
                            <option key={e.id} value={e.id}>
                              {e.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </div>
                <h3 className="text-[18px] font-medium mt-7">
                  Бюджет в тенге{" "}
                </h3>
                <input
                  type="text"
                  name="price"
                  className="p-1 my-2 border w-[550px] rounded"
                  placeholder="Бюджет в тенге..."
                />
                <h3 className="text-[18px] font-medium mt-7">Документы</h3>
                <label className="block">
                  <div className="w-[550px] border py-16 rounded-lg bg-[#F2F0FE] cursor-pointer my-5 text-center">
                    <input
                      type="file"
                      name="files"
                      multiple
                      className="hidden w-[195px] overflow-hidden"
                    />
                    <img className="mx-auto" src={AddDocument} alt="add" />
                    <p className="addnew-add-text">
                      Перетащите файл сюда или нажмите
                    </p>
                    <p className="text-[#FBA457]">Загрузить</p>
                  </div>
                </label>
                <button
                  type="submit"
                  className="p-2 px-10 border rounded-[50px] ml-0 block text-white bg-green-600 text-start my-5"
                >
                  Опубликовать
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CreateOrder;
