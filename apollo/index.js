import { ApolloClient, ApolloLink, InMemoryCache, Observable } from '@apollo/client'

export const Initalize = (composeClient) => {
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
	return new ApolloClient({ cache: new InMemoryCache(), link })
}