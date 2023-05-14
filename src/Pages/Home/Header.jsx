import {BiSearch} from 'react-icons/bi'
const Header = () => {
  return (
    <div className="relative lg:h-[100vh] 2xl:h-[60vh] w-full max-w-container mx-auto  bg-[url('https://i.ibb.co/2Pgw87T/Pngtree-hand-painted-noise-green-leaf-element-4054582-1-1.png')] bg-no-repeat lg:bg-[left_-80px_top_-40px] md:bg-[left_-80px_top_40px] bg-[left_-80px_top_-0px]  bg-[length:250px_250px] mt-3 md:mt-0 lg:mt-0">
       
     <div className="lg:flex lg:justify-between lg:items-center  max-w-container mx-auto pt-32 lg:px-12 px-4">
        <div className="lg:w-2/4 w-full md:mt-12 lg:mt-0  mt-16">
         <h1 className="lg:text-6xl md:text-7xl md:text-center text-2xl font-Merienda font-bold text-[#396C03] text-left lg:text-left lg:-mt-16"> Order food online </h1>
         <h1 className="lg:text-6xl md:text-7xl md:text-center md:mt-3 text-2xl font-Merienda font-bold text-[#396C03] lg:mt-2 text-left lg:text-left"> from your favourite </h1>
         <h1 className="lg:text-6xl md:text-7xl md:text-center md:mt-3 text-2xl font-Merienda font-bold text-[#396C03] lg:mt-2 text-left lg:text-left"> local restaurants<span className="text-[#FC9F2C] font-bold font-Merienda text-5xl">.</span></h1>
       
         <p className="text-[#676767] font-Poppins font-medium text-[16px] md:text-2xl md:text-center md:mt-10 mt-4 text-left lg:text-left">Freshly made food delivered to your door.</p>
       
          <div className='relative lg:w-[400px] w-[290px] md:w-[600px] md:mt-16 md:mx-auto lg:mx-0 mx-0 mt-6'>
            <input className="text-[#C7C7C7] lg:pl-14 pl-12 lg:w-[400px] w-full h-[48px] border border-[#e8f8cd] bg-white rounded-full outline-0 font-Poppins font-medium lg:text-base text-sm" type="text" name="" id="" placeholder='Enter your location'/>
             <span className='flex items-center gap-4 absolute top-[10px] left-3'>
             <img className='w-7 h-7 rounded-full' src="https://i.ibb.co/PNTvFqX/Ellipse-1.png" alt="" />
             </span>
             <button className="absolute top-0 -right-7 bg-[#396C03] rounded-full h-[44px] w-[130px]  flex justify-center items-center gap-1 font-Poppins font-normal text-white"><BiSearch size={20}/> Search</button>
          </div>
        </div>

        <div className="relative lg:w-[600px]  lg:flex lg:justify-end w-full mt-16 lg:-mt-16">
        <img className=' lg:w-[550px] lg:h-[550px] w-full h-full' src="https://i.ibb.co/xHBwWHC/Group-4.png" alt="" />

      </div>

     </div>


      


    </div>
  )
}

export default Header