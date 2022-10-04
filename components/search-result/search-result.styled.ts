import styled from "styled-components";
import Image from "next/image";
import { ChevronRight } from "@styled-icons/bootstrap";
import breakpoints from "../../constants/breakpoints";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  transition: all 0.3s linear;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    transform: translateX(0.5rem);
  }

  @media (max-width: ${breakpoints.md}) {
    align-items: flex-start;
  }
  @media (max-width: ${breakpoints.sm}) {
    margin-bottom: 0.75rem;
  }
`;

const ImageContainer = styled.div`
  margin-right: 1rem;
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
  flex-shrink: 0;

  @media (max-width: ${breakpoints.md}) {
    margin-right: 0.5rem;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h4`
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 500;
  color: var(--black);

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.875rem;
    line-height: 1rem;
  }
`;

const Description = styled.p`
  margin-top: 0.2rem;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  color: var(--ashgray);

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.75rem;
    line-height: 0.875rem;
  }
`;

const Chevron = styled(ChevronRight)`
  margin-left: 1rem;
  flex-shrink: 0;
  width: 20px;
  color: var(--ashgray);

  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export { Container, ImageContainer, StyledImage, Text, Title, Description, Chevron };
