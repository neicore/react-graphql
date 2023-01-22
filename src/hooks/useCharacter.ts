import { useQuery } from '@apollo/client'
import { GET_CHARACTER } from '../queries'

interface Data {
  character: {
    __typename: string
    id: string
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    created: string
  }
}

export const useCharacter = (id: any) => {
  const { error, loading, data } = useQuery<Data>(GET_CHARACTER, {
    variables: { id },
  })
  return { error, loading, data }
}
