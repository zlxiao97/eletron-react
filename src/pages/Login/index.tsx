import React, { useState } from 'react';
import { Tabs, Form, Input, Button, Checkbox } from 'antd';
import logo from '../../../assets/logo.png';
import './index.global.css';

const { TabPane } = Tabs;

const Login = () => {
  const [form] = Form.useForm();
  const onFinish = (params: any) => {
    console.log(params);
  };
  return (
    <div className="login-page-container">
      <section className="header" />
      <div className="content">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-icon" />
        </div>
        <h1>风机管家 客户端</h1>
      </div>
      <div className="form">
        <div className="form-content">
          <Tabs defaultActiveKey="1">
            <TabPane tab="账户密码登录" key="1">
              <Form layout="vertical" form={form} onFinish={onFinish}>
                <Form.Item label="账户" name="username">
                  <Input placeholder="请输入账户" size="large" />
                </Form.Item>
                <Form.Item label="密码" name="password">
                  <Input.Password placeholder="请输入密码" size="large" />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>自动登录</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="导入授权文件" key="2" />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
