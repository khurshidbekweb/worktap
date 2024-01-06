import user from '../assets/image/user.png'


function CardCurrent() {
  return (
        <div className="current-cart w-[400px] border rounded-[20px] p-5">
            <div className="card-header flex gap-x-5 items-center">
                <img src={user} alt="user-img" />
                <h4 className="font-bold text-[18px]">Сделать дизайн интернет-магазина</h4>
            </div>
            <div className="card-body mt-3 h-[90px] overflow-hidden">
                <p className='text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            </div>
            <a href="#" className='border hover:text-white hover:bg-[#1DBF73] w-[100%] text-[#1DBF73] block text-center p-2 mt-5 rounded-[50px]'>Посмотреть</a>
        </div>
  )
}

export default CardCurrent