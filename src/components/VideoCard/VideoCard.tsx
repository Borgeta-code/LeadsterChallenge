import play from "../../../public/assets/playIcon.svg";
import { video } from "../VideoList/VideoList";
import {
  Container,
  PlayIcon,
  Thumbnail,
  ThumbnailContainer,
  Title,
} from "./styles";

export default function VideoCard(props: video) {
  return (
    <Container>
      <ThumbnailContainer>
        <PlayIcon src={play} alt="Play icon" />
        <Thumbnail src={props.thumbnail} alt="Thumbnail" />
      </ThumbnailContainer>
      <Title>{props.title}</Title>
    </Container>
  );
}
