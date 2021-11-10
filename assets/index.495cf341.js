import{W as u,s as a,R as e,r as m,A as g,a as h}from"./vendor.fe96c187.js";const x=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}};x();var f="/manage-landing-page-master-Dani7uG/assets/bg-tablet-pattern.1b3e62f1.svg";const v=u`
    body{
        overflow-x: hidden;
        margin:0;
        padding:0;
        background:url(${f}) no-repeat;
        background-position: 0px -100px;
        background-size:150%;
        box-sizing: border-box;
        font-family: 'Be Vietnam', sans-serif;
        @media (min-width: 768px) {
            background-size:50%;
            background-position:400px 50px;
        }
    }
`;var b="/manage-landing-page-master-Dani7uG/assets/logo.e5cbf81a.svg",y="/manage-landing-page-master-Dani7uG/assets/icon-hamburger.0c2573b0.svg";const w=a.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    height:60px;
    padding:20px;
`,E=a.div`
    opacity:${t=>t.close?1:0};
    display:${t=>t.close?"block":"none"};
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
`,k=a.button`
    border:none;
    outline:none;
    background:none;
    img{
        width:22px;
        height: 20px;
    }
    @media (min-width:768px){
        display:none;
    }
`,p=a.button`
    border:none;
    outline:none;
    width:160px;
    height: 45px;
    background:${t=>t.white?"#fff":"hsl(12, 88%, 59%)"};
    border-radius: 30px;
    padding:5px 20px;
    display:${t=>t.responsive?"block":"none"};
    font-weight: 1000;
    font-size:16px;
    color:${t=>t.white?"hsl(12, 88%, 59%)":"hsl(0, 0%, 98%)"};
    font-weight: 500;
    cursor:pointer;
    @media (min-width:768px){
        display:block;
    }
`;var C="/manage-landing-page-master-Dani7uG/assets/icon-close.4ba9bc15.svg";const z=({close:t,setClose:o})=>{const i=["Pricing","Product","About Us","Careers","Community"];return e.createElement(w,null,e.createElement("img",{src:b,alt:""}),e.createElement(E,{close:t},i.map((l,n)=>e.createElement("p",{key:n},l))),e.createElement(k,{onClick:()=>o(!t)},e.createElement("img",{src:t?C:y,alt:"hamburger/close"})),e.createElement(p,null,"Get Started"))},G=a.footer`
    background-color:#222;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:50px 10px 15px 10px;
    .copyright{
        color:#999;
    }
    #hidden{
        display:none;
    }
    svg{
        margin:30px 0;
    }
    @media (min-width:768px){
        flex-direction: row-reverse;
        justify-content:space-around;
        .copyright{
            display:none;
        }
        #hidden{
            display:block;
        }
    }
`,M=a.form`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    
    .form{
        display:flex;
    }
    input{
        border-radius: 30px;
        padding:15px 25px;
        margin-right:10px;
        width:200px;
        font-size:16px;
        border:none;
        outline:none;
        color:${t=>t.validate==="true"?"#111":"#e84118"};
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
        height: 50px;
        width: 80px;
        font-weight: 700;
        color:#fff;
        cursor:pointer;
    }
    p{
       color:#e84118;
       margin:1px 0;
    }
    @media (min-width:768px){
        height:200px;
    }
