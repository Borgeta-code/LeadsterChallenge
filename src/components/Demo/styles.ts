import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0px;
  gap: 30px;
  background-color: #f0f8ff;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 50px 0;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;

  @media (max-width: 480px) {
    width: 268px;
  }

  @media (min-width: 480px) and (max-width: 860px) {
    width: 248px;
  }
`;

export const Comparative = styled.img`
  width: 100%;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const Label = styled.span`
  color: #1c3c50;
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const LabelBold = styled.span`
  font-weight: 800;
  color: #1c3c50;
  font-size: 25px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.span`
  color: #1c3c50;
  font-size: 14px;
  font-weight: 600;
  margin-top: 4px;
`;

export const SubtitleBold = styled.span`
  font-weight: 800;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
  margin: 14px 0px;
`;

export const ContainerDemo = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 0.5px;
  font-size: 10px;
  font-weight: 600;
  padding: 10px 25px;
  border-radius: 999px;
  background-color: #0084ff;
  color: #fff;
  transition: ease-in 0.1s;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
    background-color: #0084ff90;
  }
`;

export const Stamp = styled.img`
  width: 120px;
`;

export const ContainerRate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  gap: 5px;
`;

export const CreditCard = styled.img`
  width: 12px;
`;

export const LabelSm = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #1c3c50;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const VerticalDivider = styled.div`
  height: 12px;
  width: 1px;
  background-color: #1c3c50;
`;

export const Rating = styled.img`
  width: 50px;
`;
