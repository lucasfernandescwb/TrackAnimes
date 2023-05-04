import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});
