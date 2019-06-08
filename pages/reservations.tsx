import Layout from "../components/Layout";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Card from "../components/reservation/Card";
import { Reservation } from "../components/reservation/types";
import Sorter from "../components/ui/Sorter";
import styled from "styled-components";
import Search from "../components/search/Search";
import Button from "../components/ui/Button";

export const getReservations = gql`
  query getReservations {
    reservations {
      name
      hotelName
      arrivalDate
      departureDate
      id
    }
  }
`;

function reservations() {
  const renderReservation = (reservation: Reservation) => {
    return <Card reservation={reservation} />;
  };

  return (
    <Query query={getReservations}>
      {({ data }) => {
        return (
          <Layout>
            <OptionsContainer>
              <Button>Create</Button>
              <Search />
            </OptionsContainer>

            <Sorter />
            <CardsContainer>
              {data.reservations.map(renderReservation)}
            </CardsContainer>
          </Layout>
        );
      }}
    </Query>
  );
}

export default reservations;

const CardsContainer = styled.div`
  box-shadow: ${props => props.theme.shadows.soft};
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
