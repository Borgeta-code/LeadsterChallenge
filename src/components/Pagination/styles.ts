import styled from "styled-components";

interface ItemProps {
  isSelected?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

export const Label = styled.span`
  color: #1c3c50;
  font-size: 15px;
  font-weight: 800;
`;

export const Numbers = styled.span<ItemProps>`
  color: ${(props) => (props.isSelected ? "#0084ff" : "#1c3c50")};
  font-size: 15px;
  font-weight: ${(props) => (props.isSelected ? "700" : "600")};
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "1px solid #0084ff" : "")};
  padding: ${(props) => (props.isSelected ? "2px 8px" : "")};
  border-radius: ${(props) => (props.isSelected ? "6px" : "")};

  &:hover {
    color: #0084ff;
  }
`;
