import {IoIosArrowRoundForward} from 'react-icons/io'

const FavouriteHero = () => {
  return (
    <div className="bg-[#FFF9F2]">
        
       <div className="max-w-container mx-auto lg:px-12 px-4 lg:h-[85vh] h-[80vh] 2xl:h-[60vh] w-full lg:pt-36 pt-9">
        <div className="lg:flex lg:justify-between">
        <div className="lg:w-2/4 w-full">
            <h1 className="text-[#396C03] font-Merienda font-bold lg:text-5xl md:text-7xl md:text-center text-left lg:text-left text-4xl">Explore your </h1>
            <h1 className="text-[#396C03] font-Merienda font-bold lg:text-5xl md:text-7xl md:text-center text-4xl mt-[7px] text-left lg:text-left">favourite city’s food. </h1>
             <p className="text-[#676767] font-thin font-Poppins text-[17px] md:text-xl md:text-center md:p-2 mt-4 text-left lg:text-left">Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
             <button className='flex items-center justify-center md:mx-auto gap-2 text-white text-[17px]  font-Poppins bg-[#396C03] w-[150px] h-[44px] rounded-[224px] hover:bg-[#FF8B00] hover:text-white duration-300 mt-7 lg:mx-0 mx-0'>
                <span>Explore</span> <span><IoIosArrowRoundForward size={25}/></span>
             </button>
        </div>
         <div className=" lg:w-2/4 w-full mt-16 lg:mt-0 relative md:ml-24 overflow-x-hidden overflow-y-hidden">
            
           <img className='mt-[-50px]' src="https://i.ibb.co/1Z9X9B6/image-2-removebg-preview.png" alt="" />


           <img className='absolute top-5 w-[500px]  slide-right' src="https://i.ibb.co/1nB7DsM/too-much-orders-contacless-delivery-service-during-quarantine-man-delivers-food-during-isolation-wea.png" alt="" />
          </div>
        </div>

       </div>



    </div>
  )
}

export default FavouriteHero