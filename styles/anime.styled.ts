import styled from "styled-components";
import breakpoints from "../constants/breakpoints";
import { CheckCircleFill } from "@styled-icons/bootstrap";

const Box = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Data = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 16rem 1fr;
  grid-template-rows: 20rem;
  gap: 1rem;

  @media (max-width: ${breakpoints.md}) {
    margin-top: 2rem;
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 20rem);
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.md}) {
    max-width: 16rem;
  }
  @media (max-width: ${breakpoints.sm}) {
    margin: 0 auto;
  }
`;

const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: var(--black);
`;

const CheckCircle = styled(CheckCircleFill)`
  width: 24px;
  color: var(--kellygreen);
  margin-left: 0.5rem;
  flex-shrink: 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  margin-top: 2.125rem;
  display: flex;
  flex-direction: column;
  color: var(--black);
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
`;

const Description = styled.h3`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
`;

export {
  Box,
  Container,
  Data,
  ImageContainer,
  Info,
  TitleContainer,
  MainTitle,
  CheckCircle,
  Details,
  Text,
  Title,
  Description,
};
