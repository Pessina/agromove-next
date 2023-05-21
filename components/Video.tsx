import React, { useState } from "react";
import YouTube from "react-youtube";

import LoaderSpinner from "./Loader";

type VideoProps = {
  title: string;
  id: string;
  className?: string;
};

const Video: React.FC<VideoProps> = ({ title, id, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${className} flex flex-col items-center gap-10`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <YouTube
        videoId={id}
        className="min-w-[100px] min-h-[200px] max-w-[90%]"
        onReady={() => setIsLoading(false)}
      />
      {isLoading && <LoaderSpinner />}
    </div>
  );
};

export default Video;
