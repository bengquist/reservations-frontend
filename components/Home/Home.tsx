import React, { useState } from "react";
import { Reservation } from "../reservation/types";
import useMedia from "use-media";
import { preventDefault } from "../../lib/eventHelpers";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Link from "next/link";
import { Query } from "react-apollo";
import { RESERVATIONS_QUERY } from "../reservation/query";
import Sorter from "../ui/Sorter";
import Spinner from "../ui/Spinner";
import List from "../reservation/List";
import styled from "styled-components";

type Data = {
  reservations: Reservation[];
};

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const isMobile = useMedia("(max-width: 500px)");

  const options = (
    // this probably needs its own component
    <>
      <Form onSubmit={preventDefault(() => setQuery(searchValue))}>
        <Input
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
          <>
            {options}
            <Sorter />
            {loading ? <Spinner /> : <List reservations={data.reservations} />}
          </>
        );
      }}
    </Query>
  );
};

export default Home;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.25fr 0.25fr;
  grid-gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 0.5fr;
  }
`;
