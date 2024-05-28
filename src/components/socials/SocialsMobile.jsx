import React from 'react'
import { Dzen, Facebook, Instagram, LinkedIn, Ok, Telegram, TikTok, Viber, VK, WhatsApp, YT, T, ICQ, Skype, Twitter } from '../../ui'
import './SocialsMobile.scss'

function SocialsMobile() {
  return (
    <section className='socialsMobile'>
        <div className="socialsMobile__row">
            <a className="socialsMobile-element" title='WhatsApp' href='https://api.whatsapp.com/send?phone=89052571777'>
                <WhatsApp size={52}/>
            </a>
            <a className="socialsMobile-element" title='telegram' href='https://t.me/Qw_wi'>
                <Telegram size={52}/>
            </a>
            <a className="socialsMobile-element" title='Viber' href='https://www.viber.com/ru/'>
                <Viber size={52}/>
            </a>
            <a className="socialsMobile-element" title='VK' href='https://vk.com/kkdnc'>
                <VK size={52}/>
            </a>
            <a className="socialsMobile-element" title='Ok' href='https://ok.ru/'>
                <Ok size={52}/>
            </a>
            <a className="socialsMobile-element" title='Teletype' href='https://teletype.in/'>
                <T size={52}/>
            </a>
            <a className="socialsMobile-element" title='Dzen' href='https://dzen.ru'>
                <Dzen size={52}/>
            </a>
            <a className="socialsMobile-element" title='Facebook' href='https://ru-ru.facebook.com/'>
                <Facebook size={52}/>
            </a>
            <a className="socialsMobile-element" title='TikTok' href='https://www.tiktok.com/explore'>
                <TikTok size={52}/>
            </a>
            <a className="socialsMobile-element" title='Instagram' href='https://www.instagram.com/'>
                <Instagram size={52}/>
            </a>
            <a className="socialsMobile-element" title='ICQ' href='https://icq.com/desktop/ru'>
                <ICQ size={52}/>
            </a>
            <a className="socialsMobile-element" title='Twitter' href='https://twitter.com/x/migrate?tok=eyJlIjoiL2xvZ2luP2xhbmc9cnUiLCJ0IjoxNzE2ODU3NTgxfW8T%2BCPe2bJ0xDl6I36cYOY%3D'>
                <Twitter size={52}/>
            </a>
            <a className="socialsMobile-element" title='LinkedIn' href='https://careers.linkedin.cn/'>
                <LinkedIn size={52}/>
            </a>
            <a className="socialsMobile-element" title='YT' href='https://www.youtube.com/'>
                <YT size={52}/>
            </a> 
            <a className="socialsMobile-element" title='Skype' href='https://www.skype.com/en/'>
                <Skype size={52}/>
            </a> 
        </div>
    </section>
  )
}

export {SocialsMobile}