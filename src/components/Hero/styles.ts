import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px 0px;
  width: 100%;
  background-color: #f0f8ff;

  @media (max-width: 768px) {
    padding: 80px 0px;
  }
`;

export const Badge = styled.span`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 999px;
  border-bottom-left-radius: 300px;
  border: 2px solid #0084ff;
  color: #0084ff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 10px;
`;

export const SloganTextSm = styled.span`
  font-size: 34px;
  font-weight: 500;
  color: #1c3c50;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SloganTextLg = styled.span`
  font-size: 65px;
  font-weight: 700;
  color: #0084ff;
  position: relative;

  @media (max-width: 768px) {
    font-size: 44px;
  }
`;

export const Asset = styled.img`
  position: absolute;
  width: 40px;
  right: -12px;
  top: 9px;

  @media (max-width: 768px) {
    width: 26px;
    top: 4px;
    right: -10px;
  }
`;

export const Divider = styled.div`
  width: 550px;
  height: 1px;
  background-color: #c8d4dd;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Subtitle = styled.span`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  color: #1c3c50;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
    width: 90vw;
  }
`;

export const Bold = styled.span`
  font-weight: 800;
`;
