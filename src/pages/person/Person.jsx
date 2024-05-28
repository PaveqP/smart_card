import React from 'react'
import { Contacts } from '../../components'
import { Socials, SocialsMobile } from '../../components'
import { Save, CallAction } from '../../ui'
import './Person.scss'

function Person({data, mobile}) {
  console.log(mobile)
  return (
    <section className='person'>
      <div className="person__row">
        <div className="person__actions">
          <p className='person__logo'>{data && data.logo}</p>
          <div className="actions__photos">
            {data &&
              (mobile ?
              data.mobilePhoto.map((photo) => (
                <img src={photo} alt="photo" />
              ))
              :
              data.photo.map((photo) => (
                <img src={photo} alt="photo" />
              )))
            }
            <div className="actions__buttons">
              <button className="buttons-save actionButton">
                <Save/>
                <a href="">СОХРАНИТЬ ВИЗИТКУ</a>
              </button>
              <button className="buttons-call actionButton">
                <CallAction/>
                <a href={data && `tel:${data.mainPhone}`}>ПОЗВОНИТЬ</a>
              </button>
            </div>
          </div>
          <button className="actions__addContacts">
            ДОБАВИТЬ В КОНТАКТЫ
          </button>
        </div>
        <Contacts data={data}/>
      </div>
      <Socials/>
    </section>
  )
}

export {Person}
