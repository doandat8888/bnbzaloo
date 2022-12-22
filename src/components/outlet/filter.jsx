import { object } from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/outlet.less';

import {
  Card,
  Link,
  Box,
  List,
  ListItem,
  Row,
  Col,
  Text,
  Picker,
  Input,
  Title,
  useStore,
  Icon,
  Button,
  ListInput,
  Sheet
} from "zmp-framework/react";
import store from "../../store";


export const FormFilterLocation = (props) => {
  const [customSheetOpened, setCustomSheetOpened] = useState(false);
  const sheet = useRef(null);
  const swipeRef = useRef(null);
  const [LocationChoose, setLocationChoose] = useState({});
  const openSheet = () => {
    if (sheet.current) {
      sheet.current.zmpSheet().open();
    }
  };
  const openSwipeToStepSheet = () => {
    if (swipeRef.current) {
      swipeRef.current.zmpSheet().open();
    }
  };

  const onCollapseStep = () => {
    if (swipeRef.current) {
      swipeRef.current.zmpSheet().stepClose();
    }
  };
  const onclickLocation = (Provice)=>{
    setLocationChoose(Provice);
    
  }
  const onClickApply =() =>{
    setCustomSheetOpened(false);

  }
  const [ProvincesTypes, setProvinces] = useState([
    {
      Provinces: [
        {
          name: 'TP.Hồ Chí Minh',
          NumShop: '231 cửa hàng',
          isSelected: false,
        },
        {
          name: 'Hà Nội',
          NumShop: '132 cửa hàng',
          isSelected: false,

        },
        {
          name: 'Huế',
          NumShop: '121 cửa hàng',
          isSelected: false,

        },
        {
          name: 'Đà Nẵng',
          isSelected: false,
          NumShop:'231 cửa hàng',
        },
        {
          name: 'Đà Lạt',
          isSelected: false,
          NumShop:'54 cửa hàng',
        },
        {
          name:'Vũng Tàu',
          isSelected: false,
          NumShop:'83 cửa hàng',
        }
        
      ]
    }]);
  return (
    <Row className="filter1">
      <Col className="col-shop-location" width ="80"> 
       Cửa hàng tại  <span className = "span-location"> {LocationChoose !== {}? LocationChoose.name : ''}</span> (<span className = "span-numshop">{LocationChoose !== {}? LocationChoose.NumShop : ''}</span>)
      </Col>
      <Col width = "20" >
      <Box>
        <Button
          typeName="secondary"
          className ="btn-filter"
          onClick={() => setCustomSheetOpened(true)}
          fill
          >
          Lọc
        </Button>
      </Box>
          </Col>
      <Sheet
        ref={sheet}
        swipeToClose
        opened={customSheetOpened}
        backdrop
        onSheetClosed={() => setCustomSheetOpened(false)}
        closeButton
        title="Bộ lọc tỉnh thành"
        className="filter-loaction-sheet"
      >
        <Input
          type="text"
          placeholder="Nhập tên tỉnh thành"
          clearButton
          className="search-location"
        >
        </Input>
        
        {ProvincesTypes.map((ProvinceType, index) => {
          return (
            <div className = "location-sheet" key={index}>
              {
                ProvinceType.Provinces.map((Province, index) => {
                  return (<Button className="btn-province" onClick={() => onclickLocation(Province)}
                  >{Province.name}</Button>)
                })
              }
            </div>
          )
        })}
        <Button
        className = "btn-btn-apply" onClick ={()=>onClickApply()}
        > Áp dụng</Button>
      </Sheet>
    </Row>
  )
}


export default FormFilterLocation;
