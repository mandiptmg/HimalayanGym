import { FaPlayCircle } from 'react-icons/fa'
import founder from '../../assets/founder.jpg'
import 'animate.css'
import { useGlobalContext } from '../../context/context'
import BasicModal from './BasicModal'
const About = () => {
  const { setIsOpen } = useGlobalContext()
  return (
    <div id='2' className='container mt-4 py-10 mx-auto'>
      <div className='grid items-center md:grid-cols-2 relative'>
        <div className='relative'>
          <img
            src='https://i.pinimg.com/564x/c8/db/86/c8db8698dcbc969a452ba6984d3bf374.jpg'
            alt='the rock'
            className='aspect-[1/1.2] w-full object-cover object-top lg:rounded-lg rounded-t-lg '
          />
          <button
            onClick={() => setIsOpen(true)}
            className='text-[70px] absolute top-1/2 left-1/2 text-red-500 scale-105 hover:text-gray-400 duration-500'
          >
            <FaPlayCircle />
          </button>
        </div>

        <div className='bg-[#292B2C] shadow-2xl lg:absolute right-0 w-full lg:max-w-xl xl:max-w-3xl p-10 space-y-7 '>
          <h1 className='uppercase font-bold  text-xs  lg:text-sm'>
            about our gym
          </h1>
          <h1 className='uppercase font-bold lg:text-4xl text-2xl '>
            about us
          </h1>
          <div className='leading-normal space-y-4 font-sans text-base lg:text-lg'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
              velit itaque dignissimos praesentium soluta voluptates magni
              accusamus. Eos, fuga voluptas?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              fugit, temporibus harum dolorum porro doloribus dignissimos atque
              repudiandae corrupti perspiciatis.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
              odit?
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <img
              src={founder}
              alt='founder'
              className='w-14 lg:w-20 h-14 lg:h-20 rounded-full object-cover object-top'
            />
            <h1 className='uppercase text-center font-bold text-sm lg:text-lg'>
              Mandip tamang <br />
              <span className='text-xs lg:text-sm text-red-500 '>
                founder & ceo
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <BasicModal/>
      </div>
    </div>
  )
}

export default About
