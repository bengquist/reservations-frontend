import { Query } from "react-apollo";
import styled from "styled-components";
import { formatDate } from "../../lib/formatHelpers";
import { Reservation } from "./types";
import { RESERVATION_QUERY } from "./query";

type Props = {
  id: string;
};

type Data = {
  reservation: Reservation;
};

const Detail: React.FunctionComponent<Props> = ({ id }) => {
  return (
    <Query<Data> query={RESERVATION_QUERY} variables={{ id }}>
      {({ data }) => {
        if (!data || !data.reservation) return null;

        const {
          name,
          hotelName,
          arrivalDate,
          departureDate
        } = data.reservation;

        return (
          <Container>
            <h1>Reservation</h1>
            <div className="info">
              <p>
                <span>Name:</span> {name}
              </p>
              <p>
                <span>Hotel Name:</span> {hotelName}
              </p>
              <p>
                <span>Arrival Date:</span> {formatDate(arrivalDate)}
              </p>
              <p>
                <span>Departure Date:</span> {formatDate(departureDate)}
              </p>
            </div>
          </Container>
        );
      }}
    </Query>
  );
};

export default Detail;

const Container = styled.div`
  > h1 {
    background: ${props => props.theme.colors && props.theme.colors.gray};
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.colors && props.theme.colors.accent};
    text-align: center;
    padding: 1.5rem;
    box-shadow: ${props => props.theme.shadows && props.theme.shadows.soft};
  }

  > .info {
    display: grid;
    grid-gap: 5px;
    padding: 2rem;

    > p > span {
      color: ${props => props.theme.colors && props.theme.colors.accent};
      font-weight: 700;
    }
  }
`;
