import { ApolloClient, ApolloLink, InMemoryCache, Observable } from '@apollo/client'
import { composeClient } from '@/context/AuthContext'

const link = new ApolloLink((operation) => {
  return new Observable((observer) => {
    composeClient.execute(operation.query, operation.variables).then(
      (result) => {
        observer.next(result)
        observer.complete()
      },
      (error) => {
        observer.error(error)
      }
    )
  })
})

export const Apolloclient = new ApolloClient({ cache: new InMemoryCache(), link })
