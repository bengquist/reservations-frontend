import styled from "styled-components";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-image: linear-gradient(
    to top,
    ${props => props.theme.colors && props.theme.colors.accent},
    ${props => props.theme.colors && props.theme.colors.secondary}
  );
  color: white;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: ${props => props.theme.shadows && props.theme.shadows.soft};

  > h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.5rem 3rem;
  }
`;
