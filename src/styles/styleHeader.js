import styled from 'styled-components'


export const ContainHeader = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    height:60px;
    padding:20px;
`

export const ItemHeader = styled.div`
    opacity:${props => props.close ? 1 : 0};
    display:${props => props.close ? 'block' : 'none'};
    flex-direction: column;
    background-color:#ffff;
    position:absolute;
    padding:20px 0;
    width:calc(100% - 40px);
    transition: all .1s linear;
    bottom:-310px;
    border-radius: 5px;
    p{
        text-align:center;
        margin:25px 0;
        font-weight: 700;
        color:hsl(233, 12%, 13%);
        cursor:pointer;
        transition: all .1s linear;
    }
    p:hover{
        color:hsl(227, 12%, 61%);
    }
    @media (min-width:768px){
        opacity: 1;
        position: static;
        background:none;
        display:flex;
        flex-direction: row;
        justify-content: center;
        p{
            margin:0 15px;
        }
    }
`

export const CloseHamburger = styled.button`
    border:none;
    outline:none;
    background:none;
    cursor: pointer;
    img{
        width:22px;
        height: 20px;
    }
    @media (min-width:768px){
        display:none;
    }
`

export const GetStarted = styled.button`
    border:none;
    outline:none;
    width:160px;
    height: 45px;
    background:${props => props.white ? '#fff' : 'hsl(12, 88%, 59%)'};
    border-radius: 30px;
    padding:5px 20px;
    display:${props => props.responsive ? 'block' : 'none'};
    font-weight: 1000;
    font-size:16px;
    color:${props => props.white ? 'hsl(12, 88%, 59%)' : 'hsl(0, 0%, 98%)'};
    font-weight: 500;
    cursor:pointer;
    @media (min-width:768px){
        display:block;
    }
`