import { Col, DatePicker, Form, Input, Radio, Row, Button, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
import style from "@/styles/registrationForm.module.css";
import { useState } from "react";
import { saveFormData } from "@/store/actions/formAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFinish =(values)=>{
    const {firstname,lastname,email,phonenumber,gender,DOB,photo} = values;
        const formData = {
          firstname,
          lastname,
          email,
          phonenumber,
          gender,
          DOB:DOB.format('YYYY-MM-DD'),
          photo,
        }
        dispatch(saveFormData(formData));
        router.push('/form-preview');
  }
  const disabledDate = (current) => {
    return current && current > dayjs().endOf("day");
  };
  return (
    <div className={style.formContainer}>
      <h1>Registration Form</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[{ required: true, message: "First Name is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[{ required: true, message: "Last Name is required" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Email is required" },{type:"email",message:"Please enter valid email"}]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item
              label="Phone Number"
              name="phonenumber"
              rules={[{ required: true, message: "Phone Number is required" }, { pattern: /^\d{10}$/, message: 'Phone number must be 10 digits!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required:true, message:"Gender is required" }]}
            >
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={24} sm={{ span: 12 }}>
            <Form.Item
              label="Date Of Birth"
              name="DOB"
              rules={[{ required: true, message: "Date of Birth is required" }]}
            >
              <DatePicker picker="day" disabledDate={disabledDate} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Profile Photo" name="photo" rules={[{required:true,message:"Please Upload Profile Photo"
        }]}>
        <Upload name="photo" listType="picture" action="http://localhost:3000/">
          <Button icon={<UploadOutlined />}>Upload Photo</Button>
        </Upload>
      </Form.Item>
        <Form.Item className={style.submitBtn}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
