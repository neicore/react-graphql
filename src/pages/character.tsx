import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import {
  Loading,
  Text,
  Image,
  Container,
  Button,
  Link,
} from '@nextui-org/react'

const Character = () => {
  const { id } = useParams()

  const { error, loading, data } = useCharacter(id)

  return (
    <Container
      css={{
        dflex: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100vw',
        minHeight: '100vh',
      }}
      sm
    >
      {loading ? (
        <Loading />
      ) : data ? (
        <>
          <Text h2>Rick & Morty GraphQl</Text>
          <Image src={data.character.image} />
          <p>{data.character.name}</p>
          <Link href="/" color="text">
            <Button>Back Home</Button>
          </Link>
        </>
      ) : error ? (
        <Text color="error">{error.message}</Text>
      ) : null}
    </Container>
  )
}
export default Character
