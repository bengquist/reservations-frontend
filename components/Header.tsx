import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>Reservations</h1>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: white;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.soft};

  > h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1.5rem 3rem;
  }
`;
