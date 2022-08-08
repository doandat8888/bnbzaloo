import React, {useState, useMemo, useEffect} from 'react';
import {  Row, Sheet, Title, Card, Text, Col,  Box, Button, List, ListItem } from "zmp-framework/react";
import store from '../../store'
import { showMessageToast } from "../../services/bnb";
import Chip from './chip';
import PriceOptions from './price-options';
import DeliveryDateTime from './delivery-date-time';
import DeliveryLocation from './delivery-location';

export const ProductActionButtons = (props) => {
  const [showAddToCart, setShowAddToCart] = useState(false)

    const addToCart = (p) => {
        store.dispatch("addToCart", p);

        // showMessageToast("Thêm vào giỏ hàng thành công");
        setShowAddToCart(true);
    };

  const { product } = props;


  return (
    <>
    <Row className="bgf text-center pd15">
    <Col>
      <Box  m={0} className='bg-color-w300'>
      <Button onClick={() => addToCart(product)} className="btn btn-outline maincolor " iconZMP='zi-zi-save-to-collection'>
    Thêm vào giỏ hàng
        </Button>
      </Box>
    </Col>
    <Col>
      <Box m={0} className='bg-color-w300'>
      <Button onClick={() => addToCart(product)} className="btn btn-primary btn-lg">
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
      title="Thêm vào giỏ hàng"
      style={{height: '650px'}}
      className="add-to-cart-sheet"
    >

      <Card className='cover  small-padding no-margin zmp-card '>
      <div className='cover-c'>
      <Row >
            <Col className='text-right'>
              <Text className='button' bold>Số lượng: </Text>
            </Col>
            <Col>
            <Row className='text-center list-inline'>
            <Button>
              <span style={{fontSize: "36px", width: "36px", height: "36px"}} className="material-icons">
              add_circle
              </span>
              </Button>
<Text className='button' size='xlarge'>1</Text>
              <Button>
              <span style={{fontSize: "36px", width: "36px", height: "36px"}} className="material-icons">
remove_circle
</span>
              </Button>
            </Row>
            </Col>
          </Row>
</div>
      </Card>


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
          <Button className='btn btn-primary btn-lg' responsive>
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
