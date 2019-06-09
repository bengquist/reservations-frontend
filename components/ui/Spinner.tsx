import spinner from "../../static/spinner.svg";
import styled from "styled-components";

function Spinner() {
  return (
    <Container>
      <img src={spinner} alt="Loader" />
    </Container>
  );
}

export default Spinner;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  > img {
    height: 5rem;
    width: 5rem;
  }
`;
