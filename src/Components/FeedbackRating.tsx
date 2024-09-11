import React from 'react'
import { FaStar } from "react-icons/fa6";


const FeedbackRating:React.FC = () => {
  return (
    <div className='flex flex-col gap-[30px] justify-center py-[100px] bg-[#fff] rounded-[16px] px-[20px]'>
      <div className="rating-top flex items-center gap-10">
      <div className="stars bg-[#B56DFF] w-[128px] py-[8px] px-[12px] flex gap-[7px] rounded-[10px]">
         <FaStar className="text-[#fff]" />
         <FaStar className="text-[#fff]" />
         <FaStar className="text-[#fff]" />
         <FaStar className="text-[#fff]" />
         <FaStar className="text-[#fff]" />
     

      </div>
      <span>5/5</span>
      <span>450+ rəy</span>
      </div>

      <div className="rating-center">
        <h6>İstifadəçilərimiz bizi “Google Map” üzərindən 4.9 dəyərləndirir</h6>
      </div>

      <div className="rating-end">
        <img src="/images/google-maps.svg" alt="" />
      </div>
  

    </div>
  )
}

export default FeedbackRating