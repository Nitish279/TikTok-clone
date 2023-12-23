import React, { useEffect } from "react";
import logoSmall from "../images/tiktok-logo-small.webp";
import logo from "../images/tiktok-logo.webp";

const BrandLogo = () => {
  useEffect(() => {
    // Preload the larger logo image
    const largerLogoImage = new Image();
    largerLogoImage.src = logo;

    // Clean up the image when the component is unmounted
    return () => {
      largerLogoImage.onload = null;
      largerLogoImage.onerror = null;
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
        />
      </picture>
    </>
  );
};

export default BrandLogo;
