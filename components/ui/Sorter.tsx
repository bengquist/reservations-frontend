import React from "react";
import styled from "styled-components";

const Sorter = () => {
  return (
    <Container>
      <button>
        <p>Reservation Name</p>
      </button>
      <button>
        <p>Hotel Name</p>
      </button>
      <button>
        <p>Hotel Name</p>
      </button>
      <button>
        <p>Hotel Name</p>
      </button>
    </Container>
  );
};

export default Sorter;

const Container = styled.div`
  background: ${props => props.theme.colors.gray};
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.soft};
  overflow: hidden;

  display: grid;
  grid-template-columns: 1.25fr 1.25fr 0.75fr 0.75fr;
  justify-items: center;

  > button {
    color: ${props => props.theme.colors.accent};
    width: 100%;
    transition: 0.2s;
    :hover {
      opacity: 0.7;
    }
    :focus {
      background: ${props => props.theme.colors.secondary};
      color: white;
    }
  }

  > button > p {
    margin: 1rem;
  }
`;
