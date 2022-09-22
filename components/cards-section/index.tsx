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
      {data.map((anime) => {
        const id = anime.mal_id;
        const image = anime.images.jpg.large_image_url || anime.images.webp.large_image_url;
        const title = anime.title;

        return <Card key={id} id={id} image={image} title={title} />;
      })}
    </Grid>
    <Pagination paginationData={pagination} />
  </>
);

export default CardsSection;
