import React, { ReactNode } from "react";

type GridCardsProps = {
  content: ReactNode;
  className?: string;
};

const GridCards: React.FC<GridCardsProps> = ({ content, className = "" }) => {
  return (
    <div className={`${className} rounded-md shadow-md p-8 text-center md:p-4`}>
      {content}
    </div>
  );
};

export default GridCards;
