import { useEffect, useState } from 'react'
import { getMealById } from '../services/api/getMealById'

export const useMealById = (id) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ error: false, message: '' })

  const getMeal = async () => {
    try {
      const meals = await getMealById(id)
      setData(meals)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      setError({ error: true, message: err.message })
      console.log(err)
    }
  }

  useEffect(() => {
    getMeal()
  }, [])

  return { data, isLoading, error }
}
