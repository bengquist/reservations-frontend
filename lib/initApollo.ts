import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "isomorphic-unfetch";

let apolloClient: any = null;

function create(initialState: any) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: "http://localhost:4000/graphql",
      credentials: "same-origin",
      fetch: !process.browser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState);
  }

  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
