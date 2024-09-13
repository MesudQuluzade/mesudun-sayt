
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CardSection from './Components/CardSection'
import Header from './Components/Header'
import Hero from './Components/Hero'
import TedrisSahesi from './Components/TedrisSahesi'
import Counter from './Components/Counter'
import FeedbackSection from './Components/FeedbackSection'
import MezunlarBurada from './Components/MezunlarBurada'

function App() {

  return (
   <div className='container mx-auto'>
    <BrowserRouter>


    
  
   <Header />

   <Routes>
    <Route path='/xidmet/veb-sayt' element={<TedrisSahesi basliq='Veb sayt xidmətləri' shekil='/header.webp' content='Mesud Official Website' />} />
    <Route path='/xidmet/domen' element={<TedrisSahesi basliq='Domen xidmetleri' shekil='/header.webp' content='Mesud Domain xidmetleri' />} />
    <Route path='/xidmet/hosting' element={<TedrisSahesi basliq='Hosting xidmetleri' shekil='/header.webp' content='Mesud Hosting xidmetleri' />} />
   </Routes>

   <Hero />

   <CardSection />
   <Counter />
   <FeedbackSection />
   <MezunlarBurada />

   </BrowserRouter>
   </div>
  )
}

export default App
