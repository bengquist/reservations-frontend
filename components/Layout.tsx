import Head from "next/head";
import Navigation from "./navigation/Navigation";
import styled from "styled-components";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    {children}
  </Container>
);

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
