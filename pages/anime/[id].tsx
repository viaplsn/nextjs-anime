import { GetServerSideProps } from "next";
import PreviousPageLink from "../../components/previous-page-link";
import InfoRow from "../../components/info-row";
import Ratings from "../../components/ratings";
import getData from "../../utils/getData";
import { Wrapper, StyledImage } from "../../styles/utils.styled";
import {
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
} from "../../styles/anime.styled";
import { Anime } from "../../types/AnimeList";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await getData(`anime/${query.id}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

interface AnimeProps {
  data: Anime;
}

const Anime = ({ data }: AnimeProps) => (
  <Box>
    <Wrapper>
      <Container>
        <PreviousPageLink label="Go back to Main" />
        <Data>
          <ImageContainer>
            <StyledImage src={data.images.webp.image_url} layout="fill" objectFit="cover" priority />
          </ImageContainer>
          <Info>
            <TitleContainer>
              <MainTitle>{data.title}</MainTitle>
              {data.approved && <CheckCircle />}
            </TitleContainer>
            <Details>
              {data.type && <InfoRow label="Type" value={data.type} />}
              {data.source && <InfoRow label="Source" value={data.source} />}
              {data.episodes && <InfoRow label="Episodes" value={data.episodes} />}
              {data.status && <InfoRow label="Status" value={data.status} />}
            </Details>
            <Ratings score={data.score} rank={data.rank} popularity={data.popularity} />
          </Info>
        </Data>
        {data.synopsis && (
          <Text>
            <Title>Description</Title>
            <Description>{data.synopsis}</Description>
          </Text>
        )}
      </Container>
    </Wrapper>
  </Box>
);

export default Anime;
