import React, { useRef } from 'react'
import "./Header.css"

import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdCloseCircleOutline } from "react-icons/io";




const Header:React.FC = () => {

    const mobileMenu = useRef<HTMLDivElement>(null)

    const openNavbar = () => {
        if (mobileMenu.current) {
            mobileMenu.current.classList.add("aktiv");
        }
    }

    const closeNavbar = () => {
        if (mobileMenu.current) {
            mobileMenu.current.classList.remove("aktiv");
        }
    }
    
  return (
    <>

<div className="header-mobile md:hidden" ref={mobileMenu}>
    <div className="header-bottom flex justify-between items-center h-[100px] px-[24px] py-[20px]">
            <span className="logo">
                WebMaster.az
            </span>

       

            <IoMdCloseCircleOutline className='text-[#B56DFF] text-4xl' onClick={closeNavbar}  />


        </div>

        <div className="mobile-links">
            <div className="links-top">
                <a href="">Saytlar Üçün</a>
                <a href="">Texniki dəstək</a>
            </div>

            <div className="links-center">
                <a href="">Veb Sayt</a>
                <a href="">Domen</a>
                <a href="">Hostinq</a>
                <a href="">Xidmətlər</a>
            </div>
        </div>
    </div>
    <header className='header'>
        <div className="header-top hidden md:flex justify-between py-[20px] px-[24px]">
            <div className="top-bar-left flex gap-[40px]">
                <a href="#" className='line'>Saytlar Üçün</a>
                <a href="#">Texniki dəstək</a>
            </div>
             
            <div className="header-top-right flex gap-[40px] text-[14px]">
                <a href="#">Məsləhət Mərkəzi</a>
                <a href="#">Uğur hekayələrimiz</a>
                <a href="#">Əlaqə</a>
            </div>
        </div>
        
        <div className='w-[100%] h-[1px] bg-[#F5F7FB]'></div>

        <div className="header-bottom flex justify-between items-center h-[100px] px-[24px] py-[20px]">
            <span className="logo">
                WebMaster.az
            </span>

            <nav className="nav-links hidden md:flex gap-[40px]">
                <a href="#">Veb Sayt</a>
                <a href="#">Domen</a>
                <a href="#">Hostinq</a>
                <a href="#">Xidmətlər</a>
                <a href="#">İşlərimiz</a>
            </nav>

            <button className='apply hidden md:flex items-center bg-[#B56DFF] py-[10px] px-[16px] rounded-[14px] text-[#fff]'><img src="./images/header/send.svg" alt="" className='mr-[5px]'/>Müraciət et</button>
            <HiBars3BottomRight className='text-[#B56DFF] text-4xl md:hidden' onClick={openNavbar}/>
        </div>
    </header>
    </>
  )
}

export default Header