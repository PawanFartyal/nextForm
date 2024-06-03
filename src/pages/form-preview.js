import { Col, Image, Row } from "antd";
import { useSelector } from "react-redux";
import style from "@/styles/preview.module.css";
export default function FormPreview() {
  const formData = useSelector((state) => state.formData);
  const imageUrl = formData.photo.file.thumbUrl;
  return (
    <div className={style.detailContainer}>
      <h2 style={{ padding: "1rem" }}>Details</h2>
      <div className={style.image}>
      <img src={imageUrl}  />
      </div>
      <Row>
        <Col span={12} className={style.col}>
          <h3>First Name</h3>
          <p>{formData.firstname}</p>
        </Col>
        <Col span={12} className={style.col}>
          <h3>Last Name</h3>
          <p>{formData.lastname}</p>
        </Col>
      </Row>
      <Row>
        <Col span={12} className={style.col}>
          <h3>Email Id</h3>
          <p>{formData.email}</p>
        </Col>
        <Col span={12} className={style.col}>
          <h3>Phone Number</h3>
          <p>{formData.phonenumber}</p>
        </Col>
      </Row>
      <Row>
        <Col span={12} className={style.col}>
          <h3>Gender</h3>
          <p>{formData.gender}</p>
        </Col>
        <Col span={12} className={style.col}>
          <h3>Date Of Birth</h3>
          <p>{formData.DOB}</p>
        </Col>
      </Row>
    </div>
  );
}
