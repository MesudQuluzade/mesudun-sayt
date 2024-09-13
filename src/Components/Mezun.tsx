import React from 'react';

interface MezunProps {
  name: string;
  shekilProps:string;
}

const Mezun: React.FC<MezunProps> = ({ name, shekilProps }) => {
  return (
    <div className='bg-[#fff] p-5 w-full md:w-[calc(20%-1rem)] flex-shrink-0 rounded-[20px]'>
      <img 
        src={shekilProps} 
        alt={name} 
        className='w-[70px] h-[70px] rounded-[50%] block mx-auto md:mx-0' 
      />
      <h2 className='text-[18px] my-[10px] text-center md:text-left'>{name}</h2>
    </div>
  );
};

export default Mezun;
