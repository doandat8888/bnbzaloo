import React from "react";
import { Icon, Box, Button, Row, Col, Text, Title } from "zmp-framework/react";
import locationIcon from "../../static/icons/location.png";
import store from '../../store'

const onClickAllClear = (e) => {
  store.dispatch("clearAllCache");
}

const ProductToolbar = () => {
  return (
    <Row className="pdt5 ptoolbar bgf">

        <Button
          className='btn-trans'
          onClick={() => onClickAllClear()}
        >

            <Title className="pd10" size="xsmall">TOP bán chạy</Title>
        </Button>




          <Button

            className='btn-trans'
            onClick={() => onClickAllClear()}
          >

            <Icon
                className=''
                zmp='zi-heart'
              />


              <Text>Yên thích</Text>
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickAllClear()}
          >
            <Icon
                className=''
                zmp='zi-share'
              />
              <Text>Chia sẻ</Text>
          </Button>

          <Button
            className='btn-trans'
            onClick={() => onClickAllClear()}
          >
            <Icon
                className=''
                zmp='zi-chat-solid'
              />
              <Text>Chat ngay</Text>
          </Button>






    </Row>
  );
};

export default ProductToolbar;
