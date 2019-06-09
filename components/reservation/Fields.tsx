import DatePicker from "react-datepicker";
import Section from "../ui/Section";
import styled from "styled-components";

type Values = {
  name: string;
  hotelName: string;
  arrivalDate: Date;
  departureDate: Date;
  errorMessage: string;
};

type Props = {
  values: Values;
  onInput: (value: any) => void;
};

const Create: React.FunctionComponent<Props> = ({ onInput, values }) => {
  const { name, hotelName, arrivalDate, departureDate } = values;

  return (
    <>
      <Section
        label="Reservation Name:"
        placeholder="Blake"
        value={name}
        setValue={(value: string) => onInput({ name: value })}
      />
      <Section
        label="Hotel:"
        placeholder="Hampton Inn & Suites"
        value={hotelName}
        setValue={(value: string) => onInput({ hotelName: value })}
      />
      <DateContainer>
        <Section label="Arrival Date:" value={arrivalDate}>
          <DatePicker
            selected={arrivalDate}
            onChange={(value: Date) => onInput({ arrivalDate: value })}
          />
        </Section>
        <Section label="Departure Date:" value={departureDate}>
          <DatePicker
            selected={departureDate}
            onChange={(value: Date) => onInput({ departureDate: value })}
          />
        </Section>
      </DateContainer>
    </>
  );
};

export default Create;

const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;