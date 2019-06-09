import Layout from "../components/Layout";
import { Query } from "react-apollo";
import Sorter from "../components/ui/Sorter";
import Search from "../components/search/Search";
import List from "../components/reservation/List";
import Link from "next/link";
import Button from "../components/ui/Button";
import { Reservation } from "../components/reservation/types";
import { RESERVATIONS_QUERY } from "../components/reservation/query";
import Head from "next/head";

type Data = {
  reservations: Reservation[];
};

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
    <Query<Data> query={RESERVATIONS_QUERY}>
      {({ data, loading }) => {
        if (!data) return null;

        return (
          <Layout
            loading={loading}
            title="Reservations"
            description="Look at all of these awesome reservations!"
            options={options}
          >
            <Sorter />
            <List reservations={data.reservations} />
          </Layout>
        );
      }}
    </Query>
  );
}

export default index;
