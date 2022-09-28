import { useRouter } from "next/router";
import scrollToTheTop from "../../utils/scrollToTheTop";
import { Container, ArrowLeft, ArrowRight, StyledButton, PageNumber } from "./pagination.styled";
import { PaginationType } from "../../types/AnimeList";

interface PaginationProps {
  paginationData: PaginationType;
}

const Pagination = ({ paginationData }: PaginationProps): JSX.Element => {
  const router = useRouter();
  const page = paginationData.current_page;
  const hasNextPage = paginationData.has_next_page;

  const handlePreviousPageClick = () => {
    router.push(page === 2 ? "/" : `/?page=${page - 1}`, undefined, { scroll: false }).then(scrollToTheTop);
  };

  const handleNextPageClick = () => {
    router.push(`/?page=${page + 1}`, undefined, { scroll: false }).then(scrollToTheTop);
  };

  return (
    <Container>
      <StyledButton disabled={page === 1} onClick={handlePreviousPageClick} aria-label="Previous page button">
        <ArrowLeft />
      </StyledButton>
      <PageNumber>{page}</PageNumber>
      <StyledButton disabled={!hasNextPage} onClick={handleNextPageClick} aria-label="Next page button">
        <ArrowRight />
      </StyledButton>
    </Container>
  );
};

export default Pagination;
