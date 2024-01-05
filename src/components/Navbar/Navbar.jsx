import { useEffect, useState } from 'react'

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
  useEffect(() => {
    const scroll = () => {
      if (scrollY >= 80) {
        setActive("'bg-gray-800/50'")
      }
    }
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])
  return (
    <div className={`${active}`}>
      <nav className='h-20 container mx-auto flex items-center justify-between '>
        <h1 className='text-3xl font-bold'>HimalayanFit</h1>
        <div className='flex items-center gap-7'>
          <ul className='uppercase font-bold flex gap-4 '>
            {sectionsData.map((section) => (
              <li key={section.id} className='hover:text-red-500'>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
          <button className='p-2 uppercase font-bold hover:bg-white hover:text-red-500 duration-500 rounded bg-red-500 border border-red-500'>
            <h1>sign up for training</h1>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
