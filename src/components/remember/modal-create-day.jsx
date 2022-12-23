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
import { zmp } from 'zmp-framework/react'

const ModalCreateDay = (props) => {

    let {peopleChoose, showModalCreateDay, eventChoose} = props;

    return (
      <Sheet
          opened={showModalCreateDay}
          swipeToClose
          backdrop
          onSheetClosed={props.onSheetClosed}
          closeButton
          title="Tạo ngày mới"
          className='modal-add-day'
      >
          <div className='modal-add-day-body'>
            <div className='people-choose'>
              <div className='people-choose-img-container'>
                  <img className='people-choose-img' src={peopleChoose !== {} && peopleChoose.img ? peopleChoose.img : nonePeople}/>
              </div>
              <div className='people-choose-name'>{peopleChoose !== {} ? peopleChoose.name : ''}</div>
              <div className='people-choose-relationship'>{peopleChoose !== {} ? peopleChoose.relationship : ''}</div>
            </div>
            <div className='modal-add-day-choose'>
                <button className='choose-event choose-btn' onClick={props.onClickChooseEvent}>
                    <div className='choose-btn-left'>
                      <Icon zmp="zi-notif"></Icon>
                      <Text className='choose-btn-txt'>{eventChoose !== {} && eventChoose.name ? eventChoose.name : 'Dịp/ sự kiện'}</Text>  
                    </div>
                    <Icon zmp="zi-chevron-right"></Icon>
                </button>
                <button className='choose-event choose-btn' onClick={props.onShowDatePicker}>
                    <div className='choose-btn-left'>
                      <Icon zmp="zi-calendar"></Icon>
                    
                      <DatePicker
                        listInput
                        locale="vi"
                        listInput
                        className='choose-date-calendar'
                        opened
                      />
                    </div>
                    
                </button>
                
                <div className='choose-input-container'>
                    <Icon zmp="zi-heart" className='choose-input-icon'/>
                    <input className='choose-input' placeholder='Sở thích'/>
                </div>
                <div className='choose-input-container'>
                    <Icon zmp="zi-note" className='choose-input-icon'/>
                    <input className='choose-input' placeholder='Ghi chú'/>
                </div>
                
            </div>
            <div className='reminder'>
                <Checkbox name='remind-me' label='Nhắc lại hàng năm' value='Reminder' className='remind-me-checkbox'/>
            </div>
            <div className='save-btn-container'>
                <button className='save-btn' onClick={props.onSavePeople}>Lưu</button>
            </div>
          </div>
          
      </Sheet>
    )
}

export default ModalCreateDay;