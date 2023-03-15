import React,{useState,useRef} from 'react'
import { ContainFooter,Form,ImgsIconsContain,Items,ContainLogoIcons } from '../styles/styleFooter'
import facebook from '/icon-facebook.svg'
import youtube from '/icon-youtube.svg'
import twitter from '/icon-twitter.svg'
import pinterest from '/icon-pinterest.svg'
import instagram from '/icon-instagram.svg'
import Logo from './Logo'
const Footer = () => {
    const email = useRef(null)
    const [validate,setValidate] = useState(true)
    const validateEmail = () => 
        setValidate(email.current.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g) !== null)
    
    const item = ['Home' ,'Pricing' ,'Products' ,'About Us' ,'Careers' ,'Community' ,'Privacy Policy']
    const networks = [facebook,youtube,twitter,pinterest,instagram]
    return (
        <ContainFooter>
            <Form validate={validate.toString()} >
                <div className="form">
                    <div>
                        <input ref={email} type="text" placeholder="Updates in your inbox..." />
                        {!validate && <p>Please insert a valid email</p>}
                    </div>
                    <button onClick={validateEmail} type='button'>GO</button>
                </div>
                <p className='copyright' id='hidden'>Copyright 2020. All Rights Reserved</p>
            </Form>
            <Items>
                <div>
                    {item.slice(0,4).map((it,i) => <p key={i}>{it}</p>)}
                </div>
                <div>
                    {item.slice(4,item.length).map((it,i) => <p key={i}>{it}</p>)}
                </div>
            </Items>
            <ContainLogoIcons>
                <Logo color='hsl(0, 0%, 98%)'/>
                <ImgsIconsContain>
                    {networks.map((icon,i) => <img src={icon} key={i}/>)}
                </ImgsIconsContain>
            </ContainLogoIcons>
            <p className='copyright'>Copyright 2020. All Rights Reserved</p>
        </ContainFooter>
    )
}

export default Footer
