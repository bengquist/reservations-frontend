import Card from "./Card";
import { Reservation } from "./types";
import styled from "styled-components";

type Props = {
  reservations: Reservation[];
};

const List: React.FunctionComponent<Props> = ({ reservations }) => {
  const renderReservation = (reservation: Reservation) => {
    return <Card key={reservation.id} reservation={reservation} />;
  };

  return <CardsContainer>{reservations.map(renderReservation)}</CardsContainer>;
};

export default List;

const CardsContainer = styled.div`
  box-shadow: ${props => props.theme.shadows.soft};
`;
