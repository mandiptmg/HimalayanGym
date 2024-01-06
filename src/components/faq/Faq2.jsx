import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

const Faq2 = ({ item }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <article className={`${isShow ? 'none' : 'overflow-hidden block h-[80px]'} duration-500`}>
      <button onClick={() => setIsShow(!isShow)} className='text-left'>
        <p className='font-bold py-4 flex gap-2 items-center text-base md:text-lg'>
          <FaChevronDown className={`${isShow? 'rotate-180 duration-700':''}`} />
          {item}
        </p>
      </button>
      <p className={`text-sm md:text-base  duration-700 ${isShow ? '': 'pt-10'}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        voluptatibus veniam, ratione praesentium facere expedita earum saepe id
        quod fuga consequatur perspiciatis distinctio error! Soluta numquam
        dolorum consequuntur sit illum. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Libero voluptatibus veniam, ratione praesentium facere
        expedita earum saepe id quod fuga consequatur perspiciatis distinctio
        error! Soluta numquam dolorum consequuntur sit illum.
      </p>
    </article>
  )
}

export default Faq2
