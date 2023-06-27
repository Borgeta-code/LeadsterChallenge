import {
  ButtonDemo,
  Comparative,
  Container,
  ContainerDemo,
  ContainerLeft,
  ContainerRate,
  ContainerRight,
  CreditCard,
  Divider,
  Label,
  LabelBold,
  LabelSm,
  Rating,
  Stamp,
  Subtitle,
  SubtitleBold,
  VerticalDivider,
} from "./styles";

export default function Demo() {
  return (
    <Container>
      <ContainerLeft>
        <Comparative src="/assets/comparativo_img_CTA.png" alt="Comparativo" />
      </ContainerLeft>

      <ContainerRight>
        <Label>Pronto para triplicar sua</Label>
        <LabelBold>Geração de Leads?</LabelBold>
        <Subtitle>
          Criação e ativação em <SubtitleBold>4 minutos</SubtitleBold>
        </Subtitle>
        <Divider />
        <ContainerDemo>
          <ButtonDemo>Ver demonstração</ButtonDemo>
          <Stamp src="/assets/selo_RD.png" alt="Selo RD" />
        </ContainerDemo>
        <ContainerRate>
          <CreditCard src="/assets/no-card-dark.webp" />
          <LabelSm>Não é necessário Cartão de Crédito</LabelSm>
          <VerticalDivider />
          <Rating src="/assets/rating.webp" />
          <LabelSm>4.9/5 média de satisfação</LabelSm>
        </ContainerRate>
      </ContainerRight>
    </Container>
  );
}
