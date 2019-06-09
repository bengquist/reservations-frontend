import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/styles/theme";
import { GlobalStyle } from "../components/styles/global";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

class MyApp extends App<any> {
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
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
