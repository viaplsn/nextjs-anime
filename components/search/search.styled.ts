import styled, { css, keyframes } from "styled-components";
import breakpoints from "../../constants/breakpoints";

const fadeInAnimation = keyframes`
 0% { opacity: 0 }
 100% { opacity: 1 }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const searchStyles = css`
  width: 100%;
  background: var(--white);
  border: 1px solid transparent;
  border-radius: 2.125rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.125rem;
  color: var(--black);
  transform: scale(0.95);
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1.5rem 2.25rem;
  outline: none;
  &::placeholder {
    color: var(--graycloud);
    font-weight: 400;
  }
  ${searchStyles}
`;

const Results = styled.div`
  margin-top: 1rem;
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;
  ${searchStyles};

  @media (max-width: ${breakpoints.md}) {
    padding: 1.5rem 1rem;
  }
`;

export { Container, Input, Results };
