import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaFacebook, FaInstagram, FaTwitter}from 'react-icons/fa'
import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink, SocialMedia,SocialMediaWrap,SocialIcons,SocialIconLink,SocialMediaLogo,WebsiteRight
} from './FooterElements'

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/singin'>How it Works</FooterLink>
                                <FooterLink to='/singin'>Testemonials</FooterLink>
                                <FooterLink to='/singin'>Partners</FooterLink>
                                <FooterLink to='/singin'>Investors</FooterLink>
                                <FooterLink to='/singin'>FAQ</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Opportunities </FooterLinkTitle>
                                <FooterLink to='/singin'>UAE</FooterLink>
                                <FooterLink to='/singin'>Africa</FooterLink>
                                <FooterLink to='/singin'>Europe</FooterLink>
                                <FooterLink to='/singin'>Australia</FooterLink>
                                <FooterLink to='/singin'>The Americas</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Industries</FooterLinkTitle>
                                <FooterLink to='/singin'>Oil and Gas</FooterLink>
                                <FooterLink to='/singin'>Gold and Diamond</FooterLink>
                                <FooterLink to='/singin'>Cocoa and Coffee</FooterLink>
                                <FooterLink to='/singin'>Coal and Iron</FooterLink>
                                <FooterLink to='/singin'>Timber</FooterLink>
                        </FooterLinksItems>
                      {/* <FooterLinksItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                                <FooterLink to='/singin'>How it Works</FooterLink>
                                <FooterLink to='/singin'>Testemonials</FooterLink>
                                <FooterLink to='/singin'>Partners</FooterLink>
                                <FooterLink to='/singin'>Investors</FooterLink>
                                <FooterLink to='/singin'>FAQ</FooterLink>
                        </FooterLinksItems>  */} 
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/' onClick={toggleHome}>$Home</SocialMediaLogo>
                        <WebsiteRight>$ddd © 2020{new Date().getFullYear()}
                        All Rights Reserved
                        </WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' ariel-label='Facebook'>
                               <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' ariel-label='Instagram'>
                               <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' ariel-label='Twitter'>
                               <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
