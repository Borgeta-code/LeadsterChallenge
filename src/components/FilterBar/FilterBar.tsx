import {
  Container,
  Divider,
  Filter,
  Item,
  ItemsContainer,
  OrderBy,
  OrderByInput,
  OrderByLabel,
} from "./styles";

export default function FilterBar() {
  return (
    <Container>
      <Filter>
        <ItemsContainer>
          <Item>Âgencias</Item>
          <Item>Chatbot</Item>
          <Item>Marketing Digital</Item>
          <Item isSelected>Geração de Leads</Item>
          <Item>Mídia Paga</Item>
        </ItemsContainer>

        <OrderBy>
          <OrderByLabel>Ordenar por</OrderByLabel>
          <OrderByInput>
            <option value="Data de publicação">Data de Publicação</option>
          </OrderByInput>
        </OrderBy>
      </Filter>

      <Divider />
    </Container>
  );
}
