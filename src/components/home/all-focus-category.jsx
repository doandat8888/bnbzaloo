import React, {useEffect} from "react";
import store from '../../store'

import  {
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
} from "zmp-framework/react";


import { getAllFocusCategory } from '../../services/bnb'

var categories = null;
var loading = true;

const AllFocusCategory = () => {
  const _update = useStore("updateTime");

  useEffect(() => {
    if(!loading){
      return;
    }
    getAllFocusCategory().then((res) => {

      loading = false;

      if(res.code == "ok"){
        categories = res.allCategories;
        store.dispatch("setUpdate", Math.random());
      } else {
        alert(res.msg);
      }
    }, (err) => {

    } );
  }, []);

  if(categories == null){
    return <></>
  }
  return (
    <Card className="text-center cates">
      <Title size="small">Danh Mục Sản Phẩm</Title>

      <Grid columns={4} noBorder="true" className="cate-item">
            {categories.map((cate, index) => (
              <GridItem
                key={cate._id}
                label={cate.name_home}
              >
                <img src={cate.image_home_url}  />
              </GridItem>
            ))}
        </Grid>

    </Card>
  );
};

export default AllFocusCategory;
