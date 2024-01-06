import { LiaLongArrowAltRightSolid } from "react-icons/lia";
const Choose = () => {
  return (
    <div className='bg-fixed bg-[url(https://c4.wallpaperflare.com/wallpaper/881/273/120/muscle-muscle-pose-training-dumbbells-hd-wallpaper-preview.jpg)] bg-no-repeat bg-cover object-cover bg-blend-overlay bg-black/60 bg-right md:bg-top'>
      <div className='h-screen container mx-auto grid place-items-center'>
        <div className='grid place-items-center  text-center space-y-4 max-w-5xl p-6 mx-auto'>
          <h1 className='text-sm md:text-base  font-bold uppercase'>
            why choose us
          </h1>
          <h1 className='md:text-7xl text-6xl font-bold uppercase'>why we</h1>
          <p className='font-medium text-lg md:text-xl '>
            By choosing us for your home renovation, you are choosing a reliable
            and professional partner who will make your home better, more
            beautiful and more comfortable to live in. Contact us now and give
            us the opportunity to turn your dreams of your ideal home into
            reality.
          </p>
          <a href='#7'>
            <button className='flex justify-center  bg-red-600 uppercase text-xl p-2 font-medium border border-red-600 hover:bg-white hover:text-red-600 gap-2 items-center'>
              contacts <LiaLongArrowAltRightSolid className="text-3xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Choose