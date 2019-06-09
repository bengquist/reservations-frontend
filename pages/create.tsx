import gql from "graphql-tag";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";
import Button from "../components/ui/Button";
import Link from "next/link";
import styled, { css } from "styled-components";
import Section from "../components/ui/Section";
import { useState, useEffect } from "react";
import { preventDefault } from "../lib/eventHelpers";
import isEqual from "lodash/isEqual";
import { RESERVATIONS_QUERY } from ".";
import { isValidDate } from "../lib/common";

export const RESERVATION_MUTATION = gql`
  mutation RESERVATION_MUTATION(
    $name: String!
    $hotelName: String!
    $arrivalDate: String!
    $departureDate: String!
  ) {
    addReservation(
      name: $name
      hotelName: $hotelName
      arrivalDate: $arrivalDate
      departureDate: $departureDate
    ) {
      name
      hotelName
      arrivalDate
      departureDate
      id
    }
  }
`;

function CreatePage() {
  const defaultValues = {
    name: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: "",
    errorMessage: ""
  };

  const updateReservations = (cache, { data: { addReservation } }) => {
    const { reservations } = cache.readQuery({ query: RESERVATIONS_QUERY });
    cache.writeQuery({
      query: RESERVATIONS_QUERY,
      data: { reservations: reservations.concat([addReservation]) }
    });
  };

  const [inputValues, setInputValues] = useState(defaultValues);
  const [errorMessage, setErrorMessage] = useState();
  const { name, hotelName, arrivalDate, departureDate } = inputValues;

  useEffect(() => {
    setErrorMessage("");
  }, [inputValues]);

  return (
    <Mutation
      mutation={RESERVATION_MUTATION}
      variables={{ name, hotelName, arrivalDate, departureDate }}
      update={updateReservations}
    >
      {(addReservation, { loading, data, error }) => {
        const validDates =
          isValidDate(arrivalDate) && isValidDate(departureDate);

        const submitHandler = async () => {
          if (!validDates) return setErrorMessage("Invalid Dates");

          await addReservation();
          setInputValues(defaultValues);
        };

        if (error) console.log("error");

        const isSubmitted = data && data.addReservation;

        return (
          <Layout title="Create Reservation">
            <Form onSubmit={preventDefault(submitHandler)}>
              <Section
                label="Reservation Name:"
                placeholder="Blake"
                value={inputValues.name}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, name: value };
                  })
                }
              />
              <Section
                label="Hotel:"
                placeholder="Hampton Inn & Suites"
                value={inputValues.hotelName}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, hotelName: value };
                  })
                }
              />
              <Section
                label="Arrival Date:"
                placeholder="06/10/2019"
                value={inputValues.arrivalDate}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, arrivalDate: value };
                  })
                }
              />
              <Section
                label="Departure Date:"
                placeholder="06/11/2019"
                value={inputValues.departureDate}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, departureDate: value };
                  })
                }
              />
              {(isSubmitted || errorMessage) && (
                <Message style={{ background: errorMessage && "red" }}>
                  {errorMessage || "Reservation successfully added!"}
                </Message>
              )}
              <ButtonContainer>
                <Link href="/">
                  <Button
                    disabled={loading}
                    type="button"
                    css={secondaryStyles}
                  >
                    {isSubmitted && isEqual(inputValues, defaultValues)
                      ? "Home"
                      : "Cancel"}
                  </Button>
                </Link>
                <Button type="submit">Submit</Button>
              </ButtonContainer>
            </Form>
          </Layout>
        );
      }}
    </Mutation>
  );
}

export default CreatePage;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  justify-self: end;
  grid-column: 2;
  grid-row: 3;

  @media (max-width: 500px) {
    grid-column: auto;
    grid-row: auto;
  }
`;

const secondaryStyles = css`
  background: white;
  color: black;

  :focus {
    color: white;
  }
`;

const Message = styled.label`
  background: ${props => props.theme.colors.accent};
  grid-column: 1/3;
  grid-row: 3;
  color: white;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 0 auto;
`;
