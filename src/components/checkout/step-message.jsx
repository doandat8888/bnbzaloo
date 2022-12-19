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
  Checkbox,
  Title,
  useStore,
  Icon,
  Button,
  ListInput,
} from "zmp-framework/react";
import store from "../../store";

const StepMessage = (props) =>  {

  const _update = useStore("updateTime");

  useEffect(() => {

  });

  return (
    <>

        <Box className="checkout input-message">
            <div className="step-title">
              <div className="progress" style={{ width: 40, height: 40 }}>
                <CircularProgressbar strokeWidth={12} value={75} text={"3/4"} />
              </div>
              <Text className="n">Thiệp / Banner</Text>
            </div>

            <div className="cover">
              <Card key className="form">

                <List form noHairlines className="form">

                  <ListInput
                    label='Lời chúc / Banner'
                    type="textarea"
                    maxRows={3}
                    placeholder="Nhập vào nội dung lời chúc"
                    clearButton
                    info="Nhập lời chúc hoặc nội dung banner"
                    name="message"
                    errorMessage=""
                    validate
                  >
                  </ListInput>



                  <ListInput
                    label='Thông tin liên hệ khác'

                    type="textarea"
                    maxRows={2}
                    placeholder="Nếu bạn đang ở nước ngoài, xin nhập thông tin liên hệ khẩn cấp về đơn hàng"
                    clearButton
                    info="Liên hệ khẩn cấp về đơn hàng"
                    name="other_contact"

                  >
                  </ListInput>

                  <ListInput
                    label='Ghi chú quan trọng khác'
                    type="textarea"
                    maxRows={2}
                    placeholder="Như là số cây nên sinh nhật, hoặc vị trí giao hàng"
                    clearButton
                    info="Các ghi chú này sẽ giúp chỉnh chu hơn về đơn hàng"
                    name="other_note"

                  >
                  </ListInput>

                  <li>
                    <div className="item-input ">
                      <Checkbox label="Giấu tên người đặt (người tặng)" name="hide_sender" />

                      <Box className="tips small">
                        Chúng tôi sẽ cố gắng hết sức để không tiết lộ thông tin của quý khách. Trong trường hợp người nhận kiên quyết muốn biết tên người tặng mới đồng ý nhận hàng thì chúng tôi buộc lòng phải tiết lộ tên của quý khách để có thể giao hàng thành công. Nếu quý khách có yêu cầu đặt biệt hơn, xin nhập ở phần ghi chú đơn hàng.
                      </Box>

                    </div>

                  </li>

                  <li>
                    <div className="item-input ">
                      <Checkbox label="Xin đừng gọi cho người nhận, hãy tạo ra một sự bất ngờ." name="need_supprise" />
                      <Box className="tips small">
                        Trường hợp giao đến địa chỉ nhưng không liên hệ được với người nhận, chúng tôi xin được gửi hoa lại tại văn phòng, cho người quen hoặc bạn bè đồng nghiệp. Nếu không ai nhận giúp, buộc lòng chúng tôi phải mang hoa về lại cửa hàng, và sẽ thông tin lại để người nhận có thể đến cửa hàng để nhận. Chúng tôi cũng sẽ thông tin cho  quý khách về tình trạng này. Nếu quý khách cần hỗ trợ giao lại, chúng tôi xin thu phí giao cho lần giao mới.
                      </Box>
                    </div>

                  </li>

                </List>
              </Card>

              <Card className="step-action">
                <Button large responsive className="btn btn-primary">Tiếp theo</Button>
              </Card>
              </div>
        </Box>

    </>
  );
};

StepMessage.displayName = "bnb-checkout-step-message";

export default StepMessage;
