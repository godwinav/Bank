import React from 'react'
import {Button } from '../ButtonElements';
import { Column2, Img, ImgWrap , InfoSectionContainer, InfoSectionWrapper, InfoRow, Column1,
TextWrapper,TopLine, Heading, SubTitle, BtnWrap} from './InfoSectionElements'

const InfoSection = ({lightBg,id, imgStart,topLine,lightText,darkText,description,alt,img,buttonLabel,headLine,primary,dark,dark2}) => {
    return (
        <>
          <InfoSectionContainer lightBg={lightBg} id={id}>
              <InfoSectionWrapper>
                  <InfoRow imgStart={imgStart}>
                      <Column1>
                        <TextWrapper>
                           <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headLine}</Heading>
                             <SubTitle darkText={darkText}>{ description}</SubTitle>
                            <BtnWrap>
                            <Button 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1: 0}
                            dark2={dark2 ? 1 : 0}
                             to='Home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                      <ImgWrap>
                        <Img src={img} alt={alt}/>
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoSectionWrapper> 
          </InfoSectionContainer>  
        </>
    )
}

export default InfoSection
