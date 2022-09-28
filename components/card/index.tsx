import Link from "next/link";
import { Container, Gradient, Title } from "./card.styled";
import { StyledImage } from "../../styles/utils.styled";
import { Anime } from "../../types/AnimeList";

interface CardProps {
  data: Anime;
  priority: boolean;
  isMobileScreenSize: boolean;
}

const Card = ({ data, priority, isMobileScreenSize }: CardProps): JSX.Element => (
  <Link href={`anime/${data.mal_id}`}>
    <Container>
      <Gradient />
      <StyledImage
        src={isMobileScreenSize ? data.images.webp.large_image_url : data.images.webp.image_url}
        layout="fill"
        objectFit="cover"
        priority={priority}
      />
      <Title>{data.title}</Title>
    </Container>
  </Link>
);

export default Card;
