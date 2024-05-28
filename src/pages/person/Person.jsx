import React from 'react'
import { Contacts } from '../../components'
import { Socials, SocialsMobile } from '../../components'
import { jsPDF } from 'jspdf';
import { Save, CallAction } from '../../ui'
import './Person.scss'

function Person({data, mobile}) {
  
  function downloadContacts(data) {
    const { name, mainPhone } = data;
    const fileContent = `Name: ${name}\nPhone: ${mainPhone}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contacts.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function saveVCard(data) {
    const vCardContent = `
      BEGIN:VCARD
      VERSION:3.0
      FN:${data.name}
      TEL;TYPE=CELL:${data.mainPhone}
      EMAIL:${data.mail}
      ADR:${data.address}
      END:VCARD
    `;
  
    const blob = new Blob([vCardContent], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

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
              <button className="buttons-save actionButton" onClick={() => saveVCard(data)}>
                <Save/>
                <a href="">СОХРАНИТЬ ВИЗИТКУ</a>
              </button>
              <button className="buttons-call actionButton">
                <CallAction/>
                <a href={data && `tel:${data.mainPhone}`}>ПОЗВОНИТЬ</a>
              </button>
            </div>
          </div>
          <button className="actions__addContacts" onClick={() => downloadContacts(data)}>
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
