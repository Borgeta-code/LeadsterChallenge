import Image from "next/image";
import hero from "../../../public/assets/asset-header.png";
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
          <Asset>
            <Image src={hero} alt="" width={35} />
          </Asset>
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
