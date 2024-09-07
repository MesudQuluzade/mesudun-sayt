import React from 'react'
import FeedbackRating from './FeedbackRating'
import Feedback from './Feedback'

const FeedbackSection:React.FC = () => {
  return (
    <div className='feedback-section'>
        <div className="flex flex-wrap">
            <div className="feedback w-full md:w-1/2">
                <Feedback />
            </div>

            <div className="feedback-rating w-full md:w-1/2">
                <FeedbackRating />
            </div>
        </div>
    </div>
  )
}

export default FeedbackSection