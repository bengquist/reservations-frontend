import gql from "graphql-tag";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Link from "next/link";
import styled from "styled-components";
import Section from "../components/ui/Section";
import { useState } from "react";

export const addReservation = gql`
  mutation {
    addReservation(
      name: "moreeeee"
      hotelName: "Da Hotel"
      arrivalDate: "2019-06-10"
      departureDate: "2019-06-12"
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
    departureDate: ""
  };

  const options = (
    <Link href="/">
      <Button>Home</Button>
    </Link>
  );

  const [inputValues, setInputValues] = useState(defaultValues);

  return (
    <Mutation mutation={addReservation}>
      {() => {
        return (
          <Layout title="Create Reservation" options={options}>
            <Container>
              <Section
                label="Reservation Name:"
                value={inputValues.name}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, name: value };
                  })
                }
              />
              <Section
                label="Hotel:"
                value={inputValues.hotelName}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, hotelName: value };
                  })
                }
              />
              <Section
                label="Arrival Date:"
                value={inputValues.arrivalDate}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, arrivalDate: value };
                  })
                }
              />
              <Section
                label="Departure Date:"
                value={inputValues.departureDate}
                setValue={(value: string) =>
                  setInputValues(values => {
                    return { ...values, departureDate: value };
                  })
                }
              />
            </Container>
          </Layout>
        );
      }}
    </Mutation>
  );
}

export default CreatePage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
