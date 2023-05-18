import React, { ReactNode } from "react";

type GridCardsProps = {
  content: ReactNode;
};

const GridCards: React.FC<GridCardsProps> = ({ content }) => {
  return (
    <div className="rounded-md shadow-md p-8 text-center md:p-4">{content}</div>
  );
};

export default GridCards;
