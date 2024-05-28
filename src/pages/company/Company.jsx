import React from 'react'
import './Company.scss'
import { CompanyContacts, Socials, SocialsMobile } from '../../components'

function Company({data}) {
  return (
    <section className='company'>
      <div className="company-separator">

      </div>
      <div className="company__row">
        <div className="company__actions">
          <div className="actions__baseInfo">
            <p className="baseInfo-logo">
              {data && data.logo}
            </p>
            <p className="baseInfo-name">
              {data && data.name}
            </p>
            <p className="baseInfo-description">
              {data && data.description}
            </p>
          </div>
        </div>
        <div className="company-blockSeparator">

        </div>
        <CompanyContacts data={data}/>
        <div className="company-blockSeparator">

        </div>
        <SocialsMobile/>
      </div>
      <Socials/>
    </section>
  )
}

export {Company}