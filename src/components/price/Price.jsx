import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'

const categories = [
  {
    img: 'https://i.pinimg.com/736x/b5/db/c8/b5dbc88956181ae79ea36f9b77fe18dc.jpg',
    name: 'WEIGHT TRAINING',
    price: '130',
  },
  {
    img: 'https://img.freepik.com/free-photo/gym-handsome-man-during-workout_144627-6229.jpg?w=360&t=st=1704527208~exp=1704527808~hmac=52ce51ae4d4a504d7298b358314b372285d04c748bf5068fe9ab8850d8a21f11',
    name: 'CROSSFIT',
    price: '110',
  },
  {
    img: 'https://i.pinimg.com/564x/b3/3b/eb/b33bebdfc34d3852d48bbda2b671655c.jpg',
    name: 'PILATES',
    price: '50',
  },
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/239/753/277/women-model-brunette-ponytail-wallpaper-preview.jpg',
    name: 'YOGA',
    price: '90',
  },
  {
    img: 'https://img.freepik.com/free-photo/young-man-kickboxing-lacing-glove_155003-15499.jpg?w=360&t=st=1704527616~exp=1704528216~hmac=15e5a53af4365e21ff1c7f44aa293428582746f57337698be89c6ae43681bd84',
    name: 'BOXING',
    price: '75',
  },
  {
    img: 'https://i.pinimg.com/564x/76/f2/75/76f275e985f46e10bf64b50b3064fb6c.jpg',
    name: 'AEROBICS',
    price: '80',
  },
]

const Price = () => {
  const [size, setSize] = useState(false)
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth <= 600) {
        setSize(1)
      } 
      else if (window.innerWidth <= 950) {
        setSize(2)
      }
      else{
         setSize(3)
       }
    }
    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  })
  return (
    <div id='4' className='py-10'>
      <div className='space-y-4  w-[90vw] mx-auto'>
        <h1 className='text-sm font-bold uppercase md:text-base'>
          OUR PRICING{' '}
        </h1>
        <p className='md:text-4xl font-bold text-3xl'>PRICES AND SCHEDULE</p>
      </div>
      <div className='mt-4'>
        <Swiper
          slidesPerView={size}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[FreeMode, Pagination]}
          className='mySwiper'
        >
          {categories.map((category) => {
            return (
              <SwiperSlide key={category.name}>
                <article className='gray overflow-y-hidden w-full md:max-w-[440px] group h-[480px]  relative '>
                  <img
                    src={category.img}
                    alt={category.name}
                    className='object-cover w-full h-full object-top'
                  />
                  <div className='space-y-4 content duration-700 group-hover:translate-y-0 translate-y-[22rem]  absolute top-0 gray left-0 w-full h-screen p-4 pt-7'>
                    <h1 className='text-2xl font-bold '>{category.name}</h1>
                    <h1 className='text-red-500 text-3xl font-bold'>
                      ${category.price}/m
                    </h1>
                    <p className='font-medium text-lg '>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptates illo, ipsum molestias blanditiis voluptatum
                      nemo aliquam enim asperiores alias pariatur.
                    </p>
                    <div className='text-lg space-y-2 '>
                      <div className='flex justify-between border-b border-slate-700/50 pb-2 items-center'>
                        <h1>Monday</h1>
                        <span>10.00AM - 12.00Pm</span>
                      </div>
                      <div className='flex justify-between border-b border-slate-700/50 pb-2 items-center'>
                        <h1>Tuesday</h1>
                        <span>10.00AM - 12.00Pm</span>
                      </div>
                      <div className='flex justify-between border-b border-slate-700/50 pb-2 items-center'>
                        <h1>Friday</h1>
                        <span>10.00AM - 12.00Pm</span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Price
