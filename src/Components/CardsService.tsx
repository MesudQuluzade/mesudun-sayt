import React from 'react';

interface CardsServiceProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const CardsService: React.FC<CardsServiceProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card p-[20px]">
      <div className="headline flex items-start justify-between">
        <h3 className='text-[18px] font-semibold'>{title}</h3>
        <span className='bg-[#f4f6fa] p-[6px] border rounded-[50px]'>
          <img src="/images/arrow-right.svg" alt="Arrow Right" />
        </span>
      </div>
      <p className='text-[14px]'>{description}</p>
      <img src={imageUrl} className='h-[200x] w-[200px] mx-auto' alt="Service Image" />
    </div>
  );
};
