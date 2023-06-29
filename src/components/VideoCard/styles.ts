import Image from "next/image";
import styled from "styled-components";

export const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.span`
  width: 100%;
  padding: 14px 20px;
  font-weight: 800;
  font-size: 12px;
`;

export const PlayIcon = styled(Image)`
  position: absolute;
  width: 70px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  width: 90%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  color: #1c3c50;
  transition: ease-in 0.1s;

  &:hover {
    color: #007eff;
    transform: scale(1.1);

    ${Thumbnail} {
      opacity: 60%;
    }

    ${ThumbnailContainer} {
      background-color: #007eff;
    }

    ${PlayIcon} {
      z-index: 10;
    }

    &:active {
      transform: scale(1);
    }

    @media (max-width: 480px) {
      &:hover {
        transform: scale(1);
      }
    }
  }
`;
