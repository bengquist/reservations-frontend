import * as React from "react";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";
import Button from "../components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { preventDefault } from "../lib/eventHelpers";
import Fields from "../components/reservation/Fields";
import {
  Reservation,
  ReservationUpdate
} from "../components/reservation/types";
import {
  Message,
  Form,
  ButtonContainer,
  secondaryStyles
} from "../components/reservation/styles";
import { RESERVATION_MUTATION } from "../components/reservation/mutation";
import { RESERVATIONS_QUERY } from "../components/reservation/query";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {} from "styled-components/cssprop";

type Data = {
  addReservation: Reservation[];
};

function CreatePage() {
  const defaultValues = {
    name: "",
    hotelName: "",
    arrivalDate: new Date(),
    departureDate: new Date(),
    errorMessage: ""
  };

  const updateReservations: ReservationUpdate = (
    cache,
    { data: { addReservation } }
  ) => {
    const { reservations } = cache.readQuery({ query: RESERVATIONS_QUERY });

    cache.writeQuery({
      query: RESERVATIONS_QUERY,
      data: { reservations: [...reservations, addReservation] }
    });
  };

  const [inputValues, setInputValues] = useState(defaultValues);
  const { name, hotelName, arrivalDate, departureDate } = inputValues;

  return (
    <Mutation<Data>
      mutation={RESERVATION_MUTATION}
      variables={{
        name,
        hotelName,
        arrivalDate: format(arrivalDate, "MM/DD/YYYY"),
        departureDate: format(departureDate, "MM/DD/YYYY")
      }}
      update={updateReservations}
    >
      {(addReservation, { data }) => {
        const submitHandler = async () => {
          await addReservation();
          setInputValues(defaultValues);
        };

        const isSubmitted = data && data.addReservation;
        const message = isSubmitted && (
          <Message>Reservation successfully added!</Message>
        );

        return (
          <Layout title="Create Reservation">
            <Form onSubmit={preventDefault(submitHandler)}>
              <Fields
                values={inputValues}
                onInput={(value: any) =>
                  setInputValues(values => {
                    return { ...values, ...value };
                  })
                }
              />
              {message}
              <ButtonContainer>
                <Link href="/">
                  <Button type="button">
                    {isSubmitted ? "Go Home" : "Cancel"}
                  </Button>
                </Link>
                <Button type="submit" css={secondaryStyles}>
                  Submit
                </Button>
              </ButtonContainer>
            </Form>
          </Layout>
        );
      }}
    </Mutation>
  );
}

export default CreatePage;
