import React from 'react'

const ParrallelogramButton = ({className='', onClick, children}) => {
  return (
  <button onClick={onClick} className={`px-8 py-3 bg-red-600 text-white font-bold transition-all duration-300 hover:bg-red-700 clip-parallelogram ${className} `}>
        {children}
  </button>
  )
}

export default ParrallelogramButton