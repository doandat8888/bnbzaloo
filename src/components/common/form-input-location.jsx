import { object } from "prop-types";
import React, { useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
} from "zmp-framework/react";
import store from "../../store";


export const FormInputLocation = (props) => {
    // const {text, csscolor} = props
    // const _class = csscolor + ' chip'
    return (
        <div className="cover">
            <Title>Địa chỉ</Title>
        <List label="Địa chỉ" noHairlines title="Địa chỉ" className="form">
        <li>
            <div className="item-input">
                <Picker
                    title="Chọn tỉnh thành"
                    label="Tỉnh thành"
                    defaultSelect={['hcm']}

                    data={[
                    {
                        textAlign: 'center',
                        values: ['hcm', 'ha-noi', 'da-nang'],
                        displayValues: [
                        'Hồ Chí Minh',
                        'Hà Nội',
                        'Đà Nẵng'
                        ]
                    }
                    ]}
                    formatValue={(values, displayValues) => {
                    return `${displayValues[0]}`;
                    }}
                    inputId='select-province'
                    />
            </div>
        </li>

        <li>
            <div className="item-input">
                <Picker
                    title="Chọn quận huyện"
                    label="Quận huyện"
                    defaultSelect={['quan-1']}

                    data={[
                    {
                        textAlign: 'center',
                        values: ['quan-1', 'quan-2'],
                        displayValues: [
                        'Quận 1',
                        'Quận 2'
                        ]
                    }
                    ]}
                    formatValue={(values, displayValues) => {
                    return `${displayValues[0]}`;
                    }}
                    inputId='select-district'
                    />
            </div>
        </li>

        <li>
            <div className="item-input">
                <Picker
                    title="Chọn phường xã"
                    label="Phường xã"
                    defaultSelect={['phường 7']}

                    data={[
                    {
                        textAlign: 'center',
                        values: ['Phường 7', 'Phường 8'],
                        displayValues: [
                        'Phường 7',
                        'Phường 8'
                        ]
                    }
                    ]}
                    formatValue={(values, displayValues) => {
                    return `${displayValues[0]}`;
                    }}
                    inputId='select-ward'
                    />
            </div>
        </li>

        <ListInput
            label='Địa chị cụ thể'
            type="text"
            placeholder="Số nhà và tên đường"
            clearButton
            info="Nhập tên building, số nhà, tên đường"
            name="address"
            required
            errorMessage="Thông tin này là bắt buộc nhập"
            validate
            >
        </ListInput>
        </List>
        </div>


    )
}

FormInputLocation.displayName = 'bnb-input-location'

export default FormInputLocation
