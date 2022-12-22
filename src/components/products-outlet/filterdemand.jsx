import { object } from "prop-Types";
import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../css/outletpro.less';

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


export const FormFilterDemand = (props) => {
  const [customSheetOpened, setCustomSheetOpened] = useState(false);
  const sheet = useRef(null);
  const swipeRef = useRef(null);
  const [DemandChoose, setDemandChoose] = useState({});
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
  const onClickApply = () => {
    setCustomSheetOpened(false);

  }
  const [DemandsTypes, setDemands] = useState([

    {

      Types: 'GÍA',
      occ: [
        {
          fil: 'Dưới 500k',
        },
        { fil: '500k đến 1 triệu' },
        { fil: '1 triệu đến dưới 2 triệu' },
        { fil: 'Từ 2 triệu trở lên' }
      ]
    },
    {
      Types: 'DỊP/SỰ KIỆN',
      occ: [
        { fil: 'Bộ lọc' },
        { fil: 'Quà tặng' },
        { fil: 'Cầu hôn' },
        { fil: 'Kỷ niệm yêu nhau' },
        { fil: 'Happy Day Flower' },
        { fil: 'Tặng mẹ' },
        { fil: 'Tặng cha' }
      ]
    },
    {
      Types: 'LOẠI THIẾT KẾ',
      occ: [
        { fil: 'Bình' },
        { fil: 'Bó' },
        { fil: 'Chậu' },
        { fil: 'Hộp' },
        { fil: 'Kệ' },
        { fil: 'Lẵng' },
        { fil: 'Khác' }
      ]
    }

  ]
  );
  return (
    <Row className="filter1">
      <Col className="col-shop-location" width="80">
        <span className="span-location"> {DemandChoose !== {} ? DemandChoose.Types : ''}</span>
      </Col>
      <Col width="20" >
        <Box>
          <Button
            typeName="secondary"
            className="btn-filter"
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
        title="Bộ lọc chi tiết"
        className="filter-demad-sheet"
      >

        {DemandsTypes.map((DemandType, index) => {
          return (
            <div className="dmd-sheet" key={index}>
               <p>{ DemandType.Types}</p>
            </div>
          )
        })}
        <Button

        > Áp dụng</Button>
      </Sheet>
    </Row>
  )
}


export default FormFilterDemand;
