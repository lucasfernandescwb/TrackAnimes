import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { MyStack } from './routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar style='light' />
      <MyStack />
    </ApolloProvider>
  );
}
