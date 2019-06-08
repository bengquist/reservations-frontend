import { Reservation } from "./types";
import styled, { css } from "styled-components";
import { hoverState, focusState } from "../styles/helpers";

type Props = {
  reservation: Reservation;
};

const Card: React.FunctionComponent<Props> = ({ reservation }) => {
  return (
    <button css={buttonStyle}>
      <Container>
        <span>{reservation.name}</span>
        <span>{reservation.hotelName}</span>
        <span className="date">{reservation.arrivalDate}</span>
        <span className="date">{reservation.departureDate}</span>
      </Container>
    </button>
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
    padding: 0.75rem;
    border-bottom: solid 1px ${props => props.theme.colors.gray};
    border-right: 1px solid ${props => props.theme.colors.gray};
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
