import React from "react";
import { Card, Swiper, SwiperSlide,  Link, Text } from "zmp-framework/react";
import { Chip } from "../common/chip";

const ProductImages = (props) => {
  const { product } = props;
  const { code, images, is_combo } = product;


return (
    <>
    <Card className="top-slider">
        <Swiper>
            {images.map((img, index) => (

          <SwiperSlide key={index}>
            <img src={img.large} />
            </SwiperSlide>
          ))}
        </Swiper>
    </Card>
    <div className="chips p mg10 text-center">
        <Chip text={code} csscolor="small" />
    </div>
    {

        <div className="img-thumbs">
        {images.map((img, index) => (
            <img key={index} src={img.src} />
        ))}
        </div>

    }
    </>
  );
};

ProductImages.displayName = "bnb-product-images";

export default ProductImages;
