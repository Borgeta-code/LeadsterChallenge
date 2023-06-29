import { useState } from "react";
import play from "../../../public/assets/playIcon.svg";
import { VideoType } from "../../utils/videoInterface";
import VideoModal from "../VideoModal/VideoModal";
import {
  Container,
  PlayIcon,
  Thumbnail,
  ThumbnailContainer,
  Title,
} from "./styles";

export default function VideoCard(props: VideoType) {
  const [modalOpen, setModalOpen] = useState(false);

  const abrirModal = () => {
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container key={props.id} onClick={abrirModal}>
        <ThumbnailContainer>
          <PlayIcon src={play} alt="Play icon" />
          <Thumbnail src={props.thumbnail} alt="Thumbnail" />
        </ThumbnailContainer>
        <Title>{props.title}</Title>
      </Container>

      {/* Modal */}

      <VideoModal
        id={props.id}
        title={props.title}
        description={props.description}
        url={props.url}
        thumbnail={props.thumbnail}
        onClose={fecharModal}
        isOpen={modalOpen}
      />
    </>
  );
}
