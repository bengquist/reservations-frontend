import { css } from "styled-components";
import { ComponentPropsWithoutRef } from "react";

const Button: React.FunctionComponent<
  ComponentPropsWithoutRef<"button">
> = props => {
  return (
    <button css={buttonStyle} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

export const buttonStyle = css`
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
    background: black;
    opacity: 0.5;
  }
`;
