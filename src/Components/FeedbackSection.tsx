import React from 'react'
import FeedbackRating from './FeedbackRating'
import Feedback from './Feedback'



const FeedbackSection:React.FC = () => {
  return (
    <div className='feedback-section pt-[20px] pb-[100px]'>
        <div className="flex flex-wrap">
            <div className="feedback w-full md:w-1/2">
                <Feedback />
            </div>

            <div className="feedback-rating w-full md:w-1/2 px-[10px] md:px-[30px] my-[20px]">
                <FeedbackRating />
            </div>
        </div>
    </div>
  )
}

export default FeedbackSection