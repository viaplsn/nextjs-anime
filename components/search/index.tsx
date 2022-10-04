import { useState, useRef, useEffect } from "react";
import SearchResult from "../search-result";
import getData from "../../utils/getData";
import { Container, Input, Results } from "./search.styled";
import { Anime } from "../../types/AnimeList";

const Search = (): JSX.Element => {
  const [searchResult, setSearchResult] = useState<Anime[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeout: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleDebounceSearch = async () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    if (inputRef.current?.value.trim()) {
      timeout.current = setTimeout(async () => {
        const { data } = await getData(`anime?q=${inputRef.current?.value}&limit=5`);
        setSearchResult(data);
      }, 600);
    } else {
      setSearchResult(null);
      return;
    }
  };

  return (
    <Container>
      <Input
        placeholder="You can search for ‘Kyoukai no Kanata’ for example"
        ref={inputRef}
        onChange={handleDebounceSearch}
      />
      {searchResult && (
        <Results>
          {searchResult.length > 0 ? (
            searchResult.map((anime) => <SearchResult key={anime.mal_id} result={anime} />)
          ) : (
            <p>Oops it seems there is nothing for ‘{inputRef.current?.value}’</p>
          )}
        </Results>
      )}
    </Container>
  );
};

export default Search;
