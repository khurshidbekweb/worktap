import "./User.css";
import AddImg from "../../assets/image/add-img.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userUtils } from "../../utils/user.utils";
import toastify from "../../utils/toastify";
import { BASE_URL } from "../../constants";
import { useNavigate } from "react-router";



const User = () => {
  const navigate = useNavigate()
  const queryCleint = useQueryClient()
  const getUser = useQuery({
    queryKey: ["users"],
    queryFn: userUtils.getUser
  })
  console.log(getUser.data);
  const addUser = useMutation({
    mutationFn: userUtils.postUser,
    onSuccess: () => {
      queryCleint.invalidateQueries({queryKey: ["users"]}),
      toastify.successMessage("Muvaffaqiyat bajarildi")
    },
    onError: (err) => {
      console.log(err);
      toastify.errorMessage(err.message)
    }   
  })
  const handlUser = (e) => {
    e.preventDefault()
    addUser.mutate({
      id: getUser.data?.id,
      image: e.target.image.files[0],
      name: e.target.name.value,
      phone: e.target.phone.value,
      surname: e.target.surname.value
    })
    navigate('/user-info')
  }

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="user mb-14">
          <h2 className="user-header">Профиль</h2>

          <form onSubmit={handlUser} className="user-box" >
            <div className="relative">
              <img className="w-[350px] bg-slate-300 h-[350px] rounded-full" src={`${BASE_URL}${getUser.data?.image}`} alt="" />
              <label className="file-input__label absolute top-5">
                <input type="file" name="image" className="file-input__input curson-pointer" />                
                <img src={AddImg} alt="img" />
              </label>
            </div>

            <div className="user-r">
              <div className="user-r-inner">
                <input className="user-input"  type="tel" name="phone" placeholder="Nomer" />
                <input className="user-input" required type="email" name="email" placeholder="Email" />
              </div>

              <div className="user-r-inner">
                <input className="user-input" required type="text" name="name" placeholder="Имя"/>
                <input className="user-input" required name="surname" type="text"placeholder="Фамиля"/>
              </div>

              <div>
                <input className="user-input" name="pssCeria" type="text" placeholder="AA 0000000"/>               
              </div>

              <button type="submit" className=" bg-green-600 p-2 px-10 rounded-[50px] text-white mt-5">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default User;
