import React from "react";
import YouTube from "react-youtube";

import { useLazyLoad } from "../../hooks/useLazyLoad";

type VideoSectionProps = {
  title: string;
  id: string;
  elementId: string;
  className?: string;
};

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  id,
  elementId,
  className,
}) => {
  const isVisible = useLazyLoad(elementId);

  return (
    <div
      id={elementId}
      className={`${className} flex flex-col items-center gap-10 text-center`}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex-grow w-full">
        <div className="relative pb-[56.25%]">
          {isVisible && ( // Conditionally render based on visibility
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
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
