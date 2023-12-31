import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 140px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;
