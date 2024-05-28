import React, { useEffect, useState } from 'react'
import { Company } from '../company/Company'
import { Person } from '../person/Person'
import './Pages.scss'

function Pages({offset, mobile}) {

    console.log(offset)

    const [data, setData] = useState()

    const fetchData = () => {
        const data = require('../../data/data.json')
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='pages'>
        <div className="pages__window">
            <div className="pages__elements" style={{transform: `translateX(${offset}px)`}}> 
                <Person data={data && data.person} mobile={mobile}/>
                <Company data={data && data.company}/>
            </div>
        </div>
    </div>
  )
}

export {Pages}
