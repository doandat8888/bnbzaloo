import React, {useState, useMemo, useEffect} from "react";
import nonePeople from "../../static/img/relative-people/none/none-people.png";
import {
  Page,
  Title,
  List,
  ListItem,
  Box,
  Button,
  Text,
  View,
  useStore,
  TabView,
  Tabbar,
  Link,
  Icon,
  Sheet,
  Input,
  Checkbox,
  DatePicker,
  Row,
  Col
} from "zmp-framework/react";

const ModalChoosePeople = (props) => {

  let {relativePeoples, showModalChoosePeople} = props;

  const onClickPeople = (people) => {
      props.onClickPeople(people);
  }

  const onSheetClosed = () => {
      props.onSheetClosed();
  }
  return (
    <Sheet
        opened={showModalChoosePeople}
        swipeToClose
        backdrop
        onSheetClosed={onSheetClosed}
        closeButton
        title="Chọn người thân"
        className='modal-add-people'
    >
        <div className='modal-add-people-body'>
              {relativePeoples.map((relativePeople, index) => {
                return (
                  <div className='classify' key={index}>
                      <Text className='classify-title'>{relativePeople.type}</Text>
                      <div className='classify-content'>
                          {relativePeople.peoples.map((people, index) => {
                              return (
                                <div className='classify-people' key={index} onClick={() => onClickPeople(people)}>
                                  <div className='classify-people-img-container'>
                                      <img className='classify-people-img' src={people.img ? people.img : nonePeople}/>
                                  </div>
                                  <div className='classify-people-name'>{people.name ? people.name : 'Một ai đó'}</div>
                                  <div className='classify-people-relationship'>{people.relationship ? people.relationship : ''}</div>
                                </div>
                              )
                          })}
                      </div>
                  </div>
                  
                )
                  
              })}
                
            
        </div>
    </Sheet>
  )
}

export default ModalChoosePeople;