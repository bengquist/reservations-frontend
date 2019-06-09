import gql from "graphql-tag";
import styled from "styled-components";
import { Query } from "react-apollo";

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

        console.log(data);

        return <Container>yo</Container>;
      }}
    </Query>
  );
};

export default Detail;

const Container = styled.div``;
