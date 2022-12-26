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
  Col,
  Picker,
  ListInput
} from "zmp-framework/react";
import cityIcon from '../../static/img/add-relative-people/city-icon.png'
import arrowPlane from '../../static/img/add-relative-people/arrow-plane.png'
import positionIcon from '../../static/img/add-relative-people/position-icon.png'
import microIcon from '../../static/img/add-relative-people/micro-icon.png'

const ModalChooseAddress = (props) => {

  let {showModalChooseAddress} = props;
  const closeModalChooseAddress = () => {
      props.closeModalChooseAddress();
  }
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [ward, setWard] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [fullAddress, setFullAddress] = useState('');

  const onSaveAddress = () => {
    let infoArr = [province, district, ward, addressDetail];
    let count = 0;
    for(let i = 0; i < infoArr.length; i++) {
        if(infoArr[i] !== '') {
            count++;
        }
    }
    if(count === infoArr.length) {
        let fullAddressTxt = addressDetail + ', ' + ward + ', ' + district + ', ' + province;
        props.onSaveAddress(fullAddressTxt);
        
    }else {
        alert('Vui lòng nhập đủ thông tin địa chỉ')
    }
  }

    return (
      <Sheet
          opened={showModalChooseAddress}
          swipeToClose
          backdrop
          onSheetClosed={closeModalChooseAddress}
          closeButton
          title="Chọn địa chỉ"
          className='modal-choose-address'
      >
            <Row className='modal-choose-address-input-list'>
                <Col className='modal-choose-address-input-item' width='100'>
                  <div className='modal-choose-address-input-item-container'>
                      <img src={cityIcon} className='modal-choose-address-img'/>
                      <Picker 
                        className='modal-choose-address-picker' 
                        placeholder='Tỉnh, thành phố*'
                        onChange={(picker) => setProvince(picker.value)}
                        data={[
                          {
                            textAlign: 'center',
                            values: ['TP.HCM', 'Hà Nội', 'Quảng Ngãi', 'Kon Tum', 'Gia Lai'],
                            displayValues: [
                              'TP.HCM',
                              'Hà Nội',
                              'Quảng Ngãi',
                              'Kon Tum',
                              'Gia Lai',
                            ]
                          }
                        ]}
                        >
                        
                      </Picker>
                  </div>
                  <Icon zmp='zi-arrow-down' className='modal-choose-address-icon'/>
                </Col>
                <Col className='modal-choose-address-input-item' width='100'>
                  <div className='modal-choose-address-input-item-container'>
                      <img src={arrowPlane} className='modal-choose-address-img'/>
                      <Picker 
                        className='modal-choose-address-picker' 
                        placeholder='Quận huyện*'
                        onChange={(picker) => setDistrict(picker.value)}
                        data={[
                          {
                            textAlign: 'center',
                            values: ['Bình Tân', 'Quận 3', 'Bình Thạnh', 'Thủ Đức', 'Quận 5'],
                            displayValues: [
                              'Bình Tân',
                              'Quận 3',
                              'Bình Thạnh',
                              'Thủ Đức',
                              'Quận 5',
                            ]
                          }
                        ]}
                      ></Picker>
                  </div>
                  <Icon zmp='zi-arrow-down' className='modal-choose-address-icon'/>
                </Col>
                <Col className='modal-choose-address-input-item' width='100'>
                  <div className='modal-choose-address-input-item-container'>
                      <img src={positionIcon} className='modal-choose-address-img'/>
                      <Picker 
                        className='modal-choose-address-picker' 
                        placeholder='Phường, xã*'
                        onChange={(picker) => setWard(picker.value)}
                        data={[
                          {
                            textAlign: 'center',
                            values: ['An Lạc', 'Bình Trị Đông A', 'Bình Trị Đông B'],
                            displayValues: [
                              'An Lạc',
                              'Bình Trị Đông A',
                              'Bình Trị Đông B',
                            ]
                          }
                        ]}
                      ></Picker>
                  </div>
                  <Icon zmp='zi-arrow-down' className='modal-choose-address-icon'/>
                </Col>
                <Col  width='100' className='modal-choose-address-input-item type-address'>
                  <div className='modal-choose-address-input-item-container'>
                      <img src={positionIcon} className='modal-choose-address-img'/> 
                      <input placeholder='Địa chỉ cụ thể' className='modal-choose-address-input' onChange={(e) => setAddressDetail(e.target.value)}/>
                 </div>
                </Col>
            </Row>
            <button className='btn-save-address' onClick={onSaveAddress}>Lưu</button>
      </Sheet>
    )
}

export default ModalChooseAddress