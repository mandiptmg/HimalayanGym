import { useEffect, useState } from 'react'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import {FaBars} from 'react-icons/fa'
import SlideMenu from './SlideMenu'
import { useGlobalContext } from '../../context/context'
const sectionsData = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'About Us',
  },
  {
    id: 3,
    title: 'Services',
  },
  {
    id: 4,
    title: 'Pricing',
  },
  {
    id: 5,
    title: 'FAQ',
  },
  {
    id: 6,
    title: 'Testimonials',
  },
  {
    id: 7,
    title: 'Contact Us',
  },
]

const Navbar = () => {
  const [active, setActive] = useState('')
  const {setIsActive} = useGlobalContext()
  useEffect(() => {
    const scroll = () => {
      if (scrollY >= 80) {
        setActive("gray shadow-xl")
      }
      else{
        setActive("")
      }
    }
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])
  return (
    <div className={`${active} sticky z-20 top-0`}>
      <nav className='h-24 w-[90vw] md:container mx-auto flex items-center justify-between '>
        <a href='#1'>
          <h1 className='text-3xl font-bold'>HimalayanFit</h1>
        </a>
        <div className='xl:hidden'>
          <button
            onClick={() => setIsActive(true)}
            className='bg-red-600 border border-red-600 hover:bg-transparent duration-700 text-xl p-2'
          >
            <FaBars />
          </button>
        </div>
        <div className='hidden xl:block'>
          <div className='flex items-center gap-7'>
            <ul className='uppercase font-bold flex gap-4 '>
              {sectionsData.map((section) => (
                <li key={section.id} className='hover:text-red-500'>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
            <a href='#contact'> <button className='p-2 uppercase font-bold hover:bg-white hover:text-red-500 duration-500 rounded bg-red-500 flex items-center gap-1 border border-red-500'>
             
                <h1>sign up for training</h1>
                <LiaLongArrowAltRightSolid className='text-3xl' />
             
            </button> </a>
          </div>
        </div>
      </nav>
      <div>
        <SlideMenu data={sectionsData} />
      </div>
    </div>
  )
}

export default Navbar
