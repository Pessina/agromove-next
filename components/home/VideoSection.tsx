import React, { useState } from "react";
import YouTube from "react-youtube";

import LoaderSpinner from "../general/Loader";

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
  const [isLoading, setIsLoading] = useState(true);

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
            onReady={() => setIsLoading(false)}
          />
        </div>
      </div>
      {isLoading && <LoaderSpinner />}
    </div>
  );
};

export default VideoSection;
