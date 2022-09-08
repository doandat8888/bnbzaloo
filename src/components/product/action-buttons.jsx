import React, {useState, useMemo, useEffect} from 'react';
import {  Row, Sheet, Title, Card, Text, Col,  Box, Button, List, useStore, ListItem } from "zmp-framework/react";
import store from '../../store'
import { showMessageToast } from "../../services/bnb";
import Chip from './chip';
import PriceOptions from './price-options';
import DeliveryDateTime from './delivery-date-time';
import DeliveryLocation from './delivery-location';
import NumberOrder from './number-order';

export const ProductActionButtons = (props) => {
  const [showAddToCart, setShowAddToCart] = useState(false)
  const [inited, setInited] = useState(false)


    const addToCart = () => {

        store.dispatch("addToCart", cartItem);

        showMessageToast("Thêm vào giỏ hàng thành công");
        setShowAddToCart(false);
    };


  const { product } = props;
  var cartItem = useStore("cartItem");
  var _update = useStore("updateTime");

  useEffect(() => {
    if(!cartItem.num){
      cartItem.num = 1;
      cartItem.date = "10/10/2022";
      cartItem.time_range = "8-12";
      cartItem.size = "regular";
      cartItem.product = product;
      store.dispatch("setCartItem", cartItem);
      store.dispatch("setUpdate", Math.random());
    }

    setInited(true);


  }, [inited]);


  return (
    <>
    <Row className="bgf text-center pd15">
    <Col>
      <Box  m={0} className='bg-color-w300'>
      <Button onClick={() => setShowAddToCart(true)} className="btn btn-outline maincolor " iconZMP='zi-zi-save-to-collection'>
    Thêm vào giỏ hàng
        </Button>
      </Box>
    </Col>
    <Col>
      <Box m={0} className='bg-color-w300'>
      <Button onClick={() => setShowAddToCart(true)} className="btn btn-primary btn-lg">
    MUA NGAY
        </Button>
      </Box>
    </Col>
  </Row>

     <Sheet
      backdrop
      opened={showAddToCart}
      onSheetClosed={() => setShowAddToCart(false)}
      closeButton
      backdropEl=".custom-background"
      title="Thêm vào giỏ hàng"
      style={{height: '650px'}}
      className="add-to-cart-sheet"
    >

      <NumberOrder product={product} />

          <Card className="cover small-padding no-margin zmp-card">
            <div className='cover-c'>
              <Title size='small'>Chọn dịp tặng</Title>
              <div className='chips'>
                <Chip text="Sinh nhat" />
                <Chip text="Cầu hôn" csscolor="active" />
              </div>
            </div>

          </Card>

         <PriceOptions product={product} />
         <DeliveryDateTime product={product} />
         <DeliveryLocation product={product} />

      <Box p={4}>
        <Box mx={0}>
          <Button className='btn btn-primary btn-lg' onClick={() => addToCart() } responsive>
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Box>

    </Sheet>
    </>
  );
};

ProductActionButtons.displayName = "bnb-product-actions";

export default ProductActionButtons;
