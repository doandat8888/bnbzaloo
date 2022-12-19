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
import Chip from '../common/chip';

const VoucherItem = (props) =>  {
  // const carts = useStore("cart");
  // const carts = await loadDataArrayFromCache("cart");

  const _update = useStore("updateTime");

  useEffect(() => {

});

  return (
    <>
      <div className="voucher-item">
        <div className="left">

        </div>
        <div className="right">
            <Button iconZMP="zi-info-circle-solid" className="fr"></Button>
            <Chip text="Giảm trên giá bán" />
            <Text className="code">BIGTHANKS</Text>
            <Text className="sub">Giảm 10% tối đa 100.000đ</Text>
            <Text className="">HSD: <b>20/10/2022</b></Text>

            <Button className="btn btn-sm btn-primary apply" iconZMP="zi-check">Áp dụng</Button>
        </div>
      </div>
    </>
  );
};

VoucherItem.displayName = "bnb-checkout-voucher-list";

export default VoucherItem;
