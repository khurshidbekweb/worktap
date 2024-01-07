

function PraductCard() {
  return (
    <div className="w-[100%] flex justify-between items-start border p-5 rounded-[20px] mt-5">
        <div className="cart-left w-[64%]">
            <h2 className="praduct-title text-[24px] font-medium">Нужно сделать Дизайн сайта по тематике авто</h2>
            <p className="praduct-text my-7 text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus volutpat sollicitudin in ligula. Massa in ultricies vitae varius habitasse. Est lacus eros nec fermentum, id gravida. Dui aliquet dolor convallis mauris. Massa in ultricies vitae varius habitasse. Est lacus eros nec fermentum...</p>
            <p className="accepting-bets text-[#FBA457] text-[18px] font-medium">Прием ставок</p>
        </div>
        <div className="card-right text-end">
            <h2 className="praduct-price text-[24px] font-medium text-[#1DBF73]">Бюджет: 50 000 тенге</h2>
            <p className="text-[14px]">4 часа 28 минут назад</p>
            <p className="text-[18px] mt-28">Предложений: 50</p>
        </div>
    </div>
  )
}

export default PraductCard