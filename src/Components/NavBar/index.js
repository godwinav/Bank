import React,{useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {IconContext} from 'react-icons/lib'
import{
    Nav,
    NavbarContainer,
    NavbarLogo,
    MobileIcons,
    NavMenu,
    NavItem, 
    NavLink,
    NavBtn,
    NavBtnLink
}
from './NavbarElements'
const NavBar = ({ toggle}) => {

    const [scrollNav , serScrollNav]=useState(false)
    

    const changeNav=()=>{
      if(window.scrollY >= 80){
          serScrollNav(true)
      }else{
          serScrollNav(false)
      }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
        
    }, [])

    const toggleHome=()=>{
        scroll.scrollToTop()
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer >
                  <NavbarLogo onClick={toggleHome} to='/'>$Home</NavbarLogo>
                  <MobileIcons  onClick={toggle}>
                      <FaBars/>
                  </MobileIcons>
                  <NavMenu>
                      <NavItem>
                          <NavLink to='about'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                         >About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='opportunities'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          >Opportunities</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='services'
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                          >Services</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='create-account'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          >Create Account</NavLink>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='signin'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80}
                      >Singn In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>  
        </IconContext.Provider>
        </>
    )
}

export default NavBar
