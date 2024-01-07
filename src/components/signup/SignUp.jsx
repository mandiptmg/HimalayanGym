
const SignUp = () => {
  return (
    <div className='py-28' id='contact'>
      <div className='md:container w-[90vw] mx-auto'>
        <div className='space-y-2'>
          <h1 className='md:text-base uppercase font-bold text-sm'>booking</h1>
          <p className='md:text-4xl font-bold uppercase text-3xl'>
            SIGN UP FOR TRAINING
          </p>
        </div>
        <div className='grid gap-4 mt-7 lg:grid-cols-[1.5fr,1fr] items-start'>
          <form action=''>
            <div className='grid grid-cols-2 gap-4 py-10'>
              <div>
                <input
                  type='text'
                  placeholder='first name'
                  required
                  className='w-full bg-transparent text-white placeholder-white capitalize focus:border-white focus:outline-none font-medium border-b border-gray-700/50 shadow-2xl py-4'
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='last name'
                  required
                  className='w-full bg-transparent text-white placeholder-white capitalize focus:border-white focus:outline-none font-medium border-b border-gray-700/50 shadow-2xl py-4'
                />
              </div>
              <div>
                <input
                  type='number'
                  placeholder='phone number'
                  required
                  className='w-full  bg-transparent text-white placeholder-white capitalize focus:border-white focus:outline-none font-medium border-b border-gray-700/50 shadow-2xl py-4'
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder='email address'
                  required
                  className='w-full bg-transparent text-white placeholder-white capitalize focus:border-white focus:outline-none font-medium border-b border-gray-700/50 shadow-2xl py-4'
                />
              </div>
              <div>
                <input
                  type='date'
                  required
                  className='w-full bg-transparent text-white placeholder-white capitalize focus:border-white focus:outline-none font-medium border-b border-gray-700/50 shadow-2xl py-4'
                />
              </div>
              <div>
                <input
                  type='time'
                  required
                  placeholder='12.00AM'
                  className='w-full bg-transparent text-white placeholder-white capitalize focus:border-white focus:outline-none font-medium border-b border-gray-700/50 shadow-2xl py-4'
                />
              </div>
            </div>
            <button className="p-2 w-full md:w-auto font-bold hover:scale-105 duration-700 bg-red-600 rounded uppercase" type='submit'>sign up</button>
          </form>
          <div className='space-y-4 rounded-xl p-12 shad gray '>
            <h1 className='font-bold text-2xl uppercase '>opening hours</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              rerum cupiditate ad ullam dolor velit et id enim, dolorem nisi
              nobis excepturi doloremque iure porro quia fugit, suscipit omnis
              eius?
            </p>
            <div className='space-y-4'>
              <div className='capitalize flex justify-between border-b border-gray-600 items-center'>
                <span>Monday - Friday</span>
                <span className='uppercase'>8am - 6pm</span>
              </div>
              <div className='capitalize border-b border-gray-600 flex justify-between items-center'>
                <span>saturday</span>
                <span className='uppercase'>9am - 5pm</span>
              </div>
              <div className='capitalize border-b border-gray-600 flex justify-between items-center'>
                <span>sunday</span>
                <span className='uppercase'>9am - 4pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp