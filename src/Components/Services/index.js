import React from 'react'
import img from './t.svg'
import img2 from './p.svg'
import img3 from './s.svg'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP}from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={img}/>
                    <ServicesH2>Transfer Services</ServicesH2>
                    <ServicesP>We will help you transfer funds anywhere, anytime to meet your business needs with no hassles.
                     With us, the end result is a big smile.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={img2}/>
                    <ServicesH2>Financial Assistance</ServicesH2>
                    <ServicesP>We stand by you in difficult times to give you credit facilities to help you overcome your financial burdens</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={img3}/>
                    <ServicesH2>Investment opportunities </ServicesH2>
                    <ServicesP>We work around the clock to give you the best returns on every single dollar you invest with us</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
