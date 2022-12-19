import React, {useState, useMemo, useEffect} from 'react';
import { Icon, Box, Button, Row, Col, Text, Title, Sheet, List, Picker, ListInput } from "zmp-framework/react";
import locationIcon from "../../static/icons/location.png";
import store from '../../store'
import FormInputLocation from '../common/form-input-location';
import FormInputPhonenNumber from '../common/form-input-phone-number';

const AddNewRelationshipSheet = (props) => {
    const [showAddNewRelationship, setShowAddNewRelationship] = useState(false)

    const doAddNewRelationship = () => {

    }

  return (
    <Sheet
    backdrop
    opened={showAddNewRelationship}
    onSheetClosed={() => setShowAddNewRelationship(false)}
    closeButton
    title="Thêm người nhận"
    style={{height: '650px'}}
    className="add-new-relationship"
  >

    <div className='cover'>
        <Title>Người nhận</Title>
        <List form noHairlines className='form'>
        <ListInput
            label='Họ tên'
            type="text"
            placeholder="Nhập vào họ tên người nhận"
            clearButton

            info="Tên người nhận để liên hệ giao hàng"
            name="fullName"
            required
            errorMessage="Thông tin này là bắt buộc nhập"
            validate
            >
        </ListInput>

        <li>

            <div className="item-input">
                <Picker
                    title="Chọn mối quan hệ"
                    label="Mối quan hệ"
                    defaultSelect={['cha']}

                    data={[
                    {
                        textAlign: 'center',
                        values: ['cha', 'mẹ', 'anh-em'],
                        displayValues: [
                        'Cha',
                        'Mẹ',
                        'Anh chị em'
                        ]
                    }
                    ]}
                    formatValue={(values, displayValues) => {
                    return `${displayValues[0]}`;
                    }}
                    inputId='custom-picker-1'
                    />
            </div>
        </li>

        <FormInputPhonenNumber />




    </List>
    </div>
    <FormInputLocation />

    <Box p={4}>
      <Box mx={0}>
        <Button className='btn btn-primary btn-lg' onClick={() => doAddNewRelationship() } responsive>
          Thêm người nhận
        </Button>
      </Box>
    </Box>

  </Sheet>
  );
};

AddNewRelationshipSheet.displayName = "bnb-add-new-relationship";

export default AddNewRelationshipSheet;
