import { Container, Popularity, Rank, Rating, Score } from "./ratings.styled";

interface RatingsProps {
  score: number;
  rank: number;
  popularity: number;
}

const Ratings = ({ score, rank, popularity }: RatingsProps): JSX.Element => (
  <Container>
    <Score>
      <Rating>{score}</Rating>
      <p>Score</p>
    </Score>
    <Rank>
      <Rating>{rank}</Rating>
      <p>Rank</p>
    </Rank>
    <Popularity>
      <Rating>{popularity}</Rating>
      <p>Popularity</p>
    </Popularity>
  </Container>
);

export default Ratings;
