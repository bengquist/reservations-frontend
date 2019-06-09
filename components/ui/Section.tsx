import styled from "styled-components";
import Input, { inputStyle } from "./Input";
import { ReactNode } from "react";

type Props = {
  label: string;
  placeholder?: string;
  value?: string | Date;
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
            setValue(e.target.value)
          }
        />
      )}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  display: grid;
  grid-gap: 5px;

  .react-datepicker__input-container input {
    ${inputStyle};
  }
`;

const Label = styled.label``;
