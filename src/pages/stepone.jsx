import React, { useState, useMemo, useEffect } from "react";
import { Page, Icon, Box, useStore, Button, Row, Col, Text, Grid, GridItem, Sheet } from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import store from '../store';
import '../css/order.less';

import TopNav from '../components/step/top-nav';

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

  const onClickPeople = (people) => {
    people = setPeopleChoose(people);
    store.dispatch("steptwo");
  }

  return (
    <Page name="stepone" className="stepone">
      <Row className="top-nav pd10 bgf">
        <Col width="100" className="top-text">
          <Box>
            <Icon
              className=''
              zmp='zi-chevron-left'
            />
            <p className="text-title">
              Bước (1/4)
            </p>
          </Box>
        </Col>
        <TopNav/>
      </Row>

      <p className="main-title">Bạn muốn <span>tặng quà cho ai?</span></p>
      <Row className="main">
        <div
          opened={showRelationship}
          swipeToClose
          backdroponSheetClosed={() => setRelationship(false)}
          closeButton
          title="Chọn người thân"
          className='choose-people'
        >
          <div className='choose-people-body'>
            {relativePeoples.map((relativePeople, index) => {
              return (
                <div className='classify' key={index}>
                  <div className='classify-title'>{relativePeople.type}</div>
                  <div className='classify-content'>
                    {relativePeople.peoples.map((people, index) => {
                      return (
                        <div className='classify-people' key={index}>
                          <Button onClick={() => onClickPeople(people)} className='classify-people-relationship'>{people.relationship}</Button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Row>
    </Page>
  );
};
export default SteponePage;