import React,{useState} from 'react'
import Footer from '../Footer'
import Hero from '../HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../InfoSection/Data'
import InfoSection from '../InfoSection/Index'
import Navbar from '../NavBar'
import Services from '../Services'
import SideBar from '../SideBar'

const Home = () => {

    const [isOpen, setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>  
          <Navbar toggle={toggle} />
          <Hero />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Services/>
          <InfoSection {...homeObjThree}/>
          <Footer/>
         
        </>
    )
}

export default Home
