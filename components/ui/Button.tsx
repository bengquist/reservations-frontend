import styled from "styled-components";

function Button(props) {
  return <Container {...props}>{props.children}</Container>;
}

export default Button;

const Container = styled.button`
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 1.5rem;

  transition: 0.2s;
  :hover {
    opacity: 0.7;
  }
  :focus {
    opacity: 0.6;
  }
`;
