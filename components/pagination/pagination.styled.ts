import styled, { css } from "styled-components";
import breakpoints from "../../constants/breakpoints";
import { ArrowLeftShort, ArrowRightShort } from "@styled-icons/bootstrap";
import { Button } from "../../styles/utils.styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    margin-top: 1rem;
  }
`;

const arrowStyles = css`
  width: 22px;
  color: var(--black);

  @media (max-width: ${breakpoints.sm}) {
    width: 36px;
  }
`;

const ArrowLeft = styled(ArrowLeftShort)`
  ${arrowStyles}
`;

const ArrowRight = styled(ArrowRightShort)`
  ${arrowStyles}
`;

const StyledButton = styled(Button)`
  &:disabled {
    opacity: 0.5;
    &:hover {
      transform: none;
      cursor: unset;
      border-color: transparent;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 48px;
    height: 48px;
  }
`;

const PageNumber = styled.p`
  margin: 0 0.75rem;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: var(--black);

  @media (max-width: ${breakpoints.sm}) {
    margin: 0 1rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;

export { Container, ArrowLeft, ArrowRight, StyledButton, PageNumber };
