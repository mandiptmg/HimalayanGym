import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Choose from './components/choose/Choose'
import Faq from './components/faq/Faq'
import Home from './components/home/Home'
import Price from './components/price/Price'
import Services from './components/sercives/Services'
import Testimonial from './components/Testinominal/Testimonial'
import SignUp from './components/signup/SignUp'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { LiaLongArrowAltUpSolid } from 'react-icons/lia'
import { useEffect } from 'react'
const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        document.querySelector('.look').classList.add('hidden')
      } else {
        document.querySelector('.look').classList.remove('hidden')
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Choose />
      <Price />
      <Testimonial />
      <Faq />
      <SignUp />
      <Contact />
      <Footer />
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='p-2 bg-red-600 text-white look rounded text-3xl '
        >
          <LiaLongArrowAltUpSolid />
        </button>
      </div>
    </div>
  )
}

export default App
