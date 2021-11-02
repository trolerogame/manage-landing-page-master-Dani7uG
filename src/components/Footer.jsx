import React from 'react'
import { ContainFooter,Form,ImgsIconsContain,Items } from '../styles/styleFooter'
import facebook from '../../images/icon-facebook.svg'
import youtube from '../../images/icon-youtube.svg'
import twitter from '../../images/icon-twitter.svg'
import pinterest from '../../images/icon-pinterest.svg'
import instagram from '../../images/icon-instagram.svg'
import Logo from './Logo'
const Footer = () => {
    const item = ['Home' ,'Pricing' ,'Products' ,'About Us' ,'Careers' ,'Community' ,'Privacy Policy']
    const networks = [facebook,youtube,twitter,pinterest,instagram]
    return (
        <ContainFooter>
            <Form>
                <input type="text" placeholder="Updates in your inbox..." />
                <button type='button'>GO</button>
            </Form>
            <Items>
                <div>
                    {item.slice(0,4).map((it,i) => <p key={i}>{it}</p>)}
                </div>
                <div>
                    {item.slice(4,item.length).map((it,i) => <p key={i}>{it}</p>)}
                </div>
            </Items>
            <ImgsIconsContain>
                {networks.map((icon,i) => <img src={icon} key={i}/>)}
            </ImgsIconsContain>
            <Logo color='hsl(0, 0%, 98%)'/>
            <p className='copyright'>Copyright 2020. All Rights Reserved</p>
        </ContainFooter>
    )
}

export default Footer
