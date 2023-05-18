import React, { ReactNode } from "react";

type GridCardsProps = {
  content: ReactNode;
};

const GridCards: React.FC<GridCardsProps> = ({ content }) => {
  return <div className="Card">{content}</div>;
};

export default GridCards;
