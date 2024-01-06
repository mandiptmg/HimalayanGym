import img1 from '../../assets/icon/service-1.png'
import img2 from '../../assets/icon/service-2.png'
import img3 from '../../assets/icon/service-3.png'
import img4 from '../../assets/icon/service-4.png'
import img5 from '../../assets/icon/service-5.png'
import img6 from '../../assets/icon/service-6.png'


const caregories = [
  { icons: img1, name: 'WEIGHT TRAINING' },
  { icons: img2, name: 'CROSSFIT' },
  { icons: img3, name: 'PILATES' },
  { icons: img4, name: 'YOGA' },
  { icons: img5, name: 'BOXING' },
  { icons: img6, name: 'AEROBICS' },
]
const Services = () => {
  return (
    <div id='3' className='py-10'>
      <div className='w-[90vw] md:container mx-auto gap-10  grid lg:grid-cols-[0.6fr,2fr]'>
        <div className='space-y-5 bg-[#292B2C] p-6'>
          <h1 className='text-sm font-bold uppercase '>our service</h1>
          <h1 className=' text-5xl font-bold uppercase '>service</h1>
          <div className='space-y-4'>
           <p className='text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos vitae placeat aliquid nam officiis fugiat in obcaecati dolor aliquam itaque optio, doloribus quas debitis impedit exercitationem fugit maiores! Rem?</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae iusto sunt deleniti saepe, repellendus cupiditate est? Vitae quia, nisi, quasi ducimus voluptatum aut illo incidunt illum nesciunt adipisci architecto ad.</p>
          </div>
        </div>
        <div className='grid grid-cols-2  md:grid-cols-3 gap-4'>
          {caregories.map((category) => {
            return (
              <div  className='bg-[#292B2C] grid place-items-center p-10 space-y-4 ' key={category.name}>
                <img className='w-20 aspect-square object-contain' src={category.icons} alt={category.name} />
                <h2 className='font-semibold'>{category.name}</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            )
          })}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Services