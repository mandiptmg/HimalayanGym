import {
  FaFacebook,
  FaInstagram,
  FaDribbble,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='py-20' id='7'>
      <div className='md:container w-[90vw] mx-auto'>
        <div className='space-y-4'>
          <h1 className='font-bold uppercase text-sm md:text-base'>address</h1>
          <h1 className='text-3xl md:text-4xl font-bold uppercase '>
            contacts
          </h1>
          <div className='grid items-start  lg:grid-cols-4 sm:grid-cols-2 px-4 gap-y-7 '>
            <div className=' space-y-4'>
              <h1 className='h1'> OUR LOCATION </h1>
              <p>2900 Lapeer Rd, Port Hurons, MI 49070</p>
              <ul className='flex gap-4 mt-4 text-xl items-center'>
                <li
                  onClick={() => window.open('https://www.facebook.com/')}
                  className='hover:text-red-400 cursor-pointer'
                >
                  {' '}
                  <FaFacebook />
                </li>
                <li
                  onClick={() => window.open('https://www.twitter.com/')}
                  className='hover:text-red-400 cursor-pointer'
                >
                  {' '}
                  <FaTwitter />
                </li>
                <li
                  onClick={() => window.open('https://www.instagram.com/')}
                  className='hover:text-red-400 cursor-pointer'
                >
                  {' '}
                  <FaInstagram />
                </li>
                <li
                  onClick={() => window.open('https://www.dribbble.com/')}
                  className='hover:text-red-400 cursor-pointer'
                >
                  <FaDribbble />
                </li>
                <li
                  onClick={() => window.open('https://www.pinterest.com/')}
                  className='hover:text-red-400 cursor-pointer'
                >
                  {' '}
                  <FaPinterest />
                </li>
              </ul>
            </div>
            <div className='max-w-[16rem] space-y-4  grid place-items-start'>
              <h1 className='h1'>working hours</h1>
              <div>
                <div className='flex items-center gap-4 justify-between '>
                  <span>Monday - Friday</span> <span>8AM - 6PM</span>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                  <span>Saturday - Sunday </span>
                  <span>9AM - 5PM</span>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <h1 className='h1'>OFFICE PHONE</h1>
              <p>
                +1 (800) 478-42-51 <br /> +1 (800) 474-23-82
              </p>
            </div>
            <div className='space-y-4'>
              <h1 className='h1'>EMAIL </h1>
              <div>
                <p>info@companyname.com </p>
                <p>fixup@companyname.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
