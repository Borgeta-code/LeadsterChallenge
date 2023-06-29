import styled from "styled-components";

interface ItemProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 35px;

  @media (max-width: 480px) {
    width: 96%;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;

  @media (max-width: 480px) {
    overflow-x: scroll;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.div<ItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 999px;
  border: ${(props) => (props.isSelected ? "" : "1px solid #1c3c50")};
  color: ${(props) => (props.isSelected ? "#fff" : "#1c3c50")};
  background-color: ${(props) => (props.isSelected ? "#0084ff" : "")};
  transition: ease-in 0.1s;

  &:hover {
    color: ${(props) => (props.isSelected ? "" : "#0084ff")};
    border: ${(props) => (props.isSelected ? "" : "1px solid #0084ff")};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 480px) {
    min-width: 124px;
    padding: 5px 8px;
  }
`;

export const OrderBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OrderByLabel = styled.label`
  font-weight: 800;
  font-size: 12px;
  color: #1c3c50;
`;

export const OrderByInput = styled.select`
  font-family: "Plus Jakarta Sans", sans-serif;
  padding: 2px 4px;
  border-radius: 6px;
  font-weight: 600;
  color: #1c3c50;
  border-color: #1c3c50;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
`;
