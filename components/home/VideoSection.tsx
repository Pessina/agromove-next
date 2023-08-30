import React from "react";
import YouTube from "react-youtube";

type VideoSectionProps = {
  title: string;
  id: string;
  className?: string;
};

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  id,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center gap-10 text-center`}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex-grow w-full">
        <div className="relative pb-[56.25%]">
          <YouTube
            videoId={id}
            className="absolute top-0 left-0 w-full h-full"
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;