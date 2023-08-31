import React from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className,
  children,
  id,
}) => {
  return (
    <div id={id} className={`text-center space-y-8 ${className}`}>
      <div className="space-y-2 lg:space-y-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && <p className="md:text-lg">{subtitle}</p>}
      </div>
      <div className="flex flex-col gap-4 lg:gap-8">{children}</div>
    </div>
  );
};

export default Section;
