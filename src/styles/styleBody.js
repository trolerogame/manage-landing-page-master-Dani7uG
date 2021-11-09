import styled from 'styled-components'

export const ContainIllustration = styled.div`
    display:flex;
    flex-direction: column;
    @media (min-width:768px){
        margin-top:150px;
        margin-bottom: 100px;
        flex-direction: row-reverse;
        justify-content: space-around;
    }
`

export const Illustration = styled.img`
    width:100%;
    min-height:300px;
    object-fit: cover;
    @media (min-width:768px){
        max-width: 450px;
        height: 400px;
    }
`
export const ContainText = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:30px 20px;
    h1,h2{
        text-align: center;
        margin:0;
        font-size:40px;
        color:hsl(228, 39%, 23%);
        font-weight:700;
    }
    h2{
        font-size:32px;
    }
    p{
        margin:10px 10px 40px 10px;
        color:hsl(227, 12%, 61%);
        text-align:center;
    }
    @media (min-width:768px){
        align-items:${props => props.center ? 'center' : 'start'};
        h1{
            text-align:start;
        }
        p{
            text-align: start;
        }
        width: 550px;
    }
`

export const ContainManageText = styled.div`
    margin:100px 0;
    @media (min-width: 768px){
        display:flex;
        justify-content:space-around;
    }
`

export const Manage = styled.div`
    margin:40px 10px;
    div{
        display:flex;
        align-items:center;
        position: relative;
    }
    b{
        margin:0;
        background:hsl(13, 100%, 96%);
        color:hsl(228, 39%, 23%);
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;
        padding:10px 0px 10px 50px;
        width: 100%;
        text-align:center;
    }
    span{
        color:hsl(0, 0%, 98%);
        background: hsl(12, 88%, 59%);
        padding: 10px 25px;
        border-radius:30px;
        font-weight: 700;
        display:flex;
        align-items: center;
        position: absolute;
    }
    p{
        color:hsl(227, 12%, 61%);
        pointer-events: none;
    }
    @media (min-width:768px){
        b{
            background-color:none;
            text-align: start;
            padding:10px 0px 10px 0px;
            margin-left: 100px;
            border-radius:0;
            background:none;
        }
        p{
            padding-left: 100px;
            width:400px;
            
        }
    }
`

export const ContainComments = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:40px 10px;

`

export const ContainPoints = styled.div`
    margin:100px 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .alice-carousel__dots-item{
        display:inline-block;
        margin:0 2.5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border:1px solid hsl(12, 88%, 59%);
        cursor:pointer;
        transition: all .1s linear;
        background: none;
    }
    .alice-carousel__dots-item.__active{
        background: hsl(12, 88%, 59%);
    }
    .alice-carousel__dots-item:hover{
        background: hsl(12, 88%, 59%);
    }
    @media (min-width:768px){
        .alice-carousel__dots{
            display:none;
        }
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
`

export const Point = styled.div`

`

export const Carousel = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:20px 0;
    img{
        width: 70px;
        height: 70px;
        object-fit: cover;
        margin:10px 0;
    }
    b{
        color:hsl(228, 39%, 23%);
        font-size:20px;
        margin:10px 0;
    }
    p{
        pointer-events: none;
        color:hsl(227, 12%, 61%);
        text-align:center;
        margin:15px;
    }
`