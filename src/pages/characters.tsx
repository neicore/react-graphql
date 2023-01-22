import { Loading, Text, Grid, Card, Row, Container } from '@nextui-org/react'
import { useCharacters } from '../hooks/useCharacters'
import { Link } from 'react-router-dom'

const Characters = () => {
  const { error, loading, data } = useCharacters()

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
          <Grid.Container gap={2} justify="space-between">
            {data.characters.results.map((c: any, index: number) => (
              <Grid xs={12} sm={3} key={index}>
                <Link to={`/${c.id}`}>
                  <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                      <Card.Image
                        src={c.image}
                        objectFit="cover"
                        autoResize
                        width="100%"
                        height={'auto'}
                        alt={c.name}
                        style={{ objectPosition: 'top' }}
                      />
                    </Card.Body>
                    <Card.Footer
                      css={{ justifyItems: 'flex-start', width: 'auto' }}
                    >
                      <Row wrap="wrap" justify="space-between" align="center">
                        <Text b>{c.name}</Text>
                        <Text
                          css={{
                            color: '$accents7',
                            fontWeight: '$semibold',
                            fontSize: '$sm',
                          }}
                        >
                          {c.status}
                        </Text>
                      </Row>
                    </Card.Footer>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid.Container>
        </>
      ) : error ? (
        <Text color="error">{error.message}</Text>
      ) : null}
    </Container>
  )
}
export default Characters
