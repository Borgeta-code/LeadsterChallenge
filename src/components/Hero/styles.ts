import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 140px;
  width: 100%;
  background-color: #f0f8ff;
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
`;

export const SloganContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

export const SloganTextSm = styled.span`
  font-size: 35px;
  font-weight: 500;
  color: #1c3c50;
`;

export const SloganTextLg = styled.span`
  font-size: 65px;
  font-weight: 700;
  color: #0084ff;
  position: relative;
`;

export const Asset = styled.div`
  position: absolute;
  right: -13px;
  top: -35px;
`;

export const Divider = styled.div`
  width: 550px;
  height: 1px;
  background-color: #c8d4dd;
`;

export const Subtitle = styled.span`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 600;
  color: #1c3c50;
`;

export const Bold = styled.span`
  font-weight: 800;
`;
