import React from 'react'
import{ SideBarContainer, Icon, CloseIcon,SideBarWrapper, SideBarBtnWrap,SideBarMenu,SideBarLink,SideBarRoute} from './SideBarElements'

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} >
            <Icon>
             <CloseIcon onClick={toggle} isOpen={isOpen}/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu onClick={toggle}>
                    <SideBarLink to='about'onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to='services'onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLink to='opportunities'onClick={toggle}>
                    Opportunities
                    </SideBarLink>
                    <SideBarLink to='create-account'onClick={toggle}>
                    Create Account
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarRoute to ='/signin'>Sign In</SideBarRoute>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
