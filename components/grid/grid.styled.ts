import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 0;
  display: grid;
  grid-template-rows: repeat(3, 17.5rem);
  grid-template-columns: repeat(3, 12.5rem);
  row-gap: 2.5rem;
  column-gap: 3.5rem;

  @media (max-width: ${breakpoints.md}) {
    padding: 2rem 0;
    max-width: 28rem;
    grid-template-rows: repeat(5, 17.5rem);
    grid-template-columns: repeat(2, 12.5rem);
    row-gap: 2rem;
    column-gap: 3rem;
  }
  @media (max-width: ${breakpoints.sm}) {
    padding: 1rem 0;
    max-width: 22.5rem;
    grid-template-rows: repeat(9, 31.5rem);
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export { Container };
