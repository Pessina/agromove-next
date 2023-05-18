import React from "react";
import { Container, Embed } from "semantic-ui-react";

const Video = ({ title, id }) => {
  return (
    <Container className="Video" textAlign="center" text>
      <h2>{title}</h2>
      <Embed
        id={id}
        source="youtube"
        active
        autoplay={false}
        icon={null}
        style={{
          minHeight: "200px",
          minWidth: "100px",
          margin: "32px 0px",
        }}
        brandedUI={1}
      />
    </Container>
  );
};

export default Video;
