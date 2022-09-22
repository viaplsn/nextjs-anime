import Grid from "../grid";
import Card from "../card";
import Pagination from "../pagination";
import { Anime, PaginationType } from "../../types/AnimeList";

interface CardsSectionProps {
  data: Anime[];
  pagination: PaginationType;
}

const CardsSection = ({ data, pagination }: CardsSectionProps) => (
  <>
    <Grid>
      {data.map((anime) => (
        <Card key={anime.mal_id} data={anime} />
      ))}
    </Grid>
    <Pagination paginationData={pagination} />
  </>
);

export default CardsSection;
