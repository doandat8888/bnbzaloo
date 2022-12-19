import React from "react";
import { Text, Title } from "zmp-framework/react";

export const ProductDesc = (props) => {
  const { product } = props;
  const { desc } = product;

  return (
    <div className="cover">
        <div className="cover-c">
        <Title bold>Mô tả sản phẩm</Title>
      <Text className="desc">{desc}</Text>
        </div>

    </div>
  );
};

ProductDesc.displayName = "bnb-product-desc";

export default ProductDesc;
