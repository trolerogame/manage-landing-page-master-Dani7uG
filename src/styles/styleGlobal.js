import {createGlobalStyle} from 'styled-components'
import bg from '/bg-tablet-pattern.svg'

export const GlobalStyle = createGlobalStyle`
    body{
        overflow-x: hidden;
        margin:0;
        padding:0;
        background:url(${bg}) no-repeat;
        background-position: 0px -100px;
        background-size:150%;
        box-sizing: border-box;
        font-family: 'Be Vietnam', sans-serif;
        @media (min-width: 768px) {
            background-size:50%;
            background-position:400px 50px;
        }
    }
`