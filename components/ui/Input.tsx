import { css } from "styled-components";

function Input(props) {
  return <input css={inputStyle} {...props} />;
}

export default Input;

export const inputStyle = css`
  border-radius: 5px;
  transition: 0.2s;
  padding: 0.5rem;

  :focus {
    border: none;
    box-shadow: 0 0 0 1pt
      ${props => props.theme.colors && props.theme.colors.secondary};
  }
`;
