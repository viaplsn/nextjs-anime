import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75));
  border-radius: 10px;
  z-index: 1;
`;

const Title = styled.h3`
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: var(--white);
  z-index: 2;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

export { Container, Gradient, Title };
