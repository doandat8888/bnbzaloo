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

const ModalChooseEvent = (props) => {

    let {showModalChooseEvent, onCloseModalEvent, chooseEventArr, onChooseEvent, peopleChoose} = props;

    return (
      <Sheet
          opened={showModalChooseEvent}
          swipeToClose
          backdrop
          onSheetClosed={onCloseModalEvent}
          closeButton
          title="Chọn dịp/ sự kiện"
          className='modal-choose-event'
      >
          <div className='modal-choose-event-body'>
            {chooseEventArr.map((chooseEventItem, index) => {
                return (
                  <div className='classify-choose-event' key={index}>
                      <Text className='classify-choose-event-title'>{chooseEventItem.type}</Text>
                      <div className='classify-choose-event-content'>
                          {chooseEventItem.events.map((event, index) => {
                              return (
                                <div className='choose-event-btn' key={index} onClick={() => onChooseEvent(event, peopleChoose)}>
                                  <div className='classify-event-name'>{event.name}</div>
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

export default ModalChooseEvent;