import Layout from "../components/Layout";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Sorter from "../components/ui/Sorter";
import Search from "../components/search/Search";
import List from "../components/reservation/List";
import { useState } from "react";
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
  const [modal, setModal] = useState(true);

  const options = (
    <>
      <Link href="/create">
        <Button>Create</Button>
      </Link>
      <Search />
    </>
  );

  return (
    <Query query={RESERVATIONS_QUERY}>
      {({ data, loading }) => {
        if (loading) return null;

        return (
          <Layout title="Reservations" options={options}>
            <Sorter />
            <List reservations={data.reservations} />
          </Layout>
        );
      }}
    </Query>
  );
}

export default index;
