import React from 'react';

export default function Contact() {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='m-auto'>
          <section className='w-full text-white sm:h-1/4 md:h-1/3 lg:h-1/2 flex flex-col justify-center text-center px-4 py-32 lg:py-40'>
            <h2 className='text-4xl font-bold text-slate-200 underline font my-6'>
              Get in Touch
            </h2>
            <p className='text-white sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </p>
          </section>


<section className='flex flex-col items-center justify-center sm:flex-row'>
  <div className="bg-blur text-green-500 flex flex-col p-8 rounded-md shadow-md w-full sm:w-2/5 mb-8 sm:mb-0">
    <h3 className='text-white font-signature text-xl md:text-5xl my-4 text-center sm:text-left'>Get in Touch</h3>
    <form action="" className="flex flex-col space-y-3">
      <label htmlFor="name" className="font-bold text-lg">Name</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
      />

      <label htmlFor="email" className="font-bold text-lg">Email Address</label>
      <input type="text" id="email" name="email" placeholder="Your Email" required
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
      />

      <label htmlFor="contact" className="font-bold text-lg">Contact Number</label>
      <input type="text" id="contact" name="contact" placeholder="Your Contact Number" required
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
      />

      <label htmlFor="message" className="font-bold text-lg">Message</label>
      <textarea name="message" id="message" cols="3" rows="5"
        className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
      ></textarea>

      <button type="submit"
        className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
      >
        Submit
      </button>
    </form>
  </div>
</section>

        </div>
      </div>
    </>
  );
}
