import styled from "styled-components";
import { ReactNode, useRef } from "react";
import { fadeIn } from "../styles/animation";
import { useClickAway } from "../../lib/hooks";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FunctionComponent<Props> = ({ children, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(onClose, ref);

  return (
    <Shade>
      <Container>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Panel ref={ref}>{children}</Panel>
      </Container>
    </Shade>
  );
};

export default Modal;

const Shade = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.2s ease-in;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Panel = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

const CloseButton = styled.button`
  font-size: 4rem;
  color: ${props => props.theme.colors.gray};
  box-shadow: none;
  height: 4.5rem;
  align-self: flex-end;
`;
