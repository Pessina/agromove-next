import React from "react";
import YouTube from "react-youtube";

import { useLazyLoad } from "../../hooks/useLazyLoad";
import Section from "../general/Section";

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
    <Section id={elementId} title={title} className={className}>
      <div className="relative pb-[56.25%]">
        {isVisible && (
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
    </Section>
  );
};

export default VideoSection;
