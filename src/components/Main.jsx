import React,{useState} from 'react'
import illustration from '../../images/illustration-intro.svg'
import { GetStarted } from '../styles/styleHeader'
import { Illustration,ContainText,Manage,ContainManageText,ContainComments,ContainPoints,Point,Carousel,ContainIllustration } from '../styles/styleBody'
import manage from '../Manage.json'
import comment from '../Comment.json'
const Main = () => {
    const [com,setCom] = useState(1)
    return (
        <main>
            <ContainIllustration>
                <Illustration src={illustration}/>
                <ContainText>
                    <h1>
                        Bring everyone together to build better products.
                    </h1>
                    <p>
                        Manage makes it simple for software teams to plan day-to-day 
                        tasks while keeping the larger team goals in view.
                    </p>
                    <GetStarted responsive>Get Started</GetStarted>
                </ContainText>
            </ContainIllustration>
            <ContainManageText>
                <ContainText>
                    <h2>What’s different about Manage?</h2>
                    <p>
                        Manage provides all the functionality your team needs, without 
                        the complexity. Our software is tailor-made for modern digital 
                        product teams. 
                    </p>
                </ContainText>
                <div>
                    {manage.map((item,i) => 
                        <Manage key={i}>
                            <div>
                                <span>{item.num}</span>
                                <b>{item.title}</b>
                            </div>
                            <p>{item.text}</p>
                        </Manage>
                    )}
                </div>
            </ContainManageText>
            <ContainComments>
                <ContainText center>
                    <h2>What they’ve said</h2>
                </ContainText>
                {comment.slice(com,com+1).map((item,i) => 
                    <Carousel>
                        <img key={i} src={item.avatar} alt={`imagen ${com+1}`} />
                        <b>{item.author}</b>
                        <p>{item.comment}</p>
                    </Carousel>
                )}
                <ContainPoints>
                    {comment.map((it,i) => 
                        <Point key={i} focus={com == i} onClick={() => setCom(i)}></Point>  
                    )}
                </ContainPoints>
                <GetStarted responsive>Get Started</GetStarted>
            </ContainComments>
        </main>
    )
}

export default Main
