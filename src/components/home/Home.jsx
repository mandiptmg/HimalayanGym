import {
  FaFacebook,
  FaInstagram,
  FaDribbble,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa'
import StatsComponent from './StatsComponent'
const Home = () => {
  return (
    <div id='1'>
      <div className='before:absolute before:-z-10 before:bg-[url(https://fitpulse.onlywebcoding.com.ua/images/header-img.png)] before:top-0 before:left-0 -mt-20 before:bg-no-repeat before:bg-top grid items-center before:h-screen h-screen before:w-full before:bg-blend-overlay before:bg-black/30  before:bg-cover'>
        <div className=' w-[90vw] md:container mx-auto'>
          <p className='leading-normal md:text-5xl text-4xl lg:text-7xl  font-bold '>
            STRENGTH IN MOTION <br />
            YOUR PATH TO A BETTER YOU
          </p>
          <div>
            <ul className='flex gap-4 mt-4 text-xl items-center'>
              <li className='hover:text-red-400'>
                <a href='https://www.facebook.com/'>
                  {' '}
                  <FaFacebook />
                </a>
              </li>
              <li className='hover:text-red-400'>
                <a href='https://www.twitter.com/'>
                  {' '}
                  <FaTwitter />
                </a>
              </li>
              <li className='hover:text-red-400'>
                <a href='https://www.instagram.com/'>
                  {' '}
                  <FaInstagram />
                </a>
              </li>
              <li className='hover:text-red-400'>
                <a href='https://www.dribbble.com/'>
                  <FaDribbble />
                </a>
              </li>
              <li className='hover:text-red-400'>
                <a href='https://www.pinterest.com/'>
                  {' '}
                  <FaPinterest />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='shadow'>
        <StatsComponent />
      </div>
    </div>
  )
}

export default Home
