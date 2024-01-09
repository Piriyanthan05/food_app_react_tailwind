import React from 'react'
import { FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl py-7 font-bold text-orange-500'>PiriEats</h1>
                <p>
                Piri Eats revolutionizes dining with a seamless online food delivery service,
                 connecting customers to a diverse range of local delights. Our user-friendly 
                 platform ensures a hassle-free experience, offering gourmet cuisine and quick 
                 bites to cater to various tastes. Prioritizing timely deliveries, Piri guarantees 
                 every meal reaches customers fresh and flavorful, redefining online food delivery 
                 for convenience and taste.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className='px-10 lg:col-span-2 mx-auto flex justify-between mt-6'>
                <div>
                    <h5 className='font-medium  text-[#9b9b9b]'>Location</h5>
                    <ul>
                        <li className='py-2 text-sm'>Jaffna</li>
                        <li className='py-2 text-sm'>Kilinochchi</li>
                        <li className='py-2 text-sm'>Vavuniya</li>
                        <li className='py-2 text-sm'>Mullitheevu</li>
                        <li className='py-2 text-sm'>Mannar</li>

                    </ul>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Footer
