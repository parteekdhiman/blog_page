import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import ArticalsList from './pages/ArticalsList'
import Article from './pages/Article'
import Navbar from './pages/components/Navbar'
import Notpage from './pages/Notpage'
// import CurrencyConverter from './pages/Amount'
function App() {
  return (
      <>
      <Navbar/>
        <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<Aboutus/>} />
          <Route path='/article-list' element={<ArticalsList/>} />
          <Route path="/article/:name" element={<Article/>} />
          <Route path="*" element={<Notpage/>} />
        </Routes>
        {/* <CurrencyConverter/> */}
      </div>
      </>
  )
}

export default App