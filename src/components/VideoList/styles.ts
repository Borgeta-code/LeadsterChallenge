import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 80%;
  gap: 25px;
  margin-top: 50px;

  @media (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
    margin-top: 20px;
  }
`;
