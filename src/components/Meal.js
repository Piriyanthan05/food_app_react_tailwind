import React,{useState} from 'react';
import { FaArrowRight } from "react-icons/fa";
import { mealData } from '../data/data';

const Meal = () => {
    const [foods,setFoods]=useState(mealData)
    const filterCat =(category)=>{
        setFoods(
            mealData.filter((item)=>{
                return item.category === category;
            })
        )
    }
  return (
    <div className='max-w-[1520px] mx-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-3xl text-center py-10'>Our Meal</h1>
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center'>
            <button 
            onClick={()=>setFoods(mealData)}
             className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
            <button 
            onClick={()=>filterCat('pizza')}
             className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
            <button 
            onClick={()=>filterCat('chicken')}
            className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
            <button 
            onClick={()=>filterCat('salad')}
            className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 py-7'>
        {foods.map((item) => (
          <div key={item.id} className='border-none hover:scale-105 duration-300'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-lg'
            />
            <div className='flex justify-between py-2 px-2'>
              <p className='font-bold'>{item.name}</p>
              <p className='bg-orange-700 h-14 w-18 rounded-full -m-5 text-white py-2 px-2 border-8'>{item.price}</p>
            </div>
            <div className='pl-2 py-4 -mt-7'>
                <p className='flex items-center text-indigo-600'>View More<FaArrowRight className='w-5 ml-2'/></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
