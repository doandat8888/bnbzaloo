import React, {useEffect} from "react";
import { Card, Swiper, SwiperSlide, Link, useStore, Text, Title } from "zmp-framework/react";
import store from "../../store";

const unit = 'đ';
var mainPrice;
var originPrice;

const ProductNamePrice = (props) => {
  const { product } = props;
  const { name, prices, extras } = product;


  const _update = useStore("updateTime")

  useEffect(() => {
    if(prices.regular_discount > 0){
        mainPrice = prices.regular_discount;
        originPrice = prices.regular;
    } else {
        mainPrice = prices.regular;
    }

    mainPrice = mainPrice.toLocaleString() + unit;
    if(originPrice){
        originPrice = originPrice.toLocaleString() + unit;
    }

    // neu co nhieu gia (premium)
    if(prices.premium > 0){
        if(prices.premium_discount > 0){
            mainPrice = mainPrice + " - " + prices.premium_discount.toLocaleString() + unit;
            originPrice = originPrice + " - " + prices.premium.toLocaleString() + unit;
        } else {
            mainPrice = mainPrice + " - " + prices.premium.toLocaleString() + unit;
        }
    }
    // neu co nhieu gia (deluxe)
    else if(prices.deluxe > 0){
        if(prices.deluxe_discount > 0){
            mainPrice = mainPrice + " - " + prices.deluxe_discount.toLocaleString() + unit;
            originPrice = originPrice + " - " + prices.deluxe.toLocaleString() + unit;
        } else {
            mainPrice = mainPrice + " - " + prices.deluxe.toLocaleString() + unit;
        }
    }

    prices.percent = 10;

    store.dispatch("setUpdate", Math.random());


  }, []);


  return (
    <Card className=" cover p-over">
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

      <div className="name-price ">


        <Title size="normal"  className="name">{name}</Title>
        <div className="price">
          {originPrice ? (
            <>
              <Text bold className="main-price">
                {mainPrice}
              </Text>
              <Text className="orgin-price">
                {originPrice}
              </Text>
            </>
          ) : (
            <>
              <Text bold className="main-price">
                {mainPrice}
              </Text>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

ProductNamePrice.displayName = "bnb-product-name-price";

export default ProductNamePrice;
