import styled from "styled-components";
import Input from "./Input";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

const Section: React.FunctionComponent<Props> = ({
  label,
  placeholder,
  value,
  setValue
}) => {
  return (
    <Container>
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
};

export default Section;

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
`;

const Label = styled.label``;
