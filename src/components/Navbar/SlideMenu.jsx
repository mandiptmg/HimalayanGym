import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../../context/context"

const SlideMenu = ({data}) => {
 const {isActive,setIsActive} = useGlobalContext()
  return (
    <slider>
      <div className={`${isActive ? 'translate-x-0' :'-translate-x-full'} absolute shadow-2xl h-screen duration-700 top-0 left-0 md:w-1/3 w-1/2 bg-black/90`}>
        <div className='w-full mt-7 grid place-items-end pr-2'>
          <button
            onClick={()=>setIsActive(false)}
            className=' text-3xl p-1 bg-red-600'
          >
            <FaTimes />
          </button>
        </div>
        <ul className='uppercase  mt-10 pl-4 space-y-4 font-bold '>
          {data.map((section) => (
            <li key={section.id}>
              <span className='hover:text-red-500 '>
                <a onClick={()=>setIsActive(false)} href={`#${section.id}`}>{section.title}</a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </slider>
  )
}

export default SlideMenu