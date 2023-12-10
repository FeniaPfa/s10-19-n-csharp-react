import { TbPhoneCall } from 'react-icons/tb'
import { MdPlace } from 'react-icons/md'
import { Link } from 'react-router-dom'

export const RestaurantCard = ({ object }) => {
  const fixScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div className='border border-gray-300 rounded-lg lg:w-[470px] md:w-[400px] w-[350px]'>
      {/* Header */}
      <div className='flex justify-between items-center p-5'>
        <div className='flex gap-2'>

          <img className='w-[50px] h-[50px] rounded-md' src={object.image || 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1693184564/fitnessMatket/restauran07_ijkrxw.jpg'} alt='Restaurant avatar' />

          <div className='flex flex-col'>
            <h3 className='text-base font-bold'>{object.name}</h3>
            <span className='text-greyCustom text-base flex gap-1 items-center'><MdPlace className='text-primary text-lg' />{object.city}</span>
          </div>

        </div>

        <Link to={`/restaurant/${object.id}`} onClick={fixScroll} className='bg-primary text-white rounded-md text-base px-4 py-2'>Menu</Link>
      </div>
      <hr />
      {/* Body */}
      <div className=' p-5'>
        <h3 className='text-base font-bold'>{object.speciality}</h3>
        <p className='text-greyCustom text-base'>{object.description}</p>
      </div>
      <hr />
      {/* Footer */}
      <div className='flex gap-7 p-5'>
        <span className='text-greyCustom text-base flex gap-1 items-center'> <TbPhoneCall className='text-primary text-lg' />{object.phone_number}</span>
      </div>
    </div>
  )
}
