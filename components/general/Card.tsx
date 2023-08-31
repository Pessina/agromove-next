import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`${className} rounded-md shadow-md p-8 text-center`}>
      {children}
    </div>
  );
};

export default Card;
