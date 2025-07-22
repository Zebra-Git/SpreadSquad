import React from "react";

type PartnerLogoProps = {
  src: string;
  alt: string;
};

const PartnerLogo = ({ src, alt }: PartnerLogoProps) => {
  return <img src={src} alt={alt} />;
};

export default PartnerLogo; 