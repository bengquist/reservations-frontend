import { css } from "styled-components";

function Input(props) {
  return <input css={inputStyle} {...props} />;
}

export default Input;

const inputStyle = css`
  border-radius: 5px;
  transition: 0.2s;
  padding: 5px;
  min-width: 250px;

  :focus {
    border: none;
    box-shadow: 0 0 0 1pt ${props => props.theme.colors.secondary};
  }
`;
