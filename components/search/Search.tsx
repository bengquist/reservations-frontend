import React from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import Button from "../ui/Button";

const Search = () => {
  return (
    <Container>
      <Input placeholder="Search here.." />
      <Button>Search</Button>
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-gap: 5px;
`;
