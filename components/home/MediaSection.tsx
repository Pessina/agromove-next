import "slick-carousel/slick/slick.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider, { Settings } from "react-slick";

export type MediaSectionPropsI18N = {
  title: string;
  seeNews: string;
};

export type MediaSectionProps = {
  logosMedia: { src: string }[];
  i18n: MediaSectionPropsI18N;
};

const settings: Settings = {
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const MediaSection: React.FC<MediaSectionProps> = ({ logosMedia, i18n }) => {
  return (
    <div className="max-w-[90%] md:max-w-[1200px] text-center space-y-8">
      <h2 className="text-3xl font-bold">{i18n.title}</h2>
      <Slider {...settings}>
        {logosMedia.map((element) => (
          <div key={element.src}>
            <Image
              alt="midia images"
              className="h-[70px] w-auto px-4"
              src={element.src}
              height={100}
              width={100}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
      <div className="text-blue-800">
        <Link href="https://blog.agromove.com.br/agromove-na-midia/">
          {i18n.seeNews}
        </Link>
      </div>
    </div>
  );
};

export default MediaSection;
