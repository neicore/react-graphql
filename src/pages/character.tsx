import { useParams } from 'react-router-dom'
import { useCharacter } from '../hooks/useCharacter'
import { Loading, Text, Grid, Card, Row, Container } from '@nextui-org/react'

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
        </>
      ) : error ? (
        <Text color="error">{error.message}</Text>
      ) : null}
    </Container>
  )
}
export default Character
