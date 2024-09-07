import React from 'react'
import './TedrisSahesi.css'

import { IoMdClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// typescript interface

interface TedrisSahesi {
    basliq: string;
    content:string;
    shekil:string;
}

const TedrisSahesi:React.FC<TedrisSahesi> = ({basliq, content, shekil}) => {
    const navigate = useNavigate()
    const anaSehifeyeKec = () => {
        navigate("/")
    }
  return (

    <div className="yonlendirme fixed h-[100vh] bg-[#ddd] z-[50] w-[100%] top-[0]">

    <div className="geri  bg-[#fff] flex justify-between items-center p-[20px] m-[10px] me-[20px] rounded-[10px]">
        <button className='flex text-[20px] items-center' onClick={anaSehifeyeKec}> <FaChevronLeft className='text-[20px] me-[10px]' />Geri</button>

        <IoMdClose className='text-[20px]' />

    </div>

      <div className='p-[20px] me-[10px]'>
          <h5 className='mb-3'>{basliq}</h5>
          <p className=' bg-[#fff] flex rounded-[10px] items-center'><img src={shekil} alt="" className='w-[50px]' /> {content}</p>
      </div>
    </div>

  
  )
}

export default TedrisSahesi