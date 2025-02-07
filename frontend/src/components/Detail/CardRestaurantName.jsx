import ContactRestaurant from './ContactRestaurant'

const CardRestaurantName = ({ restaurant }) => {
  return (
    <section className='w-[100%]  h-auto flex flex-row justify-center items-center gap-5'>
      <section className='w-[130px] h-[160px] sm:w-[300px] lg:w-1/2 lg:h-[160px]  lg:aspect-square overflow-hidden rounded-md'>
        <img src={restaurant?.image || 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1694395238/fitnessMatket/restauranteCust_tb8ry1.jpg'} alt={restaurant?.name} className='w-[100%] h-[100%] object-cover rounded-md' />
      </section>
      <div className='w-1/2 flex flex-col justify-center items-start gap-2 overflow-hidden text-brownCustom'>
        <h2 className='font-titulo text-xl font-bold text-marronCustom'>{restaurant?.name}</h2>
        <h3 className='font-parrafo text-base font-normal text-marronCustom'>{restaurant?.speciality}</h3>

        {/* contacto local */}
        <ContactRestaurant restaurant={restaurant} />

      </div>

    </section>
  )
}

export default CardRestaurantName
