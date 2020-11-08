import React,{useState} from 'react'
import video from '../videos/video.mp4'
import {Button} from '../ButtonElements'
import {HeroSectionContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroSectionElements'



const Hero = () => {
    const [hover, setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <HeroSectionContainer id='Home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Bank Like A Boss</HeroH1>
                <HeroP>Sign up to receive a whole year of services with no charges</HeroP>
                <HeroBtnWrapper>
                  <Button onMouseEnter={onHover} onMouseLeave={onHover} primay="true"
                   dark="true" 
                   smooth={true}
                   duration={500}
                   spy={true}
                   exact="true"
                   offset={-80}
                   to='create-account'>Get Started {hover? <ArrowForward/>:<ArrowRight/>}
                     </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroSectionContainer>
    )
}

export default Hero
