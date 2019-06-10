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
    <Container>
      <Panel ref={ref}>{children}</Panel>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.2s ease-in;
`;

const Panel = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;

  margin: 1rem;
  border-radius: 5px;
  overflow: hidden;
`;
