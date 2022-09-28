import Link from "next/link";
import { Container, ImageContainer, StyledImage, Text, Title, Description, Chevron } from "./search-result.styled";
import { Anime } from "../../types/AnimeList";

interface SearchResultProps {
  result: Anime;
}

const SearchResult = ({ result }: SearchResultProps): JSX.Element => (
  <Link href={`anime/${result.mal_id}`}>
    <Container>
      <ImageContainer>
        <StyledImage src={result.images.webp.small_image_url} layout="fill" objectFit="cover" />
      </ImageContainer>
      <Text>
        <Title>{result.title}</Title>
        <Description>
          {result.type} &#8226; Episodes: {result.episodes} &#8226; {result.status}
        </Description>
      </Text>
      <Chevron />
    </Container>
  </Link>
);

export default SearchResult;
