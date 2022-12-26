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

const ModalChooseRelationship = (props) => {

    let {showModalChooseRelationship, chooseRelationshipArr} = props;
    let [relationshipChoose, setRelationshipChoose] = useState('');
    
    const [disabled, setDisabled] = useState(true);

    const onClickRelationshipItem = (chooseRelationshipItem, relationship) => {
        setDisabled(false);
        props.onClickRelationshipItem(chooseRelationshipItem, relationship);
        setRelationshipChoose(relationship.name)
    }

    const closeModalRelationship = () => {
        props.onCloseModalChooseRelationship();
        setDisabled(true);
    }

    const onSaveRelationship = () => {
        props.onSaveRelationship(relationshipChoose);
        props.onCloseModalChooseRelationship();
        setDisabled(true);
    }
    return (
      <Sheet
          opened={showModalChooseRelationship}
          swipeToClose
          backdrop
          onSheetClosed={closeModalRelationship}
          closeButton
          title="Chọn mối quan hệ"
          className='modal-choose-relationship'
      >
          <div className='modal-choose-relationship-body'>
            {chooseRelationshipArr.map((chooseRelationshipItem, index) => {
                return (
                  <div className='classify-choose-relationship' key={index}>
                      <Text className='classify-choose-relationship-title'>{chooseRelationshipItem.type}</Text>
                      <div className='classify-choose-relationship-content'>
                          {chooseRelationshipItem.relationships.map((relationship, index) => {
                              if(relationship.isSelected === true && chooseRelationshipItem.isChoosen === true) {
                                return (
                                  <div className='choose-relationship-btn selected' key={index} onClick={() => onClickRelationshipItem(chooseRelationshipItem, relationship)}>
                                    <div className='classify-relationship-name'>{relationship.name}</div>
                                  </div>
                                )
                              }else {
                                return (
                                  <div className='choose-relationship-btn' key={index} onClick={() => onClickRelationshipItem(chooseRelationshipItem, relationship)}>
                                    <div className='classify-relationship-name'>{relationship.name}</div>
                                  </div>
                                )
                              }
                              
                          })}
                      </div>
                  </div>
                )
              })}

              <div className='btn-save-relationship-container'>
                {disabled === true ? <button disabled className='btn-save-relationship disabled'>Áp dụng</button> : <button className='btn-save-relationship' onClick={onSaveRelationship}>Áp dụng</button>}
              </div>
              
          </div>
      </Sheet>
        )
}

export default ModalChooseRelationship;