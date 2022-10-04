import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 46.5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: var(--brightgray);
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(0.95);
    cursor: pointer;
    border-color: var(--black);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
`;

export { Wrapper, Container, Button, StyledImage };
