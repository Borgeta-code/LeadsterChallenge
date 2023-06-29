import styled from "styled-components";

interface ItemProps {
  xls?: boolean;
  doc?: boolean;
  ppt?: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: #7c8c9860;
`;

export const Modal = styled.div`
  width: 450px;
  border-radius: 14px;
  border-top: 4px solid #007eff;
  background-color: #fff;
  z-index: 9999;
  position: relative;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
`;

export const Blue = styled.span`
  color: #007eff;
`;

export const Title = styled.span`
  width: 270px;
  font-size: 18px;
  font-weight: 600;
  color: #1c3c50;
`;

export const Close = styled.img`
  position: absolute;
  cursor: pointer;
  width: 20px;
  top: 10px;
  right: 10px;
  opacity: 50%;
`;

export const ModalVideo = styled.iframe`
  width: 100%;
  height: 240px;
`;

export const ModalDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
`;

export const TitleSm = styled.div`
  font-size: 14px;
  font-weight: 800;
  color: #1c3c50;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1c3c50;
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #c8d4dd50;
`;

export const ModalDownloads = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 12px;
  gap: 8px;
`;

export const Types = styled.div`
  display: flex;
  gap: 6px;
`;

export const CardType = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  min-width: 100px;
  border-radius: 4px;
  gap: 4px;
  background-color: ${(props) =>
    props.xls
      ? "#c2f4ea"
      : props.doc
      ? "#c2e6ff"
      : props.ppt
      ? "#FFF8D0"
      : "#E8EEF3"};
  color: ${(props) =>
    props.xls
      ? "#00ae7f"
      : props.doc
      ? "#0090F0"
      : props.ppt
      ? "#CBB553"
      : "#E8EEF3"};
`;

export const DownloadIcon = styled.img<ItemProps>`
  width: 26px;
  padding: 4px;
  background-color: ${(props) =>
    props.xls
      ? "#9fefdf"
      : props.doc
      ? "#A1D9FF"
      : props.ppt
      ? "#FFF1A0"
      : "#E8EEF3"};
`;

export const DownloadType = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 0 8px;
`;
