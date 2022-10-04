import styled from "styled-components";
import { headerHeight } from "../../constants/layout-dimensions";

const StyledHeader = styled.header`
  height: ${headerHeight}px;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--gainsboro);
`;

const Logo = styled.a`
  color: var(--black);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-decoration: none;
`;

export { StyledHeader, Logo };
