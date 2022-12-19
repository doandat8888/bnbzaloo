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


const viewProductPage = (p) => {
    store.dispatch("setProduct", {});
    zmp.views.main.router.navigate('/product-detail?id=' + p._id, {
      animate: true
    });
  }

const ProductList = (props) => {

    const {title, url, field, horizontal, products} = props
    var product = useStore("product");
    var list =  null ;

    if(products){
        list= products
    } else if(product && product[field]){
        list = product[field]
    }



    const _update = useStore("updateTime");
    useEffect(() => {
        if(!url){
            return;
        }

        getProducts(url).then((res) => {

            // inited = true;

            if(res.code == "ok"){
              product[field] = res[field];
              list =  product[field];

              store.dispatch("setProduct", product);
              store.dispatch("setUpdate", Math.random());
            } else {
              alert(res.msg);
            }

          }, (err) => {} );

    }, []);

  if(list == null){
    return <></>
  }

  return (

    <Card className="cover">
        <div className="cover-c">
        <Title>{title}</Title>
        </div>

    {horizontal ?
    <List className="products horizontal">
      <div className="list-hz-ctn" style={{width: ((150+10)*list.length) + "px"}} >

        {list.map((p, index) => (
          <div className="list-hz-item" key={p._id} onClick={() => viewProductPage(p)}>
              <ProductItem product={p} />
          </div>


        ))}
      </div>
    </List>

    :
      <Grid columns={2} noBorder="true" className="cate-item products">
          {list.map((p, index1) => (
        <GridItem
        onClick={() => viewProductPage(p)}
        key={p._id}
        >
          <ProductItem product={p} />
        </GridItem>
          ))}
      </Grid>

    }

    </Card>

  );
};

export default ProductList;
