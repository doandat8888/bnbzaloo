import React from "react";
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
  Icon
} from "zmp-framework/react";
import "../../css/day-remember.less"

const DayRemember = () => {
    return (
        <div className="day-remember-page">
            <Text className="day-remember-page-txt title-txt">Bạn chưa có danh sách những ngày cần nhớ</Text>
            <Text className="day-remember-page-txt add-day-txt">Thêm ngày cần nhớ tại đây</Text>
            <Button className="add-day-btn">
                <Icon className="add-day-icon" zmp="zi-plus"></Icon>
            </Button>
        </div>
        
    )
};

export default DayRemember;