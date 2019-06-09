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
import { preventDefault } from "../lib/eventHelpers";
import Spinner from "../components/ui/Spinner";
import styled from "styled-components";
import useMedia from "use-media";

type Data = {
  reservations: Reservation[];
};

function index() {
  const [searchValue, setSearchValue] = useState();
  const [query, setQuery] = useState();
  const isMobile = useMedia("(max-width: 500px)");

  const options = (
    <>
      {/* probably needs its own component */}
      <Form onSubmit={preventDefault(() => setQuery(searchValue))}>
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

        {!isMobile && (
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
      </Form>
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
            {loading ? <Spinner /> : <List reservations={data.reservations} />}
          </Layout>
        );
      }}
    </Query>
  );
}

export default index;

const Form = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.25fr 0.25fr;
  grid-gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 0.5fr;
  }
`;
