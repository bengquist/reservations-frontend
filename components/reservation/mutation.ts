import gql from "graphql-tag";

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
