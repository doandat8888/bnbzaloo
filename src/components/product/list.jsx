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
  List,
  useStore,
} from "zmp-framework/react";


import { getProducts } from '../../services/bnb'
import ProductItem from "../product/product-item";

var products = null;
var inited = false;


const ProductList = (props) => {
    const {title, url, field, horizontal} = props
    const _update = useStore("updateTime");
    useEffect(() => {
        if(inited){
            return;
        }

        getProducts(url).then((res) => {

            inited = true;

            if(res.code == "ok"){
              products = res[field];
              store.dispatch("setUpdate", {});
            } else {
              alert(res.msg);
            }

          }, (err) => {} );

    }, []);

  if(products == null){
    return <></>
  }

  return (

    <Card className="cover">
        <div className="cover-c">
        <Title>{title}</Title>
        </div>

    {horizontal ?
    <List className="products horizontal">
        <div className="list-hz-ctn" style={{width: (150*products.length) + "px"}} >


    {products.map((p, index) => (
      <Card className="list-hz-item" key={p._id}>

           <ProductItem product={p} />
           </Card>


))}
</div>
  </List>

    :
    <List className="products">
      {products.map((p, index) => (
        <Card key={p._id}>

             <ProductItem product={p} />
             </Card>


))}
    </List>
    }

    </Card>

  );
};

export default ProductList;
