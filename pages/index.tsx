import Layout from "../components/Layout";
import { Query } from "react-apollo";
import Sorter from "../components/ui/Sorter";
import List from "../components/reservation/List";
import Link from "next/link";
import Button from "../components/ui/Button";
import { Reservation } from "../components/reservation/types";
import { RESERVATIONS_QUERY } from "../components/reservation/query";
import { useState } from "react";
import Input from "../components/ui/Input";
import { grid } from "../components/styles/helpers";
import { preventDefault } from "../lib/eventHelpers";
import Spinner from "../components/ui/Spinner";

type Data = {
  reservations: Reservation[];
};

function index() {
  const [searchValue, setSearchValue] = useState();
  const [query, setQuery] = useState();

  const options = (
    <>
      {/* probably needs its own component */}
      <form
        css={grid("1fr .25fr .25fr")}
        onSubmit={preventDefault(() => setQuery(searchValue))}
      >
        <Input
          autoFocus
          value={searchValue}
          onChange={e => {
            setSearchValue(e.target.value);
            if (!e.target.value) setQuery("");
          }}
          placeholder="Search name or hotel..."
        />
        <Button type="submit">Search</Button>
        {searchValue && (
          <Button
            type="button"
            style={{ background: "white", color: "black" }}
            onClick={() => {
              setSearchValue("");
              setQuery("");
            }}
          >
            Clear
          </Button>
        )}
      </form>
      <Link href="/create">
        <Button>Create</Button>
      </Link>
    </>
  );

  return (
    <Query<Data> query={RESERVATIONS_QUERY} variables={{ query: query }}>
      {({ data, loading }) => {
        if (!data) return null;

        return (
          <Layout
            title="Reservations"
            description="Look at all of these awesome reservations!"
            options={options}
          >
            <Sorter />
            {!loading ? <Spinner /> : <List reservations={data.reservations} />}
          </Layout>
        );
      }}
    </Query>
  );
}

export default index;
