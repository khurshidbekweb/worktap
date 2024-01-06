import Degrre from './Degrre'
import user from '../assets/image/user1.png'

function FreelanserCard() {
    const onleni = true
  return (
    <div className="freelanser w-[400px] border rounded-[20px] p-5">
        <div className="freelanser-card-top flex gap-x-7 items-center relative">
            <img src={user} alt="user" />
            <span className={onleni?'p-4 block bg-[#1DBF73] rounded-full absolute bottom-0 left-24':'p-4 block bg-[#B0AAD0] rounded-full absolute bottom-0 left-24'}></span>
            <div className="user-info">
                <h3 className="user-name font-medium text-[18px]">Семён Сергеев</h3>
                <p className="job font-medium text-[20px] text-[#FBA457]">Копирайтер</p>
                <p className='font-normal text-[15px] mb-4 mt-2'>Выполено проектов: 104</p>
                <Degrre/>
            </div>
        </div>
            <a href="#" className='w-[100%] hover:text-white hover:bg-green-600 font-bold border mt-5 block text-center text-[14px] p-2 rounded-[50px] text-[#1DBF73]'>Написать</a>
    </div>
  )
}

export default FreelanserCard