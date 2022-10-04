import Link from "next/link";
import SearchButton from "../search-button";
import CurrentDate from "../current-date";
import { Wrapper, Container } from "../../styles/utils.styled";
import { StyledHeader, Logo } from "./header.styled";

const Header = (): JSX.Element => (
  <StyledHeader>
    <Wrapper>
      <Container>
        <Link href="/" passHref>
          <Logo>Anime</Logo>
        </Link>
        <SearchButton />
        <CurrentDate />
      </Container>
    </Wrapper>
  </StyledHeader>
);

export default Header;
