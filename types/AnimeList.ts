export interface Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Reference {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: Image;
    webp: Image;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  approved: true;
  titles: string[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: true;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Reference[];
  licensors: Reference[];
  studios: Reference[];
  genres: Reference[];
  explicit_genres: Reference[];
  themes: Reference[];
  demographics: Reference[];
}

export interface PaginationType {
  current_page: number;
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

interface AnimeList {
  data: Anime[];
  pagination: PaginationType;
}

export default AnimeList;
