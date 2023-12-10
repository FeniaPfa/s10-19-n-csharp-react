import { useRestaurantById } from '../../hooks/useRestaurantById'
import CardRestaurantName from './CardRestaurantName'
import MapComponent from './Maps/MapComponent'

export const RestaurantInfo = ({ restaurantId }) => {
  const { data, isLoading } = useRestaurantById(restaurantId)
  if (isLoading) return <p>Cargando...</p>
  return (
    <>
      {/* nombre de restaurante  */}
      <section className='w-[100%] h-auto overflow-hidden flex justify-center lg:justify-start items-center'>
        <CardRestaurantName restaurant={data} />
      </section>

      {/* mapa  */}
      <section className='relative containerMpas w-[100%] h-[300px] bg-primary flex justify-center items-center rounded-md p-2 z-0'>
        <MapComponent restaurant={data} />
      </section>
    </>
  )
}
