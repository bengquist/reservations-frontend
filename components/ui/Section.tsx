import * as React from "react";
import styled from "styled-components";
import Input, { inputStyle } from "./Input";
import { ReactNode } from "react";

type Props = {
  label: string;
  placeholder?: string;
  value?: string | number;
  setValue?: (value: string) => void;
  children?: ReactNode;
};

const Section: React.FunctionComponent<Props> = ({
  label,
  placeholder,
  value,
  setValue,
  children
}) => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      {children || (
        <Input
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue && setValue(e.target.value)
          }
        />
      )}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem;

  .react-datepicker .react-datepicker__day-names {
    margin-top: 1rem;
  }

  .react-datepicker .react-datepicker__header {
    background: ${props => props.theme.colors.primary};
  }

  .react-datepicker button {
    box-shadow: none;
  }

  .react-datepicker__input-container {
    display: flex;
  }
  .react-datepicker__input-container input {
    ${inputStyle};
    width: 100%;
  }
`;

const Label = styled.label``;
