import React, { useEffect } from "react";
import {
  Page,
  Navbar,
  NavTitleLarge,
  List,
  ListItem,
  Card,
  useStore,
} from "zmp-framework/react";
import store from "../store";
import { getProductInfo } from "../services/bnb";
import { zmp } from "zmp-framework/react";

import HomeTopNav from "../components/home/home-top-nav";
import ProductImages from "../components/product/images";
import ProductNamePrice from "../components/product/name-price";
import ProductDesc from "../components/product/desc";
import Loading from "../components/home/loading";
import ProductToolbar from "../components/product/toolbar";
import ShopInfo from "../components/product/shop-info";
import ProductList from "../components/product/list";
import ProductActionButtons from "../components/product/action-buttons";




const ProductDetail = () => {

//   const _update = useStore("updateTime")
  var product = useStore("product");

  const getProduct = (pid) =>
    getProductInfo(pid).then(
      (res) => {
        if (res.code == "ok") {
          product = res.product;
          store.dispatch("setProduct", product);
        } else {
          alert(res.msg);
        }
      },
      (err) => {}
    );

  useEffect(() => {
    const zmproute = zmp.views.main.router.currentRoute;
    console.log(zmproute.query);
    const pid = zmproute.query["id"];
    getProduct(pid);
  }, []);

  return (
    <Page name="home">
      <HomeTopNav />
      {product == null || product._id == null ? (
        <Loading></Loading>
      ) : (
        <>
        <div className="product-detail">
            <ProductImages product={product} />
            <ProductNamePrice product={product} />
            <ProductToolbar product={product} />
            <ProductActionButtons product={product} />
            <ProductDesc product={product} />
            <ShopInfo product={product} />

        </div>
        <ProductList horizontal={true} title="Có thể bạn quan tâm" desc="" field="relations" url={'/API/product/relations/' + product._id} />
        <ProductList horizontal={true} title="Sản phẩm bạn xem gần đây" desc="" field="recents" url={'/API/load/recents'} />

        </>
      )}
    </Page>
  );
};

export default ProductDetail;
