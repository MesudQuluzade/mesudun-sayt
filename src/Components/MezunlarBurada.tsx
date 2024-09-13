import React, { useState } from 'react';
import './MezunlarBurada.css';
import Mezun from './Mezun';

const mezunlarData = [
  { id: 1, name: 'Black Smith', category: 'Digital Marketing', image:"https://xsgames.co/randomusers/assets/avatars/male/46.jpg" },
  { id: 2, name: 'John Doe', category: 'Dizayn', image:'https://randomuser.me/api/portraits/women/90.jpg' },
  { id: 3, name: 'Jane Smith', category: 'IT və kibertəhlükəsizlik', image:'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 4, name: 'Sara Ali', category: 'Proqramlaşdırma', image:'https://xsgames.co/randomusers/assets/avatars/male/8.jpg' },
  { id: 5, name: 'Michael Brown', category: 'Digital Marketing', image:'https://xsgames.co/randomusers/assets/avatars/male/6.jpg' },
  { id: 6, name: 'Masud Quluzade', category: 'Proqramlaşdırma', image:'https://xsgames.co/randomusers/assets/avatars/male/74.jpg' }
];

const MezunlarBurada: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredMezunlar = activeCategory 
    ? mezunlarData.filter(mezun => mezun.category === activeCategory)
    : mezunlarData;

  return (
    <section className='mezunlar-burada'>
      <h2 className='text-[#13171a] text-[36px]'>Bizim müştərilər</h2>

      <div className="filter-tabs my-3 flex flex-wrap justify-between">
        <div className="filter-left flex flex-wrap gap-4">
          <button onClick={() => setActiveCategory('Digital Marketing')}>Veb sayt xidmətləri</button>
          <button onClick={() => setActiveCategory('Dizayn')}>SMM xidmətləri</button>
          <button onClick={() => setActiveCategory('IT və kibertəhlükəsizlik')}>Helpdesk xidmətləri
          </button>
          <button onClick={() => setActiveCategory('Proqramlaşdırma')}>UI/UX xidmətləri</button>
          <button onClick={() => setActiveCategory(null)}>Hamısı</button> {/* Kateqoriyaları sıfırlamaq üçün */}
        </div>

        <div className="filter-right my-[20px] md:my-[0]">
          <button className='flex items-center gap-3 bg-[#8d8ce2] py-[10px] px-[16px] text-white rounded-[1000px]'>
            <span className='text-[14px]'>Daha çox</span>
            <img src="/images/mezunlar/ox.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="mezunlar flex flex-wrap gap-4">
        {filteredMezunlar.map(mezun => (
          <Mezun key={mezun.id} name={mezun.name} shekilProps={mezun.image} />
        ))}
      </div>
    </section>
  );
};

export default MezunlarBurada;
