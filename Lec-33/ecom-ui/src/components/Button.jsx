import React from 'react'

const Button = ({className, children}) => {
  return (
    <button type="button" className={`inline-flex text-white items-center bg-blue-600 hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none ${className}`}>
        {children}
    </button>
  )
}

export default Button