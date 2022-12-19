import React from "react";
import { Card, Link, Text } from "zmp-framework/react";
import { Price } from "./price";
import { Chip } from "../common/chip";


const ProductItem = (props) => {
  const { product } = props;
  const { code, name, prices, image } = product;

  return (
    <div key={product._id} className="text-center product">
      <div className="p-over">
        {prices.percent > 0 ? (
          <>
            <div className="discount">
              <Text className="d-val">{prices.percent}%</Text>
              <Text className="d-text">giảm</Text>
            </div>
          </>
        ) : (
          <></>
        )}

        <img src={image} className="img" />
      </div>

      <div className="chips mbt5">
        <Chip text={code} csscolor="p small" />
        <Chip text="FREESHIP" csscolor="active p small" />
      </div>

      <div className="p-info">
        <Text bold className="max-line-2">
          {name}
        </Text>
        <Price slot="content" price={{price: prices.regular, price_discount: prices.regular_discount}} unit="đ" className="price" />
      </div>

    </div>
  );
};

ProductItem.displayName = "bnb-product-item";

export default ProductItem;
