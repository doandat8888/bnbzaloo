import { object } from "prop-types";
import React, { useEffect } from "react";
import { loadDataArrayFromCache } from '../../services/storage';
import {
  Card,
  Link,
  Box,
  List,
  ListItem,
  Row,
  Col,
  Text,
  Title,
  useStore,
  Icon,
  Button,
} from "zmp-framework/react";
import store from "../../store";

var shopGroups = {};
var shopKeys = [];
const CheckoutCart = (props) =>  {
  const carts = useStore("cart");
  // const carts = await loadDataArrayFromCache("cart");

  const _update = useStore("updateTime");

  useEffect(() => {
    if (!shopGroups && carts != null && carts.length > 0) {
      shopGroups = {};

      carts.forEach((item, idx) => {
        if (!shopGroups[item.product.shop_id]) {
          shopGroups[item.product.shop_id] = [];

          shopKeys.push(item.product.shop_id);
        }

        shopGroups[item.product.shop_id].push(item);
        store.dispatch("setUpdate", Math.random());
      });
    }
  }, [shopGroups, shopKeys]);

  return (
    <>
      {shopGroups == null ? (
        <Card className="text-center mg20 cover">
          <Text className="pd20 ">Bạn chưa có sản phẩm nào trong giỏ hàng</Text>
        </Card>
      ) : (
        <Box className="cart-page">



              <Card key>
                <div className="shop-title">
                <span className="material-icons">store</span>  <Text className="sn">Shop 1</Text>
                </div>

                <List>

                    <ListItem className="cart-item">
                      <Row>
                        <Col width='40' className="p-img">
                          <img className="img-thumbnail" src={'https://static.belovedbeyond.com/photos/view/photos/larges/xinh-tuoi-online.D609872/62a19b1ed35c73c15e096ba7.combo-qua-tang-sinh-nhat.belove-beyond-personal-gift-platform.webp'} />

                          <div className="btn-group">
                            <Button iconZMP="zi-minus-circle"></Button> <span className="fb button num">1</span> <Button iconZMP="zi-plus-circle"></Button>
                          </div>
                        </Col>
                        <Col width='60' className="p-info">
                          <Button iconZMP="zi-close" className="rm-item"></Button>
                          <Text className="p-code">D123456</Text>
                          <Text className="p-name">Nhẹ nhàng</Text>


                          <div className="size">
                            <Text>Size 1: 500.000đ</Text>
                          </div>
                          <div className="price">
                            <Text className="mprice">500.000đ</Text>
                            <div className="dprice">
                            <Text className="oprice">600.000đ</Text>
                            <Text className="percent">Giảm 5%</Text>
                            </div>

                          </div>

                        </Col>
                      </Row>
                    </ListItem>
                </List>
              </Card>

              <Card className="cart-action">
                <div className="cart-sum">
                  <Text>Tổng tiền tạm tính:</Text>
                  <Text className="total">50.000đ</Text>
                </div>

                <Button large responsive className="btn btn-primary">MUA HÀNG</Button>
              </Card>
        </Box>
      )}
    </>
  );
};

CheckoutCart.displayName = "bnb-checkout-cart";

export default CheckoutCart;
