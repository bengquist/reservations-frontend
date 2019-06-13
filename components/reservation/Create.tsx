import * as React from "react";
import { Reservation, ReservationUpdate } from "./types";
import { RESERVATIONS_QUERY } from "./query";
import { Mutation } from "react-apollo";
import { RESERVATION_MUTATION } from "./mutation";
import { format } from "date-fns";
import { Message, Form, ButtonContainer, secondaryStyles } from "./styles";
import { preventDefault } from "../../lib/eventHelpers";
import Link from "next/link";
import Button from "../ui/Button";
import Fields from "./Fields";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

type Data = {
  addReservation: Reservation[];
};

const Create = () => {
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

  const [inputValues, setInputValues] = React.useState(defaultValues);
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
        );
      }}
    </Mutation>
  );
};

export default Create;
