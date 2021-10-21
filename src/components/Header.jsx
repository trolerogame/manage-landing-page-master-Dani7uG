import React from 'react'
import Logo from '../../images/logo.svg'
import Hamburger from '../../images/icon-hamburger.svg'
import Close from '../../images/icon-close.svg'
const Header = ({close,setClose}) => {
    const item = ['Pricing','Product','About Us','Careers', 'Community']
    return (
        <header>
            <img src={Logo} alt="" />
            <div>
                {item.map((it,i) => <p key={i}>{it}</p>)}
            </div>
            <button onClick={() => setClose(!close)}>
                <img src={close ? Close : Hamburger} alt="hamburger/close" />
            </button>
        </header>
    )
}

export default Header
