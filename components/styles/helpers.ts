import { css } from "styled-components";

export const hoverState = css`
  transition: 0.2s;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const focusState = css`
  transition: 0.1s;

  :focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;
