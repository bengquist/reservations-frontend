import gql from "graphql-tag";

export const RESERVATIONS_QUERY = gql`
  query RESERVATIONS_QUERY($query: String) {
    reservations(query: $query) {
      name
      hotelName
      arrivalDate
      departureDate
      id
    }
  }
`;

export const RESERVATION_QUERY = gql`
  query RESERVATION_QUERY($id: String!) {
    reservation(id: $id) {
      name
      hotelName
      arrivalDate
      departureDate
      id
    }
  }
`;
