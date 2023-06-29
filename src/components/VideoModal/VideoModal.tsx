import { ModalType } from "@/utils/videoInterface";
import {
  Blue,
  CardType,
  Close,
  Container,
  Description,
  Divider,
  DownloadIcon,
  DownloadType,
  Modal,
  ModalDescription,
  ModalDownloads,
  ModalHeader,
  ModalVideo,
  Title,
  TitleSm,
  Types,
} from "./styles";

export default function VideoModal(props: ModalType) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <Container>
      <Modal>
        <ModalHeader>
          <Close src="/assets/closeIcon.svg" onClick={props.onClose} />
          <Title>
            <Blue>Webinar: </Blue>
            {props.title}
          </Title>
        </ModalHeader>
        <ModalVideo
          allow="accelerometer; autoplay; clipboard-write; web-share"
          allowFullScreen
          src={props.url}
        />
        <ModalDescription>
          <TitleSm>Descrição</TitleSm>
          <Divider />
          <Description>{props.description}</Description>
        </ModalDescription>
        <ModalDownloads>
          <TitleSm>Downloads</TitleSm>
          <Divider />
          <Types>
            <CardType xls>
              <DownloadIcon xls src="/assets/downloadIcon.svg" />
              <DownloadType>Spreadsheet.xls</DownloadType>
            </CardType>
            <CardType doc>
              <DownloadIcon doc src="/assets/downloadIcon.svg" />
              <DownloadType>Document.doc</DownloadType>
            </CardType>
            <CardType ppt>
              <DownloadIcon ppt src="/assets/downloadIcon.svg" />
              <DownloadType>Presentation.ppt</DownloadType>
            </CardType>
          </Types>
        </ModalDownloads>
      </Modal>
    </Container>
  );
}
