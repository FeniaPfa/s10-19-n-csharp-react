import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { RestaurantCard } from '../RestaurantCard/RestaurantCard'
import { getRestaurants } from '../../features/restaurantes/restaurantsSlice'

const ListRestaurants = () => {
  const dispatch = useDispatch()
  const listOfRestaurant = useSelector((state) => state?.restaurants?.data)
  const fixedList = listOfRestaurant.filter(item => item.name !== "")

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  console.log(listOfRestaurant)
  return (
    <section
      className='w-full flex flex-wrap items-center gap-4 text-blackCustom py-4 justify-center'
    >
      {
        fixedList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} object={restaurant} />
        })
      }

    </section>
  )
}

export default ListRestaurants
