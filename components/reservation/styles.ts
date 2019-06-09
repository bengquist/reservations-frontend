import styled, { css } from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  justify-self: end;
  align-self: end;
`;

export const secondaryStyles = css`
  background: white;
  color: black;

  :focus {
    color: white;
  }
`;

export const Message = styled.label`
  background: ${props => props.theme.colors.accent};
  grid-column: 1/3;
  grid-row: 3;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0 auto;
`;
