
import { BASE_URL } from '../constants';
import Persan from '../assets/image/person.jpg'
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userUtils } from '../utils/user.utils';
import toastify from '../utils/toastify';
import Delet from '../assets/image/trash.png'

import './card-current.css'

function CardCurrent(el) {
    const queryCleint = useQueryClient()
    const deletUser = useMutation({
        mutationFn: userUtils.deleteUser,
        onSuccess: () => {
            queryCleint.invalidateQueries({queryKey: ["all_user"]})
            toastify.successMessage("User muvaffaqiyat o'chirildi")
        }
    })
  return (
        <div className="current-cart-user w-[400px] border relative rounded-[20px] p-5">
            <div className="overlay w-[100%]  h-[100%] absolute"></div>
            <div className="card-header flex gap-x-5 items-center">
                <img width={60} src={el.el.image?`${BASE_URL}${el.el.image}`:Persan} alt="user-img" />
                <h4 className="font-bold text-[18px]">{el.el.surname} {el.el.name}</h4>
            </div>
            <button className='delet-user hidden' onClick={()=> deletUser.mutate(el.el.id)}> <img width={70} src={Delet} alt="delet" /> </button>
            <div className="card-body mt-3 h-[90px] overflow-hidden">
                <p className='text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            </div>
            <Link to={`/user-info`}className='border hover:text-white hover:bg-[#1DBF73] w-[100%] text-[#1DBF73] block text-center p-2 mt-5 rounded-[50px]'>Посмотреть</Link>
        </div>
  )
}

export default CardCurrent