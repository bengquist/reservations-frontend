import { Reservation } from "./types";
import styled, { css } from "styled-components";
import { hoverState, focusState } from "../styles/helpers";
import { formatDate } from "../../lib/formatHelpers";
import Modal from "../ui/Modal";
import Detail from "./Detail";
import { useState } from "react";

type Props = {
  reservation: Reservation;
};

const Card: React.FunctionComponent<Props> = ({ reservation }) => {
  const [showModal, setShowModal] = useState();

  return (
    <>
      <button onClick={() => setShowModal(true)} css={buttonStyle}>
        <Container>
          <span>{reservation.name}</span>
          <span>{reservation.hotelName}</span>
          <span className="date">{formatDate(reservation.arrivalDate)}</span>
          <span className="date">{formatDate(reservation.departureDate)}</span>
        </Container>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Detail id={reservation.id} />
        </Modal>
      )}
    </>
  );
};

export default Card;

const buttonStyle = css`
  width: 100%;
  background: white;
  ${hoverState};
  ${focusState};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1.25fr 0.75fr 0.75fr;
  text-align: left;

  > span {
    padding: 1rem 0.5rem;
    border-right: 2px solid
      ${props => props.theme.colors && props.theme.colors.gray};
    :last-child {
      border-width: 1px 0 1px 1px;
    }
  }

  > .date {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
