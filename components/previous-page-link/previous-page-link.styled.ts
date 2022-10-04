import styled from "styled-components";
import { ChevronLeft } from "@styled-icons/bootstrap";

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 600;
  color: var(--black);
  transition: all 0.3s linear;
  &:hover {
    transform: translateX(-0.5rem);
    cursor: pointer;
  }
`;

const Chevron = styled(ChevronLeft)`
  width: 18px;
  color: var(--black);
  margin-right: 0.5rem;
`;

export { Button, Chevron };
