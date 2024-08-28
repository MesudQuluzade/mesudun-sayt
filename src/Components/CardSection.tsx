import React from 'react';
import "./CardSection.css";
import { CardsService } from './CardsService';

const CardSection: React.FC = () => {
  return (
    <section className='Card-section'>
      <h2 className='pb-[5px]'>
        Xidmətlərimiz
      </h2>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-[15px]">
        <CardsService 
          title="Veb saytların hazırlanması..." 
          description="İşinizin rəqəmsal varlığını qurun" 
          imageUrl="images/Front-End_png.webp" 
        />
        <CardsService 
          title="Logoların hazırlanması..." 
          description="Gələcəyin siması burada müəyyənləşir"
          imageUrl="images/Graphic-Design-1-768x768_png.webp" 
        />
        <CardsService 
          title="Responsiv dizayn (Mobil uyğunluq)..." 
          description="Saytınız hər cihazda mükəmməl görünsün"
          imageUrl="images/UX-UI-1_png.webp" 
        />
        
        
      </div>
    </section>
  );
}

export default CardSection;
