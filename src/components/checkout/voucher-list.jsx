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
import VoucherItem from "./voucher-item";

const VoucherList = (props) =>  {
  // const carts = useStore("cart");
  // const carts = await loadDataArrayFromCache("cart");

  const _update = useStore("updateTime");

  useEffect(() => {

});

  return (
    <>
      <div className="cover">
        <div className="pdl10 pdr10">
          <Chip text="Tất cả(1)" csscolor="active" />
          <Chip text="Hệ thống(0)" />
          <Chip text="Của tôi(0)" />
          <Chip text="Đổi điểm" />
        </div>


        <div className="voucher-list">
          <VoucherItem />
        </div>
      </div>
    </>
  );
};

VoucherList.displayName = "bnb-checkout-voucher-list";

export default VoucherList;
