import React from 'react'

function VK({size}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5_400)">
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#060606"/>
        <mask id="mask0_5_400"  maskUnits="userSpaceOnUse" x="6" y="7" width="12" height="12">
        <path d="M18 7H6V19H18V7Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_5_400)">
        <path d="M12.5359 16C8.43595 16 6.09743 13.3723 6 9H8.05371C8.12118 12.2092 9.63517 13.5686 10.8344 13.8489V9H12.7683V11.7678C13.9525 11.6487 15.1966 10.3874 15.6163 9H17.5502C17.2279 10.7097 15.8787 11.9709 14.9194 12.4895C15.8787 12.9099 17.4154 14.01 18 16H15.8712C15.414 14.6686 14.2748 13.6386 12.7683 13.4985V16H12.5359Z" fill="#FEFEFE"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_5_400">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  )
}

export {VK}