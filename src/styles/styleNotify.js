import styled from 'styled-components';
import BgMovile from '/bg-simplify-section-mobile.svg'
import BgDesktop from '/bg-simplify-section-desktop.svg'


export const ContainNotify = styled.div`
    background:hsl(12, 88%, 59%) url(${BgMovile}) no-repeat;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding:70px 0 90px 0;
    h1{
        color:#fff;
        font-size:40px;
        margin:15px 20px 25px 20px;
    }
    @media (min-width: 768px) {
        flex-direction:row;
        justify-content:space-between;
        padding:50px 140px 70px 140px;
        margin-top:250px;
        h1{
            width: 500px;
            text-align:start;
        }
        background-image: url(${BgDesktop});
        background-position: 100px -60px;
        background-size:100%;
    }
`