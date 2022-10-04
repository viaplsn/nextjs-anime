export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Anime {
  mal_id: number;
  images: {
    jpg: Image;
    webp: Image;
  };
  approved: boolean;
  title: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  score: number;
  rank: number;
  popularity: number;
  synopsis: string;
}

export interface PaginationType {
  current_page: number;
  has_next_page: boolean;
}

interface AnimeList {
  data: Anime[];
  pagination: PaginationType;
}

export default AnimeList;
