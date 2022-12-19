import React from "react";
import { Icon, Box, Button, Row, Card, Text, Title, Avatar, Col } from "zmp-framework/react";
import locationIcon from "../../static/icons/location.png";
import store from '../../store'


const ReceiverLocation = (props) => {
    const {user} = props
    // const {shop} = product

  return (
    <div className="mg10">
    <Card className="cover receiver-location">
        <div className="cover-c">
        <Row >
            <Col width={20}>
                <Avatar src="https://static.belovedbeyond.com/photos/view/photos/120x120-cc/5f8841d8417490780e4b6dd2.cl.belove-beyond-personal-gift-platform.webp" size={56}></Avatar>
            </Col>
            <Col width={80}>
                <div className="btn fr maincolor"><Icon zmp="zi-check-circle-solid"></Icon> </div>
                <Text className="fb">Ngo ANh Tuan</Text>
                <Text className="fb">(+84)0989963908</Text>

                <p>92 Nguyen Huu Canh, Phường 22, Quận Bình Thạnh, TP Hồ Chí Minh</p>
            </Col>
        </Row>

        </div>
    </Card>
    </div>
  );
};

ReceiverLocation.displayName = "bnb-reciever-location";
export default ReceiverLocation;
