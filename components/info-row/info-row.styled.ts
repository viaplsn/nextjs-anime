import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Divider = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid var(--lightgray);
`;

const Label = styled.p`
  margin-right: 0.75rem;
  color: var(--ashgray);
`;

const Value = styled.p`
  margin-left: 0.75rem;
  color: var(--black);
`;

export { Container, Divider, Label, Value };
