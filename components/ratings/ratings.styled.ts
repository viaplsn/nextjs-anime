import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ratingStyles = css`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  color: var(--ashgray);
`;

const Score = styled.div`
  ${ratingStyles};
  align-items: flex-start;
`;

const Rank = styled.div`
  ${ratingStyles};
  align-items: center;
`;

const Popularity = styled.div`
  ${ratingStyles};
  align-items: flex-end;
`;

const Rating = styled.p`
  color: var(--black);
  margin-bottom: 0.2rem;
`;

export { Container, Score, Rank, Popularity, Rating };
