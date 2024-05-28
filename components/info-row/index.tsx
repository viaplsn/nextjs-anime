import { Container, Divider, Label, Value } from "./info-row.styled";

interface InfoRowProps {
  label: string;
  value: string | number;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <Container>
    <Label>{label}</Label>
    <Divider />
    <Value>{value}</Value>
  </Container>
);

export default InfoRow;
