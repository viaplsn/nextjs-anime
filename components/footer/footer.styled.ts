import styled from "styled-components";
import { ChevronUp } from "@styled-icons/bootstrap";
import breakpoints from "../../constants/breakpoints";
import { footerHeight, footerHeightMobile } from "../../constants/layout-dimensions";

const StyledFooter = styled.footer`
  height: ${footerHeight}px;
  padding: 1.75rem 0;
  border-top: 1px solid var(--gainsboro);

  @media (max-width: ${breakpoints.sm}) {
    height: ${footerHeightMobile}px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 17.3rem;

  @media (max-width: ${breakpoints.sm}) {
    max-width: 14rem;
  }
`;

const Title = styled.h4`
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: var(--black);
`;

const Text = styled.p`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: var(--carbongray);
`;

const Chevron = styled(ChevronUp)`
  width: 16px;
  color: var(--black);
`;

export { StyledFooter, TextContainer, Title, Text, Chevron };
