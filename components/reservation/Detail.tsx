import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import { formatDate } from "../../lib/formatHelpers";

type Props = {
  id: string;
};

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

const Detail: React.FunctionComponent<Props> = ({ id }) => {
  return (
    <Query query={RESERVATION_QUERY} variables={{ id }}>
      {({ data, loading }) => {
        if (loading) return null;
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
                <span>Name: </span>
                {name}
              </p>
              <p>
                <span>Hotel Name: </span> {hotelName}
              </p>
              <p>
                <span>Arrival Date: </span> {formatDate(arrivalDate)}
              </p>
              <p>
                <span>Departure Date: </span> {formatDate(departureDate)}
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
    background: ${props => props.theme.colors.gray};
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.colors.accent};
    text-align: center;
    padding: 1.5rem;
    box-shadow: ${props => props.theme.shadows.soft};
  }

  > .info {
    display: grid;
    grid-gap: 5px;
    padding: 2rem;

    > p > span {
      color: ${props => props.theme.colors.accent};
      font-weight: 700;
    }
  }
`;
