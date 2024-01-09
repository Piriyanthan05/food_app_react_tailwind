import React from 'react';
import img from'./img/img-1.png'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-3xl py-5 text-center'>Quick Delivery App</h3>
      <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
        <img
          className='w-[350px] mx-auto my-4'
          src={img}
          alt='Quick Delivery App'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a]  font-bold'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
          <p className='justify-center'>
          Piri Eats revolutionizes dining with a seamless online food delivery service,
           connecting customers to a diverse range of local delights. Our user-friendly platform
            ensures a hassle-free experience, offering gourmet cuisine and quick bites to cater to
             various tastes. Prioritizing timely deliveries, Piri guarantees every meal reaches customers
              fresh and flavorful, redefining online food delivery for convenience and taste.
          </p>
          <button className='bg-[#FB8B24] text-white w-[150px]  font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
