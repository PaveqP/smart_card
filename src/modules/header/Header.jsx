import React, { useState } from 'react'
import { RightArrow, LeftArrow } from '../../ui'
import './Header.scss'

function Header({setOffset, offset}) {

  const [activePage, setActivePage] = useState('company')

  const minusOffset = () => {
    if (offset === -688) return
    setOffset(offset - 688)
    setActivePage('person')
  }

  const plusOffset = () => {
    if (offset === 0) return
    setOffset(offset + 688)
    setActivePage('company')
  }

  return (
    <nav className='header'>
        <div className="header__row">
            <div className="row__person navElement" onClick={plusOffset}>
                <LeftArrow color={activePage === 'company' ? 'gray' : '#FEFEFE'}/>
                <p className='person-title' style={activePage === 'company' ? {color: 'gray'} : {color: 'white'}}> о сотруднике </p>
            </div>
            <div className="row__company navElement" onClick={minusOffset}>
                <p className='company-title' style={activePage === 'person' ? {color: 'gray'} : {color: 'white'}}> о компании </p>
                <RightArrow color={activePage === 'person' ? 'gray' : '#FEFEFE'}/>
            </div>
        </div>
    </nav>
  )
}

export {Header}