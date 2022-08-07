import React, {useEffect} from "react";
import store from '../../store'
import { zmp } from 'zmp-framework/react'
import {
  Icon,
  Box,
  Button,
  Row,
  Col,
  Card,
  GridItem,
  Text,
  Grid,
  Title,
  useStore,
  List,
} from "zmp-framework/react";

import { getHomeCategoryProduct } from '../../services/bnb'
import ProductItem from "../product/product-item";
import ProductList from "../product/list";

var ret = null;
var loading = true;


const HomeCategoryProduct = () => {

  const _update = useStore("updateTime");

  useEffect(() => {
    if(!loading){
      return;
    }
    getHomeCategoryProduct().then((res) => {
      loading = false;
      if(res.code == "ok"){
        ret = res;
        store.dispatch("setUpdate", {});
      } else {
        alert(res.msg);
      }

    }, (err) => {} );

  }), [];

  if(ret == null || ret.focusCate == null){
    return <></>
  }

  return (
    <List>
      {ret.focusCate.map((cate, index) => (
        <Card className="text-center cover no-margin cate-focus" key={cate._id}>
          <div className="ml15 mr10">
          <Title size="small">{cate.name}</Title>
          <Text size="xsmall" className="max-line-2">{cate.intro}</Text>
          </div>


        <ProductList products={cate.products} />

      </Card>
))}
    </List>

  );
};

export default HomeCategoryProduct;
