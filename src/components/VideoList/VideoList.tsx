import { VideoType } from "@/utils/videoInterface";
import Pagination from "../Pagination/Pagination";
import VideoCard from "../VideoCard/VideoCard";
import { Container } from "./styles";

export default function VideoList() {
  const res = require("../../utils/videos.json");
  const videos: VideoType[] = res.videos;

  return (
    <>
      <Container>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            description={video.description}
            thumbnail={video.thumbnail}
            url={video.url}
          />
        ))}
      </Container>

      <Pagination />
    </>
  );
}
