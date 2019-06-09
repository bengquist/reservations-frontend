import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";
import { ReactNode } from "react";

type Props = {
  title?: string;
  options?: ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Reservations",
  options
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>{title}</Header>
    <div className="children-container">
      <OptionsContainer>{options}</OptionsContainer>
      {children}
    </div>
  </Container>
);

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;

  > .children-container {
    width: 100%;
    display: grid;
    grid-gap: 10px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    display: grid;
    grid-gap: 10px;
    justify-content: center;
  }
`;
