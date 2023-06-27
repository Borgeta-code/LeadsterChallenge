import VideoCard from "../VideoCard/VideoCard";
import { Container } from "./styles";

export interface video {
  id: number;
  thumbnail: string;
  url: string;
  title: string;
  description: string;
}

export default function VideoList() {
  const res = require("../../utils/videos.json");
  const videos: video[] = res.videos;

  return (
    <Container>
      {videos.map((video) => (
        <VideoCard
          id={video.id}
          title={video.title}
          description={video.description}
          thumbnail={video.thumbnail}
          url={video.url}
        />
      ))}
    </Container>
  );
}
