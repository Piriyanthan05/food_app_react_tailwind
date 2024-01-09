import React from 'react';

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] mx-auto text-white px-4 bg-[#24262b] '>
        <div className='mx-auto grid lg:grid-cols-3'>
      <div className='lg:col-span-2 my-4 py-10'>
        <h1>Need advice on how to improve your flow</h1>
        <p>Sign up to join our newsletter and stay up to date.</p>
      </div>
      <div className='my-4'>
        <form>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              className='p-3 flex w-full rounded-md text-black'
            />
            <button
              type='submit'
              className='bg-[#00df9a] text-white rounded-md text-1xl w-[200px] ml-4 my-6 px-6 py-3 border-none'
            >
              Notify me
            </button>
          </div>
        </form>
        <p>
          We are concerned about the security of your data, Read{" "}
          <span className='text-[#00df9a]'>Privacy Policy</span>
        </p>
      </div>
      <hr className='my-8 bg-gray-700 border-1 gark:bg-gray-700 '/>
      </div>
    </div>
  );
};

export default NewsLetter;
