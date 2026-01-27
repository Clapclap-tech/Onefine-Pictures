import React from 'react'

const Button = ( {className= '',children, type = "button", onClick, disabled = false} ) => {
  return (
    <button 
        type={type} 
        onClick={onClick} 
        disabled={disabled} 
        className={`
          px-4 py-2 rounded bg-blue-600 text-white font-bold shadow-md ring-0
          hover:ring-4 hover:ring-red-600 hover:scale-105 hover:bg-white hover:text-red-600 hover:font-bold
          transition-all duration-300
          ${className}
          `}>
            {children}
        </button>
  );
}

export default Button;