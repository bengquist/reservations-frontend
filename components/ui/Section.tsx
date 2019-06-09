import styled from "styled-components";
import Input from "./Input";
import { ReactNode } from "react";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
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
          onChange={e => setValue(e.target.value)}
        />
      )}
    </Container>
  );
};

export default Section;

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
`;

const Label = styled.label``;
