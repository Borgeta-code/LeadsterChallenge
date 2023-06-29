import {
  Asset,
  Badge,
  Bold,
  Container,
  Divider,
  SloganContainer,
  SloganTextLg,
  SloganTextSm,
  Subtitle,
} from "./styles";

export default function Hero() {
  return (
    <Container>
      <Badge>Webinars exclusivos</Badge>

      <SloganContainer>
        <SloganTextSm>Menos Conversinha,</SloganTextSm>
        <SloganTextLg>
          Mais Conversão
          <Asset src="/assets/asset-header.png" />
        </SloganTextLg>
      </SloganContainer>

      <Divider />

      <Subtitle>
        Conheça as estratégias que <Bold>mudaram o jogo</Bold> e como aplicá-las
        no seu negócio
      </Subtitle>
    </Container>
  );
}
