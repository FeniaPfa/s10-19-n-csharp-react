import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveIndex } from '../../features/nav/navSlice'
import ListRestaurants from '../../components/listRestaurants/ListRestaurants'

const Restaurant = () => {
  const dispatch = useDispatch()
  const restaurantRef = useRef(null)

  useEffect(() => {
    dispatch(setActiveIndex('restaurant'))
    return () => { setActiveIndex(null) }
  }, [])

  return (
    <section
      ref={restaurantRef}
      className='lg:mt-[130px] lg:px-16 px-8 my-11 flex flex-col gap-6 m-auto'
    >
      <section className='py-[1rem] flex flex-col gap-2'>
        <h2 className='font-titulo text-3xl font-bold text-marronCustom'>Descubre nuestra selección de restaurantes saludables</h2>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>Nuestra plataforma te conecta con una selección de <strong>restaurantes</strong> que comparten nuestra pasión por la <strong>comida saludable</strong> y sostenible.</p>
        <p className='font-parrafo font-normal text-sm lg:text-base text-marronCustom'>Cada restaurante en nuestra lista ha sido cuidadosamente elegido para ofrecerte una <strong>experiencia gastronómica única</strong> que cuida tanto de tu bienestar como del planeta.</p>
      </section>
      <ListRestaurants />
    </section>
  )
}

export default Restaurant
