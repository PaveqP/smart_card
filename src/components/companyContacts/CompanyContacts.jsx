import React from 'react'
import { Phone, Mail, Links, Geo, Calendar, User, Fax } from '../../ui'
import './CompanyContacts.scss'

function CompanyContacts({data}) {
  return (
    <section >
      { data &&
        <div className="companyContacts__list">
            <div className="companyContacts__info">
              <div className="info-phone contact-row">
                <Phone/>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
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
                <p>{data.dateOfFoundation}</p>
              </div>
              <div className="info-users contact-row">
                <User/>
                <div className="info-usersList">
                    {data.customers.map((customer, customerId) => (
                        <p key={customerId}>{customer}</p>
                     ))}
                </div>
              </div>
              <div className="info-fax contact-row">
                <Fax/>
                <p>{data.fax}</p>
              </div>
            </div>
        </div>
        }
    </section>
  )
}

export {CompanyContacts}