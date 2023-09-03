import { Route, Routes } from 'react-router-dom'
import React from 'react'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Restaurant from '../pages/restaurant/Restaurant'
import Menus from '../pages/Menus/Menus'
import Contact from '../pages/Contact/Contact'
import Register from '../pages/Register/Register'
import ListOfProducts from '../pages/ListOfProducts/ListOfProducts'
import RestaurantID from '../pages/restaurant/RestaurantID'
import LoginUser from '../pages/Login/Login'
import ProfilePage from '../pages/profile/profilePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/home' element={<Home />} /> */}
      <Route path='/restaurant' element={<Restaurant />} />
      <Route path='/restaurant/id' element={<RestaurantID />} />
      <Route path='/menus' element={<Menus />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<ProfilePage />} />

      {/* defecto page error */}
      <Route path='/search' element={<ListOfProducts />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<LoginUser />} />
    </Routes>
  )
}

export default AppRoutes
