import React from 'react'
import { Dzen, Facebook, Instagram, LinkedIn, Ok, Telegram, TikTok, Viber, VK, WhatsApp, YT } from '../../ui'
import './Socials.scss'

function Socials() {
  return (
    <section className='socials'>
        <div className="socials-separator">

        </div>
        <div className="socials__row">
            <a className="socials-element" title='telegram' href='https://t.me/Qw_wi'>
                <Telegram size={24}/>
            </a>
            <a className="socials-element" title='WhatsApp' href='https://api.whatsapp.com/send?phone=89052571777'>
                <WhatsApp size={24}/>
            </a>
            <a className="socials-element" title='Viber' href='https://www.viber.com/ru/'>
                <Viber size={24}/>
            </a>
            <a className="socials-element" title='Instagram' href='https://www.instagram.com/'>
                <Instagram size={24}/>
            </a>
            <a className="socials-element" title='VK' href='https://vk.com/kkdnc'>
                <VK size={24}/>
            </a>
            <a className="socials-element" title='Facebook' href='https://ru-ru.facebook.com/'>
                <Facebook size={24}/>
            </a>
            <a className="socials-element" title='YT' href='https://www.youtube.com/'>
                <YT size={24}/>
            </a> 
            <a className="socials-element" title='Ok' href='https://ok.ru/'>
                <Ok size={24}/>
            </a>
            <a className="socials-element" title='Dzen' href='https://dzen.ru'>
                <Dzen size={24}/>
            </a>
            <a className="socials-element" title='TikTok' href='https://www.tiktok.com/explore'>
                <TikTok size={24}/>
            </a>
            <a className="socials-element" title='LinkedIn' href='https://careers.linkedin.cn/'>
                <LinkedIn size={24}/>
            </a>
        </div>
    </section>
  )
}

export {Socials}
