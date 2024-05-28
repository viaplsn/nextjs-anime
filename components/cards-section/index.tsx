import Grid from "../grid";
import Card from "../card";
import Pagination from "../pagination";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Anime, PaginationType } from "../../types/AnimeList";

interface CardsSectionProps {
  data: Anime[];
  pagination: PaginationType;
}

const CardsSection = ({ data, pagination }: CardsSectionProps) => {
  const isMobileScreenSize = useMediaQuery(480);

  return (
    <>
      <Grid>
        {data.map((anime, index) => {
          const priority = isMobileScreenSize ? index === 0 : true;
          return <Card key={anime.mal_id} data={anime} priority={priority} />;
        })}
      </Grid>
      <Pagination paginationData={pagination} />
    </>
  );
};

export default CardsSection;
