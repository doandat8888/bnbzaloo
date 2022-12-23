import React, { useState, useMemo, useEffect } from "react";
import { Page, Card, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem, Sheet} from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../../store';
import '../../css/order.less';

const SteponePage = () => {
  const [showRelationship, setRelationship] = useState(false);
  const [peopleChoose, setPeopleChoose] = useState({});

  const [relativePeoples, setRelativePeoples] = useState([
    {
      type: 'Gia đình',
      peoples: [
        {
          relationship: 'Ông',
        },
        {
          relationship: 'Bà',
        },
        {
          relationship: 'Cha',
        },
        {
          relationship: 'Mẹ',
        },
        {
          relationship: 'Vợ',
        },
        {
          relationship: 'Chồng',
        },
        {
          relationship: 'Con trai, bé trai',
        },
        {
          relationship: 'Con gái, bé gái',
        },
        {
          relationship: 'Anh em trai',
        },
      ],
    },
    {
      type: 'Xã hội',
      peoples: [
        {
          relationship: 'Bạn bè',
        },
        {
          relationship: 'Đồng nghiệp',
        },
        {
          relationship: 'Sếp',
        },
        {
          relationship: 'Khách hàng',
        },
        {
          relationship: 'Đối tác',
        },
        {
          relationship: 'Nhân viên',
        },
      ],
    },
    {
      type: 'Chưa phân loại',
      peoples: [
        {
          relationship: 'Một ai đó',
        },
      ]
    }
  ])

  return (
    <Card name="stepone" className="stepone">
      <Col className="range">
        <ul className="steps">
          <li className="step ">
            <div className="step-content step-active">
              <span className="step-circle">1</span>
              <span className="step-text">{peopleChoose.relationship ? peopleChoose.relationship : 'Chọn ' + 'người nhận'}</span>
            </div>
          </li>
          <li className="step ">
            <div className="step-content step-error">
              <span className="step-circle">2</span>
              <span className="step-text">Chọn<br />khu vực</span>
            </div>
          </li>
          <li className="step ">
            <div className="step-content step-success">
              <span className="step-circle">3</span>
              <span className="step-text">Chọn<br />dịp tặng</span>
            </div>
          </li>
          <li className="step ">
            <div className="step-content">
              <span className="step-circle">4</span>
              <span className="step-text">Chọn<br />sản phẩm</span>
            </div>
          </li>
        </ul>
      </Col>
    </Card>
  );
};
export default SteponePage;