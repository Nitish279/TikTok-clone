import React, { useEffect } from "react";
import logoSmall from "../images/tiktok-logo-small.webp";
import logo from "../images/tiktok-logo.webp";

const BrandLogo = () => {
  useEffect(() => {
    const smallerLogoImage = new Image();
    smallerLogoImage.src = logoSmall;

    const largerLogoImage = new Image();
    largerLogoImage.src = logo;

    return () => {
      largerLogoImage.onload = null;
      largerLogoImage.onerror = null;

      smallerLogoImage.onload = null;
      smallerLogoImage.onerror = null;
    };
  }, []);

  return (
    <>
      <picture>
        <source
          srcSet={`${logoSmall} 280w, ${logo} 440w`}
          sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
          type="image/webp"
        />
        <img
          src={logo}
          alt="TikTok Logo"
          width="115"
          height="34"
          className="cursor-pointer"
          style={{ maxWidth: "100%", height: "auto" }}
          loading="lazy"
        />
      </picture>
    </>
  );
};

export default BrandLogo;
