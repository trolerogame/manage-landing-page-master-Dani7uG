import styled from 'styled-components'

export const ContainFooter = styled.footer`
    background-color:#222;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:50px 10px 15px 10px;
    .copyright{
        color:#999;
    }
    svg{
        margin:30px 0;
    }
    @media (min-width:768px){
        flex-direction: row-reverse;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content:center;
    input{
        border-radius: 30px;
        padding:15px 25px;
        margin-right:10px;
        width:200px;
        font-size:16px;
        border:none;
        outline:none;
    }
    input::placeholder{
        color:#999;
        font-weight: 500;
    }
    button{
        border:none;
        outline:none;
        background-color: hsl(12, 88%, 59%);
        border-radius:30px;
        padding:15px 30px;
        font-weight: 700;
        color:#fff;
    }
`

export const Items = styled.div`
    display:flex;
    margin:35px 0 15px 0;
    div{
        margin:0 35px;
    }
    p{
        color:hsl(0, 0%, 98%);
        cursor:pointer;
        padding:5px;
        transition:color .1s linear;
    }
    p:hover{
        color:hsl(12, 88%, 59%);
    }
`

export const ImgsIconsContain = styled.div`
    margin:20px 0;
    img{
        width:35px;
        height: 35px;
        margin:0 15px;
    }
`