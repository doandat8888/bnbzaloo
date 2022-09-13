import { object } from "prop-types";
import React, { useEffect } from "react";
import { loadDataArrayFromCache } from '../../services/storage';
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
} from "zmp-framework/react";
import store from "../../store";

var shopGroups = {};
var shopKeys = [];
const FullOrderInput = (props) =>  {
  const carts = useStore("cart");
  // const carts = await loadDataArrayFromCache("cart");

  const _update = useStore("updateTime");

  useEffect(() => {
    if (!shopGroups && carts != null && carts.length > 0) {
      shopGroups = {};

      carts.forEach((item, idx) => {
        if (!shopGroups[item.product.shop_id]) {
          shopGroups[item.product.shop_id] = [];

          shopKeys.push(item.product.shop_id);
        }

        shopGroups[item.product.shop_id].push(item);
        store.dispatch("setUpdate", Math.random());
      });
    }
  }, [shopGroups, shopKeys]);

  return (
    <div className="order-info">

      <section>
        <div className="head">
          <Title>Người đặt hàng</Title>
        </div>

        <table className="table table-stripped">
          <tr>
            <td className="lbl">Người đặt hàng</td>
            <td>Ngô Anh Tuấn</td>
          </tr>
          <tr>
            <td className="lbl">Số điện thoại</td>
            <td>(+84)0989963908</td>
          </tr>
          <tr>
            <td className="lbl">Email</td>
            <td>anhtuanbd@gmail.com</td>
          </tr>
        </table>
      </section>

      <section>
        <div className="head">
          <Title>Thông tin giao hàng</Title>
        </div>
        <table className="table table-stripped">
          <tr>
            <td className="lbl">Người nhận</td>
            <td>Ngô Anh Tuấn</td>
          </tr>
          <tr>
            <td className="lbl">Số điện thoại</td>
            <td>(+84)0989963908</td>
          </tr>
          <tr>
            <td className="lbl">Địa chỉ giao hàng</td>
            <td> 22 A Nguyên Trãi, Phường 15, Quận Bình Thạnh, TP HCM
            </td>
          </tr>
          <tr>
            <td className="lbl">Liên hệ khác</td>
            <td>Zalo (+84)0989963908</td>
          </tr>
          <tr>
            <td className="lbl">Ngày giao</td>
            <td>10/10/2022, 09:00</td>
          </tr>
          <tr>
            <td className="lbl">Giờ giao</td>
            <td>09:00-12:00</td>
          </tr>
        </table>
      </section>

      <section>
        <div className="head">
          <Title>Thông tin đơn hàng</Title>
        </div>
        <table className="table table-stripped">
          <tr>
            <td className="lbl">Thiệp / Banner</td>
            <td><div className="msg">Chúc mừng sinh nhật cục cưng</div></td>
          </tr>
          <tr>
            <td className="lbl">Giấu tên người gửi</td>
            <td><div className="maincolor fb">Có. Xin giấu tên.</div></td>
          </tr>
          <tr>
            <td className="lbl">Gọi trước cho người nhận</td>
            <td><div className="maincolor fb">Có. Xin gọi trước để xác định thời gian, địa chỉ chính xác.</div></td>
          </tr>

          <tr>
            <td className="lbl">Ghi chú quan trọng về đơn hàng</td>
            <td>(không có)</td>
          </tr>

        </table>
      </section>

      <section>
        <table className="table table-stripped no-border">
          <tr>
            <td colSpan={3}><div className="fb pd10">Flower Corner HCM</div></td>
          </tr>

          <tr>
            <td className="text-center">
              <img style={{width: 50}} className="img-thumbnail" src="https://static.belovedbeyond.com/photos/view/photos/400x0/631ec1e9e141b163ab06de61.belove-beyond-personal-gift-platform.webp" />
            </td>
            <td>
              <Text className="fb">Bền lâu</Text>
              <Text>Size 1: <b>500.000đ</b></Text>
            </td>
            <td className="text-right">x1</td>
          </tr>

          <tr>
            <td colSpan={3} className="text-right">
              <div>
                <span className="lbl mr10">Tổng tiền hàng</span>
                <span className="fb">500.000đ</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-right">
              <div>
                <span className="lbl mr10">Phí giao hàng</span>
                <span className="fb">500.000đ</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-right">
              <div>
                <span className="lbl mr10">Giao lên lầu</span>
                <span className="fb">Không</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-right">
              <div>
                <span className="lbl mr10">Tổng cộng</span>
                <span className="fb maincolor">500.000đ</span>
              </div>
            </td>
          </tr>

        </table>
      </section>

      <section className="opt">
        <div className="head">
          <Icon zmp="zi-chevron-right" className="fr"></Icon>
          <Icon zmp="zi-file"  className="inblock"></Icon>



          <Title>Hóa đơn VAT (8%)</Title>
        </div>
        <div className="body">
          Gửi thông tin sau.
        </div>
      </section>

      <section className="opt">
        <div className="head">
          <Icon zmp="zi-chevron-right" className="fr"></Icon>
          <span className="material-icons icon">card_giftcard</span>

          <Title>Mã giảm giá</Title>
        </div>
        <div className="body">
          Không sử dụng
        </div>
      </section>

      <section className="opt">
        <div className="head">
          <Icon zmp="zi-chevron-right" className="fr"></Icon>
          <span className="material-icons icon">account_balance</span>

          <Title>Phương thức thanh toán</Title>
        </div>
        <div className="body">
          Chưa chọn
        </div>
      </section>

      <section>
        <div className="head">
          <span className="material-icons icon">monetization_on</span>
          <Title>Chi tiết thanh toán</Title>
        </div>
        <table className="table table-stripped summary">
          <tr>
            <td className="lbl">Tổng cộng</td>
            <td><div className="">1.000.000đ</div></td>
          </tr>
          <tr>
            <td className="lbl">Phí xử lý ưu tiên</td>
            <td><div className="maincolor fb">0</div></td>
          </tr>
          <tr>
            <td className="lbl">Mã giảm giá</td>
            <td><div className="maincolor fb">0</div></td>
          </tr>

          <tr>
            <td className="lbl">Tổng tiền sau giảm giá</td>
            <td>0</td>
          </tr>
          <tr>
            <td className="lbl">VAT (8%)</td>
            <td>0</td>
          </tr>
          <tr>
            <td className="lbl">Tổng tiền thanh toán</td>
            <td><div className="maincolor fb">1.000.000đ</div></td>
          </tr>

        </table>
      </section>

    </div>
  );
};

FullOrderInput.displayName = "bnb-checkout-full-order-input";

export default FullOrderInput;
