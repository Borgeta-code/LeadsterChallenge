import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const LabelSm = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #1c3c50;
  opacity: 60%;
`;

export const FooterNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 80px;
  margin-bottom: 20px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #1c3c50;
  margin-bottom: 10px;
`;

export const Link = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #1c3c50;
  opacity: 60%;
  cursor: pointer;

  &:hover {
    color: #0084ff;
    opacity: 100%;
  }
`;

export const SocialIcon = styled.img`
  width: 14px;
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SocialItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: #f7f8fb;
  border-radius: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd;
  opacity: 20%;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  padding: 25px;
`;
