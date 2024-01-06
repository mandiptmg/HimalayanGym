import Faq2 from "./Faq2"
const faq=[
 "HOW MUCH DOES A GYM MEMBERSHIP COST?",
 "WHAT TYPES OF WORKOUTS ARE OFFERED?",
"DO YOU HAVE GROUP CLASSES?",
"WHAT ARE YOUR OPERATING HOURS?",
]
const Faq = () => {
  return (
    <div id='5' className="">
      <div className='bg-[url(https://c4.wallpaperflare.com/wallpaper/174/3/587/bodybuilding-working-out-skinny-sports-wallpaper-preview.jpg)] bg-no-repeat bg-fixed bg-top bg-blend-overlay h-full bg-black/80 bg-cover py-20'>
        <div className='md:container w-[90vw] h-full grid items-center mx-auto'>
          <div className='space-y-4'>
            <h1 className='text-base font-bold uppercase'>
              ANSWERS ON QUESTIONS
            </h1>
            <h1 className='uppercase md:text-6xl text-5xl font-bold'>faq</h1>
            <div className='px-4'>
              {faq.map((item, index) => {
                return <Faq2 item={item} key={index} />
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq