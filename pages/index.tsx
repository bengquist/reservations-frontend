import Layout from "../components/Layout";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Sorter from "../components/ui/Sorter";
import Search from "../components/search/Search";
import List from "../components/reservation/List";
import Link from "next/link";
import Button from "../components/ui/Button";

export const RESERVATIONS_QUERY = gql`
  query RESERVATIONS_QUERY {
    reservations {
      name
      hotelName
      arrivalDate
      departureDate
      id
    }
  }
`;

function index() {
  const options = (
    <>
      <Search />
      <Link href="/create">
        <Button>Create</Button>
      </Link>
    </>
  );

  return (
    <Query query={RESERVATIONS_QUERY}>
      {({ data, loading }) => {
        return (
          <Layout loading={loading} title="Reservations" options={options}>
            <Sorter />
            <List reservations={data.reservations} />
          </Layout>
        );
      }}
    </Query>
  );
}

export default index;