`,S=a.div`
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
`,j=a.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    @media (min-width:768px){
        height:200px;
    }
`,D=a.div`
    margin:20px 0;
    img{
        width:35px;
        height: 35px;
        margin:0 15px;
    }
`;var I="/manage-landing-page-master-Dani7uG/assets/icon-facebook.59a06be6.svg",V="/manage-landing-page-master-Dani7uG/assets/icon-youtube.b0cc86fd.svg",A="/manage-landing-page-master-Dani7uG/assets/icon-twitter.f8cbb34e.svg",$="/manage-landing-page-master-Dani7uG/assets/icon-pinterest.b07d28d7.svg",P="/manage-landing-page-master-Dani7uG/assets/icon-instagram.14afdaea.svg",_=({color:t})=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"146",height:"24"},e.createElement("g",{fill:"none","fill-rule":"evenodd"},e.createElement("path",{fill:t,"fill-rule":"nonzero",d:"M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"}),e.createElement("g",{fill:"#F3603C"},e.createElement("path",{d:"M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z"}),e.createElement("ellipse",{cx:"12.814",cy:"13.257",opacity:".5",rx:"2.786",ry:"2.857"}))));const L=()=>{const t=m.exports.useRef(null),[o,i]=m.exports.useState(!0),l=()=>i(t.current.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g)!==null),n=["Home","Pricing","Products","About Us","Careers","Community","Privacy Policy"],r=[I,V,A,$,P];return e.createElement(G,null,e.createElement(M,{validate:o.toString()},e.createElement("div",{className:"form"},e.createElement("div",null,e.createElement("input",{ref:t,type:"text",placeholder:"Updates in your inbox..."}),!o&&e.createElement("p",null,"Please insert a valid email")),e.createElement("button",{onClick:l,type:"button"},"GO")),e.createElement("p",{className:"copyright",id:"hidden"},"Copyright 2020. All Rights Reserved")),e.createElement(S,null,e.createElement("div",null,n.slice(0,4).map((s,c)=>e.createElement("p",{key:c},s))),e.createElement("div",null,n.slice(4,n.length).map((s,c)=>e.createElement("p",{key:c},s)))),e.createElement(j,null,e.createElement(_,{color:"hsl(0, 0%, 98%)"}),e.createElement(D,null,r.map((s,c)=>e.createElement("img",{src:s,key:c})))),e.createElement("p",{className:"copyright"},"Copyright 2020. All Rights Reserved"))};var N="/manage-landing-page-master-Dani7uG/assets/illustration-intro.ed8c77b7.svg";const R=a.div`
    display:flex;
    flex-direction: column;
    @media (min-width:768px){
        margin-top:150px;
        margin-bottom: 100px;
        flex-direction: row-reverse;
        justify-content: space-around;
    }
`,O=a.img`
    width:100%;
    min-height:300px;
    object-fit: cover;
    @media (min-width:768px){
        max-width: 450px;
        height: 400px;
    }
`,d=a.div`
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
        align-items:${t=>t.center?"center":"start"};
        h1{
            text-align:start;
        }
        p{
            text-align: start;
        }
        width: 550px;
    }
`,B=a.div`
    margin:100px 0;
    @media (min-width: 768px){
        display:flex;
        justify-content:space-around;
    }
`,H=a.div`
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
`,T=a.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:40px 10px;
    .alice-carousel__dots-item{
        display:inline-block;
        margin:0px 2.5px 30px 2.5px;
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
    }
`;a.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;a.div`

`;const F=a.div`
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
`;var W=[{num:"01",title:"Track company-wide progress",text:"  See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},{num:"02",title:"Advanced built-in reports",text:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."},{num:"03",title:"Everything you need in one place",text:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}],U=[{avatar:"../images/avatar-anisha.png",author:"Anisha Li",comment:"\u201CManage has supercharged our team\u2019s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.\u201D"},{avatar:"../images/avatar-ali.png",author:"Ali Bravo",comment:"\u201CWe have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.\u201D"},{avatar:"../images/avatar-richard.png",author:"Richard Watts",comment:"\u201CManage allows us to provide structure and process. It keeps us organized and focused. I can\u2019t stop recommending them to everyone I talk to!\u201D"},{avatar:"../images/avatar-shanai.png",author:"Shanai Gough",comment:"\u201CTheir software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.\u201D"}];const q=()=>{const t=U.map((i,l)=>e.createElement(F,null,e.createElement("img",{key:l,src:i.avatar,alt:"imagen"}),e.createElement("b",null,i.author),e.createElement("p",null,i.comment))),o={0:{items:1},1024:{items:3}};return e.createElement("main",null,e.createElement(R,null,e.createElement(O,{src:N}),e.createElement(d,null,e.createElement("h1",null,"Bring everyone together to build better products."),e.createElement("p",null,"Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."),e.createElement(p,{responsive:!0},"Get Started"))),e.createElement(B,null,e.createElement(d,null,e.createElement("h2",null,"What\u2019s different about Manage?"),e.createElement("p",null,"Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.")),e.createElement("div",null,W.map((i,l)=>e.createElement(H,{key:l},e.createElement("div",null,e.createElement("span",null,i.num),e.createElement("b",null,i.title)),e.createElement("p",null,i.text))))),e.createElement(T,null,e.createElement(d,{center:!0},e.createElement("h2",null,"What they\u2019ve said")),e.createElement(g,{responsive:o,disableButtonsControls:!0,mouseTracking:!0,items:t}),e.createElement(p,{responsive:!0},"Get Started")))};var K="/manage-landing-page-master-Dani7uG/assets/bg-simplify-section-mobile.d5a2eb69.svg",J="/manage-landing-page-master-Dani7uG/assets/bg-simplify-section-desktop.830b4ec0.svg";const Q=a.div`
    background:hsl(12, 88%, 59%) url(${K}) no-repeat;
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
        background-image: url(${J});
        background-position: 100px -60px;
        background-size:100%;
    }
`,X=()=>e.createElement(Q,null,e.createElement("h1",null,"Simplify how your team works today."),e.createElement(p,{responsive:!0,white:!0},"Get Started"));function Y(){const[t,o]=m.exports.useState(!1);return e.createElement(e.Fragment,null,e.createElement(v,null),e.createElement(z,{close:t,setClose:o}),e.createElement(q,null),e.createElement(X,null),e.createElement(L,null))}h.render(e.createElement(Y,null),document.getElementById("root"));
