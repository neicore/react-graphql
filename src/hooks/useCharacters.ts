import { useQuery } from '@apollo/client'
import { GET_CHARACTERS } from '../queries'

export const useCharacters = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS)
  return { error, loading, data }
}
