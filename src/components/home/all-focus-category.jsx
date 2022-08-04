import React from "react";
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
} from "zmp-framework/react";

import { getAllFocusCategory } from '../../services/bnb'

var categories = await getAllFocusCategory()

const AllFocusCategory = () => {
  return (
    <Card className="text-center cates">
      <Title size="small">Danh Mục Sản Phẩm</Title>

      <Grid columns={4} noBorder="true" className="cate-item">
            {categories.map((cate, index) => (
          <GridItem
          key="{index}"
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
