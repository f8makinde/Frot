import React from 'react'

const Section = () => {
  return (
    <div id='section' className='w-full py-12'>
          <p className='text-3xl font-lora font-bold text-center py-3'>Services</p>
        <div  className="container max-w-[1200px] px-4 sm:px-6 flex flex-wrap gap-6 mx-auto font-sans">
      {/* Marketing Section */}
   
      <section className="bg-blue-500 text-white py-16 px-6 flex-1 rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 font-poppins">Marketing Services</h1>
          <p className="text-lg">We offer top-notch marketing solutions.</p>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="bg-yellow-500 py-16 px-6 flex-1 rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 font-poppins">Advertisement</h1>
          <p className="text-lg">Effective advertising strategies for your brand.</p>
        </div>
      </section>

      {/* Radiology Section */}
      <section className="bg-primary text-white py-16 px-6 flex-1 rounded-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 font-poppins">Radiology Services</h1>
          <p className="text-lg">State-of-the-art radiology solutions.</p>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Section
