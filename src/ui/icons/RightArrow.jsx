import React from 'react'

function RightArrow({color}) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 6L15 6" stroke={color}/>
        <path d="M10 1L15 6L10 11" stroke={color}/>
    </svg>
  )
}

export {RightArrow}