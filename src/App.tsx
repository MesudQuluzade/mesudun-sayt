
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CardSection from './Components/CardSection'
import Header from './Components/Header'
import Hero from './Components/Hero'
import TedrisSahesi from './Components/TedrisSahesi'

function App() {

  return (
   <div className='container'>
    <BrowserRouter>


    
  
   <Header />

   <Routes>
    <Route path='/xidmet/veb-sayt' element={<TedrisSahesi basliq='Veb sayt xidmetleri' shekil='/header.webp' content='Mesud Official Website' />} />
   </Routes>

   <Hero />

   <CardSection />

   </BrowserRouter>
   </div>
  )
}

export default App
