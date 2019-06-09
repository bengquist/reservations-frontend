import { css } from "styled-components";

export const hoverState = css`
  transition: 0.2s;

  :hover,
  :active {
    background-color: ${({ theme }) => theme.colors && theme.colors.primary};
  }
`;

export const focusState = css`
  transition: 0.1s;

  :focus {
    background-color: ${({ theme }) => theme.colors && theme.colors.secondary};
    color: white;
  }
`;

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const grid = (columns: string = "1fr", gap: number = 1) =>
  css`
    display: grid;
    grid-template-columns: ${columns};
    grid-gap: ${gap}rem;
  `;
