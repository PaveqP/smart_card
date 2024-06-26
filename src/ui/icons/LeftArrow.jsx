import React from 'react'

function LeftArrow({color}) {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31504 11L0 5.5L5.31504 0L6 0.708797L1.8531 5L16 5V6L1.85311 6L6 10.2912L5.31504 11Z" fill={color}/>
    </svg>
  )
}

export {LeftArrow}