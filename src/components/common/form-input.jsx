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
  Title,
  useStore,
  Icon,
  Button,
  ListInput,
} from "zmp-framework/react";
import store from "../../store";


<Row className="form-group">
                  <Col width='40' className="col-lbl">
                    <label className="form-label">Ngày giao</label>
                  </Col>
                  <Col width='60'>
                  <Input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    clearButton

                    info="Chọn ngày giao dd/mm/yyyy"
                    name="date"
                    required
                    errorMessage="Ngày giao không hợp lệ"
                    validate
                  >
                  </Input>
                  </Col>
                </Row>