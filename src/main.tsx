import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { Container, Text } from '@nextui-org/react'
import Character from './pages/character'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
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
        <Text color="warning" h1>
          404 Bitch
        </Text>
      </Container>
    ),
  },
  {
    path: '/:id',
    element: <Character />,
    errorElement: (
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
        <Text color="warning" h1>404 Bitch</Text>
      </Container>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
)
