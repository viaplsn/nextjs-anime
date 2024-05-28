import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap";
import breakpoints from "../../constants/breakpoints";

const Button = styled.button`
  width: 22rem;
  height: 2rem;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 30px;
  background-color: var(--brightgray);
  transition: all 0.3s linear;
  &:hover {
    transform: scale(0.95);
    cursor: pointer;
    border-color: var(--black);
  }

  @media (max-width: ${breakpoints.md}) {
    width: 16rem;
  }
  @media (max-width: ${breakpoints.sm}) {
    width: 10rem;
  }
  @media (max-width: 400px) {
    width: 8rem;
  }
`;

const SearchIcon = styled(Search)`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  color: var(--black);
`;

const Label = styled.span`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(--black);
`;

export { Button, SearchIcon, Label };
