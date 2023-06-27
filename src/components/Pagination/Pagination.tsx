import { Container, Divider, Label, Numbers, PageContainer } from "./styles";

export default function Pagination() {
  return (
    <Container>
      <Divider />
      <PageContainer>
        <Label>Página</Label>
        <Numbers isSelected>1</Numbers>
        <Numbers>2</Numbers>
        <Numbers>3</Numbers>
        <Numbers>4</Numbers>
      </PageContainer>
    </Container>
  );
}
