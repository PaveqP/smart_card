import React from 'react'
import { Mobile, Phone, Mail, Links, Geo, Calendar, User } from '../../ui'
import { SocialsMobile } from '../../components'
import './Contacts.scss'

function Contacts({data}) {
  return (
    <div className='contacts'>
      { data &&
        <div className="contacts__list">
            <div className="contacts-logo">
              {data.logo}
            </div>
            <div className="contacts-separator">

            </div>
            <div className="contacts__info">
              <div className="info__main">
                <p className="info-name">
                  {data.name}
                </p>
                <p className="info-post">
                  {data.post}
                </p>
              </div>
              <div className="contacts-infoSeparator">

              </div>
              <div className="info__data">
                <div className="info-mobile contact-row">
                  <Mobile/>
                  <a href={`tel:${data.mainPhone}`}>{data.mainPhone}</a>
                </div>
                <div className="info-phone contact-row">
                  <Phone/>
                  <a href={`tel:${data.secondPhone}`}>{data.secondPhone}</a>
                </div>
                <div className="info-phone contact-row">
                  <Phone/>
                  <a href={`tel:${data.thirdPhone}`}>{data.thirdPhone}</a>
                </div>
                <div className="info-mail contact-row">
                  <Mail/>
                  <a href={`mailto:${data.mail}`}>{data.mail}</a>
                </div>
                <div className="info-site contact-row">
                  <Links/>
                  <a href={data.webSite}>{data.webSite}</a>
                </div>
                <div className="info-address contact-row">
                  <Geo/>
                  <p>{data.address}</p>
                </div>
                <div className="info-date contact-row">
                  <Calendar/>
                  <p>{data.dateOfBirth}</p>
                </div>
                <div className="info-date contact-row">
                  <User/>
                  <p>{data.rank}</p>
                </div>
              </div>
              <div className="contacts-infoSeparator">

              </div>
              <SocialsMobile/>
            </div>
        </div>
        }
    </div>
  )
}

export {Contacts}
