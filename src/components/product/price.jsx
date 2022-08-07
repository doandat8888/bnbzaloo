import React from "react";
import { Text } from "zmp-framework/react";

export const Price = (props) => {
  const { price, inline } = props;
  const unit = 'đ';

  return (
    <div className={inline ? 'inblock price': 'price'}>
      {price.price_discount > 0 ? (
        <>
          <Text  bold className="main-price">
            {price.price_discount.toLocaleString()} {unit ? unit : " VNĐ"}
          </Text>
          <Text  className="orgin-price">
            {price.price.toLocaleString()} {unit ? unit : " VNĐ"}
          </Text>
        </>
      ) : (
        <>
          <Text bold className="main-price">
            {price.price.toLocaleString()} {unit ? unit : " VNĐ"}
          </Text>
        </>
      )}
    </div>
  );
};

Price.displayName = "bnb-product-price";

export default Price;
