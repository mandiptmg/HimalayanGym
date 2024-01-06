import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

const client = [
  {
    img: 'https://i.pinimg.com/564x/9c/8b/16/9c8b165933ea94a1a42c27f7f0fd6744.jpg',
    name: 'dwayne johnson',
  },
  {
    img: 'https://i.pinimg.com/564x/95/06/0d/95060dce7947509f9d20bae2f86b5856.jpg',
    name: 'cbum',
  },
  {
    img: 'https://i.pinimg.com/564x/f0/2b/8f/f02b8f41ca57bbf18a89ccd0b2cc2ab5.jpg',
    name: 'Jay cutler',
  },
]
const Testimonial = () => {
  return (
    <div className='py-10' id='6'>
      <div className=' pb-10 pt-36 max-w-4xl mx-auto'>
        <div className='text-center space-y-10'>
          <div className='space-y-4'>
            <h1 className='text-base md:text-lg font-bold'>Testimonials</h1>
            <p className='text-4xl md:text-6xl font-bold uppercase'>What clients say</p>
          </div>
          <div>
            <Swiper pagination={true} modules={[Pagination]}>
              {client.map((item) => {
                return (
                  <SwiperSlide className='pb-10' key={item.name}>
                    <article className='grid gap-4  w-full place-items-center'>
                      <img
                        src={item.img}
                        alt={item.name}
                        className='w-24 h-24 rounded-full object-top object-cover'
                      />
                      <p className='text-base md:text-lg'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Libero magnam, cupiditate assumenda, consequuntur
                        corporis ducimus voluptatem quisquam, quo tenetur optio
                        impedit quis aliquam eligendi delectus non facilis
                        similique vel fugit distinctio nesciunt? Aspernatur,
                        facere placeat.
                      </p>
                      <h1 className='text-lg font-medium uppercase '>
                        {item.name}
                      </h1>
                      <h1 className='text-red-500 font-bold text-lg'>client</h1>
                    </article>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
