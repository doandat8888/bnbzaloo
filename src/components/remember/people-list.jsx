import React, {useState} from "react";
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
  Row,
  Col,
  Icon
} from "zmp-framework/react";
import { zmp } from 'zmp-framework/react';
import '../../css/remember/people-list.less'
import store from "../../store";
import addIcon from '../../static/img/relative-people/add-icon.png'
import familyPeople1 from "../../static/img/relative-people/family/relative-people-1.png"
import familyPeople2 from "../../static/img/relative-people/family/relative-people-2.png"
import familyPeople3 from "../../static/img/relative-people/family/relative-people-3.png"
import familyPeople4 from "../../static/img/relative-people/family/relative-people-4.png"
import familyPeople5 from "../../static/img/relative-people/family/relative-people-5.png"
import familyPeople6 from "../../static/img/relative-people/family/relative-people-6.png"
import familyPeople7 from "../../static/img/relative-people/family/relative-people-7.png"
import familyPeople8 from "../../static/img/relative-people/family/relative-people-8.png"
import socialPeople1 from "../../static/img/relative-people/social/social-people-1.png";
import socialPeople2 from "../../static/img/relative-people/social/social-people-2.png";
import socialPeople3 from "../../static/img/relative-people/social/social-people-3.png";
import nonePeople from "../../static/img/relative-people/none/none-people.png";
import { Slider } from "zmp-ui";
const PeopleList = () => {

    const [savedPeople, setSavedPeople] = useState(true);

    const showAddRelativePeoplePage = () => {
        store.dispatch('addRelativePeople')
        setSavedPeople(true)
    }

    const onClickRelativePeople = () => {
        store.dispatch('relativePeopleInfo')
    }

    const [relativePeoples, setRelativePeoples] = useState([
      {
          type: 'Gia đình',
          peoples: [
            {
                name: 'Emily',
                relationship: 'Em gái',
                img: familyPeople1,
                
            },
            {
                name: 'Anh Đào',
                relationship: 'Mẹ',
                img: familyPeople2,
                
            },
            {
                name: 'Ben',
                relationship: 'Cha',
                img: familyPeople3,
                
            },
            {
                name: 'Mẫn Nghi',
                relationship: 'Cháu gái',
                img: familyPeople4,
               
            },
            {
                name: 'Ayden',
                relationship: 'Cháu trai',
                img: familyPeople5,
                
            },
          ],
      },
      {
          type: 'Xã hội',
          peoples: [
            {
                name: 'David',
                relationship: 'Sếp',
                img: socialPeople1,
               
            },
            {
                name: 'Kathy',
                relationship: 'Bạn bè',
                img: socialPeople2,
                
            },
            
          ],
      },
      
      
    ])

    

    const countPeople = () => {
        let numberOfPeoples = 0;
        for(let i = 0; i < relativePeoples.length; i++) {
            numberOfPeoples += relativePeoples[i].peoples.length;
        }
        return numberOfPeoples
    }

    

    return (
      <div className="people-list-page">
          {savedPeople === false ? 
              <div className="people-list-page-unsaved">
                  <div className='people-list-unsaved-body'>
                      <Text className="people-list-txt title-txt">Bạn chưa có danh sách người thân</Text>
                      <Text className="people-list-txt add-day-txt">Thêm người thân tại đây</Text>
                      <Button className="add-day-btn" onClick={showAddRelativePeoplePage}>
                          <Icon className="add-day-icon" zmp="zi-plus"></Icon>
                      </Button>
                  </div>
              </div>
              : <div className="people-list-page-saved">
                  <div className="people-list-saved-title" width='100'>
                      <Text className='people-list-saved-title-txt'>Bạn đã lưu <span style={{fontWeight: 'bold', fontSize: 14}}>{countPeople()} người thân</span></Text>
                      <img src={addIcon} className='people-list-saved-title-img' onClick={showAddRelativePeoplePage}/>
                  </div>
                  <div className='people-list-page-saved-body'>
                      {relativePeoples.map((relativePeople, index) => {
                          return (
                              <div className='classify' key={index}>
                                  <div className='classify-title'>{relativePeople.type} ({relativePeople.peoples.length})</div>
                                  <div className='relative-people-list'>
                                      {relativePeople.peoples.map((people, index) => {
                                          return (
                                              <div className='relative-people-item' key={index} onClick={onClickRelativePeople}>
                                                  <img src={people.img} className='relative-people-img'/>
                                                  <div className='relative-people-name'>{people.name}</div>
                                                  <div className='relative-people-relationship'>{people.relationship}</div>
                                              </div>
                                          )
                                      })}
                                  </div>
                              </div>
                          )
                      })}
                  </div>
              </div>
          }
      </div>
    )
};

export default PeopleList;