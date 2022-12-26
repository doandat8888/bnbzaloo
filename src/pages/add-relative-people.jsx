import React, {useState, useMemo, useEffect, useRef} from "react";
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
  Col,
  ListInput,
  Picker
} from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import "../css/add-relative-people.less";
import bnbLogo from '../static/img/add-relative-people/bnb-logo.png'
import camera from '../static/img/add-relative-people/camera.png'
import peopleIcon from '../static/img/add-relative-people/people-icon.png'
import emailIcon from '../static/img/add-relative-people/email-icon.png'
import ModalChooseRelationship from "../components/add-relative-people/modal-choose-relationship";
import ModalChooseAddress from "../components/add-relative-people/modal-choose-addres";
import { each } from "zmp-dom";
import { array } from "prop-types";



const AddRelativePeople = () => {
  const dialog = useRef(null);
  const [showModalChooseRelationship, setShowModalChooseRelationship] = useState(false);
  const [showModalChooseAddress, setShowModalChooseAddress] = useState(false);
  const [relationship, setRelationship] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [fullName, setFullname] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [chooseRelationshipArr, setChooseRelationshipArr] = useState([
    {
        type: 'Gia đình',
        isChoosen: false,
        relationships: [
            {
                name: 'Ông',
                isSelected: false
            },
            {
                name: 'Bà',
                isSelected: false
            },
            {
                name: 'Cha',
                isSelected: false
            },
            {
                name: 'Mẹ',
                isSelected: false
            },
            {
                name: 'Vợ',
                isSelected: false
            },
            {
                name: 'Chồng',
                isSelected: false
            },
            {
                name: 'Con trai, bé trai',
                isSelected: false
            },
            {
                name: 'Con gái, bé gái',
                isSelected: false
            },
            {
                name: 'Anh em trai',
                isSelected: false
            },
            
        ]
    },
    {
        type: 'Xã hội',
        isChoosen: false,
        relationships: [
            {
                name: 'Bạn bè',
                isSelected: false
            },
            {
                name: 'Đồng nghiệp',
                isSelected: false
            },
            {
                name: 'Sếp',
                isSelected: false
            },
            {
                name: 'Khách hàng',
                isSelected: false
            },
            {
                name: 'Đối tác',
                isSelected: false
            },
            {
                name: 'Nhân viên',
                isSelected: false
            },
        ]
    },
  ])

  const onClickRelationshipItem = (chooseRelationshipItem, relationship) => {

     
      let newRelationships = chooseRelationshipItem.relationships.map((eachRelationship, index) => {
          return {
              ...eachRelationship,
              isSelected: eachRelationship.name === relationship.name 
          }
      });
      
      let newChooseRelationshipArr = chooseRelationshipArr.map((eachChooseRelationshipItem, index) => {
          return {
              ...eachChooseRelationshipItem,
              relationships: eachChooseRelationshipItem.type === chooseRelationshipItem.type ? newRelationships : eachChooseRelationshipItem.relationships,
              isChoosen: eachChooseRelationshipItem.type === chooseRelationshipItem.type
          }
      });
      setChooseRelationshipArr(newChooseRelationshipArr)
  }

  const onClooseModalChooseRelationship = () => {
      setShowModalChooseRelationship(false);
      let newChooseRelationshipArr = chooseRelationshipArr.map((eachChooseRelationshipItem, index) => {
          return {
              ...eachChooseRelationshipItem,
              isChoosen: false
          }
      });
      setChooseRelationshipArr(newChooseRelationshipArr)
  }

  const onSaveRelationship = (relationshipChoose) => {
      setRelationship(relationshipChoose);
  }

  const closeModalChooseAddress = () => {
      setShowModalChooseAddress(false);
  }

  const onSaveAddress = (fullAddress) => {
      setAddress(fullAddress);
      setShowModalChooseAddress(false);
  }

  const onSaveInfo = () => {
      setShowModalChooseAddress(false);
      let infoArr = [fullName, relationship, countryCode, phoneNumber, email, address];
      let count = 0;
      for(let i = 0; i < infoArr.length; i++) {
          if(infoArr[i] !== '') {
              count++;
          }
      }
      if(count === infoArr.length) {
        if (dialog.current) {
          dialog.current.open();
        }
        zmp.views.main.router.navigate('/remember?isAddRelationship=true', {
          animate: true,
          isAddRelationship: true
        });
      }else {
          alert('Vui lòng nhập đủ thông tin')
      }

      
  }

  useEffect(() => {
    dialog.current = zmp.dialog.create({
      title: "Đã lưu người thân",
      content:
        '<div className="dialog-text">Hãy cùng tặng những món quà ý nghĩa cho người thân nhé!</div>',
      buttons: [
        {
          text: "OK",
        },
      ],
    });
  }, [])

  
  

    return (
        <div className='add-relative-people-page'>
            <div className='add-relative-people-page-container'>
                <div className='add-relative-title'>Tạo người thân</div>
                <div className='add-relative-sub-title'>Nhập <span style={{color: '#DA2128', fontSize: 16, fontWeight: 'bold'}}>thông tin cá nhân</span> của người thân bạn muốn tạo mới</div>
                <div className='avatar-container'>
                  <div className='avatar-img-container'>
                    <img src={bnbLogo} className='avatar-img'/>  
                  </div>
                  <button className='get-image-btn'>
                      <img src={camera}/>
                  </button>
                </div>
                <Row className='add-relative-people-input-list'>
                    <Col className='add-relative-people-input-item' width='100'>
                      <div className='add-relative-people-input-item-container'>
                          <img src={peopleIcon} className='add-relative-people-img'/>
                          <input placeholder='Họ và tên người thân*' className='add-relative-people-input' name='fullName' onChange={(e) => setFullname(e.target.value)}/>
                      </div>
                        
                    </Col>
                    <Col className='add-relative-people-input-item' width='100' onClick={() => setShowModalChooseRelationship(true)}>
                      <div className='add-relative-people-input-item-container'>
                          <img src={peopleIcon} className='add-relative-people-img'/>
                          <div className='add-relative-people-txt'>{relationship !== '' ? relationship : 'Mối quan hệ*'}</div>
                      </div>
                      <Icon zmp='zi-arrow-right' className='add-relative-people-icon'/>
                    </Col>
                    <Col className='add-relative-people-input-item country-code-input' width='50'>
                      <div className='add-relative-people-input-item-container'>
                          <Icon zmp='zi-location' className='add-relative-people-icon'/>
                          <Picker 
                              className='modal-choose-address-picker' 
                              onChange={(picker, values) => setCountryCode(picker.value)}
                              placeholder='Mã vùng*'
                              data={[
                                {
                                  textAlign: 'center',
                                  values: ['+84', '+113', '+84'],
                                  displayValues: [
                                    '+84 Việt Nam',
                                    '+113 America',
                                    '+80 Thailand',
                                  ]
                                }
                              ]}
                          ></Picker>
                      </div>
                      <Icon zmp='zi-arrow-down' className='add-relative-people-icon'/>
                    </Col>
                    <Col className='add-relative-people-input-item' width='50'>
                      <div className='add-relative-people-input-item-container'>
                          <Icon zmp='zi-call' className='add-relative-people-icon'/>
                          <input className='add-relative-people-input' placeholder='Số điện thoại' onChange={(e) => setPhoneNumber(e.target.value)}/>
                      </div>
                    </Col>
                    <Col className='add-relative-people-input-item' width='100'>
                      <div className='add-relative-people-input-item-container'>
                          <img src={emailIcon} className='add-relative-people-img'/>
                          <input className='add-relative-people-input' placeholder='Email của người thân' onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                    </Col>
                    <Col className='add-relative-people-input-item' width='100' onClick={() => setShowModalChooseAddress(true)}>
                      <div className='add-relative-people-input-item-container'>
                          <Icon zmp='zi-location' className='add-relative-people-icon'/>
                          <div className='add-relative-people-txt'>{address !== '' ? address : 'Địa chỉ người thân*'}</div>
                      </div>
                      <Icon zmp='zi-arrow-right' className='add-relative-people-icon'/>
                    </Col>
                </Row>
                
                <button className='btn-save-info' onClick={onSaveInfo}>Lưu thông tin</button>  
               
                
            </div>
            <ModalChooseRelationship showModalChooseRelationship={showModalChooseRelationship} chooseRelationshipArr={chooseRelationshipArr} onCloseModalChooseRelationship={onClooseModalChooseRelationship} onClickRelationshipItem={onClickRelationshipItem} onSaveRelationship={onSaveRelationship}/>
            <ModalChooseAddress showModalChooseAddress={showModalChooseAddress} closeModalChooseAddress={closeModalChooseAddress} onSaveAddress={onSaveAddress}/>
        </div>
    )
}

export default AddRelativePeople