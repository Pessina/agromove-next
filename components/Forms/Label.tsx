import React from "react";

type LabelProps = {
  text: string;
};

const Label: React.FC<LabelProps> = ({ text }) => {
  return <p className="text-gray-700 font-semibold mb-1">{text}</p>;
};

export default Label;
