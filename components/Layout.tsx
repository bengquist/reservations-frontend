import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";
import { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  options?: ReactNode;
  loading?: boolean;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Reservations",
  description,
  options
}) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>
      <Header>{title}</Header>
      <div className="children-container">
        <OptionsContainer>{options}</OptionsContainer>
        {children}
      </div>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;

  > .children-container {
    display: grid;
    grid-gap: 2rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    flex-direction: column;

    > :nth-child(1) {
      margin-bottom: 1.75rem;
    }
  }
`;
