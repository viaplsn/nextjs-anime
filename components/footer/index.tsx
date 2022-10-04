import scrollToTheTop from "../../utils/scrollToTheTop";
import { Wrapper, Container, Button } from "../../styles/utils.styled";
import { StyledFooter, TextContainer, Title, Text, Chevron } from "./footer.styled";

const Footer = (): JSX.Element => (
  <StyledFooter>
    <Wrapper>
      <Container>
        <TextContainer>
          <Title>Your name</Title>
          <Text>A few words about how you found Coinable and how did you feel about this task :)</Text>
        </TextContainer>
        <Button onClick={scrollToTheTop} aria-label="Scroll to the top button">
          <Chevron />
        </Button>
      </Container>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
