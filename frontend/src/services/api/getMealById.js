import axios from 'axios'
import { endpoints } from '../../constants/api'

export const getMealById = async (id) => {
  const meal = await axios.get(`${endpoints.meals}/${id}`)
  return meal.data
}

