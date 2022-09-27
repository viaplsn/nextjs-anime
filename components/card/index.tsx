import Link from "next/link";
import { Container, Gradient, Title } from "./card.styled";
import { StyledImage } from "../../styles/utils.styled";
import { Anime } from "../../types/AnimeList";

interface CardProps {
  data: Anime;
  priority: boolean;
}

const Card = ({ data, priority }: CardProps): JSX.Element => (
  <Link href={`anime/${data.mal_id}`}>
    <Container>
      <Gradient />
      <StyledImage
        src={data.images.jpg.large_image_url || data.images.webp.large_image_url}
        layout="fill"
        objectFit="cover"
        priority={priority}
      />
      <Title>{data.title}</Title>
    </Container>
  </Link>
);

export default Card;
