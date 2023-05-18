import React from "react";
import { Container, Embed } from "semantic-ui-react";

type VideoProps = {
  title: string;
  id: string;
};

const Video: React.FC<VideoProps> = ({ title, id }) => {
  return (
    <Container className="Video" textAlign="center" text>
      <h2>{title}</h2>
      <Embed
        id={id}
        source="youtube"
        active
        autoplay={false}
        icon={null}
        className="min-w-[100px] min-h-[200px] my-8"
        brandedUI={false}
      />
    </Container>
  );
};

export default Video;
