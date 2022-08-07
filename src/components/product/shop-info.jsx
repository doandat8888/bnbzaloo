import React from "react";
import { Icon, Box, Button, Row, Card, Text, Title, Avatar, Col } from "zmp-framework/react";
import locationIcon from "../../static/icons/location.png";
import store from '../../store'


const ShopInfo = (props) => {
    const {product} = props
    const {shop} = product

  return (
    <Card className="cover shop-info">
        <div className="cover-c">
        <Title className="mbt15">Cửa hàng thực hiện</Title>
        <Row className="mt20">
            <Col width={20}>
                <Avatar src={shop.avatar} size={56}></Avatar>
            </Col>
            <Col width={50}>
                <Title size="small">{shop.name}</Title>
                <Text size="xxsmall">{shop.location.address_short}</Text>
            </Col>
            <Col width={30}>
                <Button className="btn btn-primary btn-sm">Xem cửa hàng</Button>
            </Col>


        </Row>
        </div>



    </Card>
  );
};

export default ShopInfo;
