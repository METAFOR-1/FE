import YoutubePlayer from "react-youtube";

export default function Youtube({
  id,
  width,
  height,
  autoplay,
}: {
  id: string;
  width: string;
  autoplay?: boolean;
  height?: string;
}) {
  return (
    <YoutubePlayer
      videoId={id}
      opts={{
        width: width,
        height: height ?? "240",
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          rel: 0,
          modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
        },
      }}
    />
  );
}
