import React from "react";
import { Text } from "zmp-framework/react";

export const Price = (props) => {
  const { prices, unit } = props;

  return (
    <div className="price">
      {prices.regular_discount > 0 ? (
        <>
          <Text bold className="main-price">
            {prices.regular_discount.toLocaleString()} {unit ? unit : " VNĐ"}
          </Text>
          <Text className="orgin-price">
            {prices.regular.toLocaleString()} {unit ? unit : " VNĐ"}
          </Text>
        </>
      ) : (
        <>
          <Text bold className="main-price">
            {prices.regular.toLocaleString()} {unit ? unit : " VNĐ"}
          </Text>
        </>
      )}
    </div>
  );
};

Price.displayName = "bnb-product-price";

export default Price;
