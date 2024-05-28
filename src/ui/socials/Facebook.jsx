import React from 'react'

function Facebook({size}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_5_407)">
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#060606"/>
        <mask id="mask0_5_407" maskUnits="userSpaceOnUse" x="6" y="6" width="12" height="12">
        <path d="M18 6H6V18H18V6Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_5_407)">
        <path d="M18 12.0331C18 8.70498 15.3128 6 11.9934 6C8.68717 6 6 8.70498 6 12.0331C6 15.0431 8.19978 17.5492 11.0582 18V13.7834H9.53017V12.0331H11.0582V10.7072C11.0582 9.1956 11.9539 8.36022 13.3238 8.36022C13.9824 8.36022 14.6674 8.49282 14.6674 8.49282V9.96466H13.9166C13.1658 9.96466 12.9287 10.4287 12.9287 10.9061V12.0331H14.5884L14.3249 13.7834H12.9287V18C15.8002 17.5492 18 15.0564 18 12.0331Z" fill="#FEFEFE"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_5_407">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
    </svg>
  )
}

export {Facebook}