import React from 'react'

export default function () {
    
  return (
    <> 
    
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="path-to-your-image" alt="Card Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
          <p className="mt-2 text-gray-600">{}</p>
          <div className="mt-4">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
