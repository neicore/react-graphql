import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../queries'

export const useCharacter = (id: any) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, { variables: id })
  return { error, loading, data }
}
