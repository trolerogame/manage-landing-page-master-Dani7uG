import React from 'react'
import Logo from '../../public/logo.svg'
import Hamburger from '../../public/icon-hamburger.svg'
import { ContainHeader,CloseHamburger,ItemHeader,GetStarted } from '../styles/styleHeader'
import Close from '../../public/icon-close.svg'
const Header = ({close,setClose}) => {
    const item = ['Pricing','Product','About Us','Careers', 'Community']
    return (
        <ContainHeader>
            <img src={Logo} alt="" />
            <ItemHeader close={close}>
                {item.map((it,i) => <p key={i}>{it}</p>)}
            </ItemHeader>
            <CloseHamburger onClick={() => setClose(!close)}>
                <img src={close ? Close : Hamburger} alt="hamburger/close" />
            </CloseHamburger>
            <GetStarted>
                Get Started
            </GetStarted>
        </ContainHeader>
    )
}

export default Header
