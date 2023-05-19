import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider, { Settings } from "react-slick";

export type MediaSectionPropsI18N = {
  title: string;
  seeNews: string;
};

export type MediaSectionProps = {
  logosMidia: { src: string }[];
  i18n: MediaSectionPropsI18N;
};

const settings: Settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  centerMode: true,
};

const MediaSection: React.FC<MediaSectionProps> = ({ logosMidia, i18n }) => {
  return (
    <div className="max-w-[1200px] text-center space-y-4">
      <h2 className="text-3xl font-bold">{i18n.title}</h2>
      <Slider {...settings}>
        {logosMidia.map((element) => (
          <div key={element.src}>
            <Image
              alt="midia images"
              className="mx-auto h-[70px] w-auto"
              src={element.src}
              height={200}
              width={200}
            />
          </div>
        ))}
      </Slider>
      <div className="text-blue-500">
        <Link href="https://blog.agromove.com.br/agromove-na-midia/">
          {i18n.seeNews}
        </Link>
      </div>
    </div>
  );
};

export default MediaSection;
