import { useState } from 'react'
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Hero from './components/Hero';
import Article from './components/Article';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-200 flex gap-3 p-2' >
        <a href="" className='ml-8 font-extralight hover:underline'>Education Store Home  </a>
        <p className='font-light'>|</p>
        <a href="" className='font-extralight  hover:underline'>Home</a>
      </div>

      <Navbar />


      <div>
        <p className='text-center p-2'>Get up to 6 months of No Cost EMI◊ plus up to ₹10000.00 instant cashback‡ on selected products with eligible cards. <a href="" className='text-blue-600'>Shop</a></p>


      </div>

      <Header />


      <Hero />

      <Article />

      <Footer />






    </>
  )
}

export default App
