import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";
import layoutDimensions from "../../constants/layout-dimensions";

const Main = styled.main`
  min-height: calc(100vh - ${layoutDimensions.md});

  @media (max-width: ${breakpoints.sm}) {
    min-height: calc(100vh - ${layoutDimensions.sm});
  }
`;

export { Main };
