import Link from "next/link";
import { Container, ImageContainer, StyledImage, Text, Title, Description, Chevron } from "./search-result.styled";
import { Anime } from "../../types/AnimeList";

interface SearchResultProps {
  result: Anime;
}

const SearchResult = ({ result }: SearchResultProps): JSX.Element => {
  const image = result.images.jpg.small_image_url || result.images.webp.small_image_url;

  return (
    <Link href={`anime/${result.mal_id}`}>
      <Container>
        <ImageContainer>
          <StyledImage src={image} layout="fill" objectFit="cover" />
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
};

export default SearchResult;
