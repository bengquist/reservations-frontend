import styled from "styled-components";
import { ReactNode, useRef } from "react";
import useOutsideClick from "use-onclickoutside";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FunctionComponent<Props> = ({ children, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    onClose();
  });

  return (
    <Container>
      <Panel ref={containerRef}>{children}</Panel>
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

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0, 0.5);
`;

const Panel = styled.div`
  background: white;
  width: 100%;
  max-width: 500px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;
