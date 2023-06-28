import {
  Container,
  Divider,
  FooterBottom,
  FooterNavigation,
  LabelSm,
  Link,
  Logo,
  LogoContainer,
  Navigation,
  SocialIcon,
  SocialItem,
  SocialMedia,
  Title,
} from "./styles";

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo src="/assets/logo.png" />
        <LabelSm>Transformando visitantes em clientes.</LabelSm>
      </LogoContainer>

      <FooterNavigation>
        <Navigation>
          <Title>Links Principais</Title>
          <Link>Home</Link>
          <Link>Ferramenta</Link>
          <Link>Preços</Link>
          <Link>Contato</Link>
        </Navigation>

        <Navigation>
          <Title>Cases</Title>
          <Link>Geração de Leads B2B</Link>
          <Link>Geração de Leads em Software</Link>
          <Link>Geração de Leads em Imobiliária</Link>
          <Link>Cases de Sucesso</Link>
        </Navigation>

        <Navigation>
          <Title>Materiais</Title>
          <Link>Blog</Link>
          <Link>Parceria com Âgencias</Link>
          <Link>Guia Definitivo do Marketing</Link>
          <Link>Materias Gratuitos</Link>
        </Navigation>

        <Navigation>
          <Title>Siga a Leadster</Title>
          <SocialMedia>
            <SocialItem>
              <SocialIcon src="/assets/linkedinIcon.svg" />
            </SocialItem>
            <SocialItem>
              <SocialIcon src="/assets/facebookIcon.svg" />
            </SocialItem>
            <SocialItem>
              <SocialIcon src="/assets/instagramIcon.svg" />
            </SocialItem>
          </SocialMedia>
          <Link>contato@leadster.com.br</Link>
          <Link>(42) 98828-9851</Link>
        </Navigation>
      </FooterNavigation>

      <Divider />

      <FooterBottom>
        <LabelSm>
          Copyright &copy; 2015 - 2023 Todos os direitos reservados
        </LabelSm>
        <LabelSm>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
          Termos de uso
        </LabelSm>
      </FooterBottom>
    </Container>
  );
}
