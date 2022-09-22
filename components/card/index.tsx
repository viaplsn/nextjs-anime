import Link from "next/link";
import { Container, Gradient, Title } from "./card.styled";
import { StyledImage } from "../../styles/utils.styled";

interface CardProps {
  id: number;
  image: string;
  title: string;
}

const Card = ({ id, image, title }: CardProps): JSX.Element => (
  <Link href={`anime/${id}`}>
    <Container>
      <Gradient />
      <StyledImage src={image} layout="fill" objectFit="cover" priority={true} />
      <Title>{title}</Title>
    </Container>
  </Link>
);

export default Card;
