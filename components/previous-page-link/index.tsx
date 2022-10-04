import { useRouter } from "next/router";
import { Button, Chevron } from "./previous-page-link.styled";

interface PreviousPageLinkProps {
  label: string;
  hasArrow?: boolean;
}

const PreviousPageLink = ({ label, hasArrow = true }: PreviousPageLinkProps): JSX.Element => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      {hasArrow && <Chevron />}
      {label}
    </Button>
  );
};

export default PreviousPageLink;
