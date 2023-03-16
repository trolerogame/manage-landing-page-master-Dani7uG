import React from 'react'
import illustration from '/illustration-intro.svg'
import { GetStarted } from '../styles/styleHeader'
import { Illustration,ContainText,Manage,ContainManageText,ContainComments,ContainIllustration, SlideStyle } from '../styles/styleBody'
import manage from '../Manage.json'
import comment from '../Comment.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
const Main = () => {
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
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
                    spaceBetween={50}
                    breakpoints={{
                        0:{
                            slidesPerView:1
                        },
                        650:{
                            slidesPerView:2
                        },
                        1024:{
                            slidesPerView:3
                        }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {comment.map((item,i) => 
                        <SwiperSlide>
                            <SlideStyle>
                                <img key={i} src={item.avatar} alt={`imagen`} />
                                <b>{item.author}</b>
                                <p>{item.comment}</p>
                            </SlideStyle>
                        </SwiperSlide>
                    )}
                </Swiper>
                <ContainText center>
                    <GetStarted responsive>Get Started</GetStarted>
                </ContainText>
                
            </ContainComments>
        </main>
    )
}

export default Main
