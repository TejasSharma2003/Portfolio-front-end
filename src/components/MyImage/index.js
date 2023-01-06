import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

function MyImage(image) {
  return (
    <LazyLoadImage
      alt={image.alt}
      height="100%"
      src={image.src} // use normal <img> attributes as props
      width="100%"
      effect="blur"
    />
  );
}

export default MyImage;
