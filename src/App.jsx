import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Choose from './components/choose/Choose'
import Faq from './components/faq/Faq'
import Home from './components/home/Home'
import Price from './components/price/Price'
import Services from './components/sercives/Services'
import Testimonial from './components/Testinominal/Testimonial'
import SignUp from './components/signup/SignUp'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Services/>
      <Choose/>
      <Price/>
      <Testimonial/>
      <Faq/>
      <SignUp/>
    </div>
  )
}

export default App
