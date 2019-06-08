import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";
import { GlobalStyle } from "../components/styles/global";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
