import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Button, Layout, Menu, theme, FloatButton, Modal } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  YoutubeOutlined,
  MinusOutlined,
  InstagramOutlined,
  XOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import ReactThis from "./ReactThis";
import HomePage from "./HomePage";
import InTheBegining from "./InTheBegining";
import ConstrProject from "./ConstrProject";
import RegistrationForm from "./RegistrationForm";
import AuthorizationForm from "./AuthorizationForm";
import { Footer } from "antd/es/layout/layout";

function App() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen1(true);
  };
  const showModal2 = () => {
    setOpen2(true);
  };
  const handleOk1 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen1(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleOk2 = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen2(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel1 = () => {
    console.log("Clicked cancel button");
    setOpen1(false);
  };
  const handleCancel2 = () => {
    console.log("Clicked cancel button");
    setOpen2(false);
  };

  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const [spinning, setSpinning] = useState(false);
  // const showLoader = () => {
  //   setSpinning(true);
  //   setTimeout(() => {
  //     setSpinning(false);
  //   }, 3000);
  // };

  return (
    <div className="wrapper">
      <Layout>
        <Header
          id="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: 0,
            background: colorBgContainer,
            textAlign: "center",
            backgroundColor: "#0b89ff",
            color: "white",
          }}
        >
          <div>
            <YoutubeOutlined />
            <InstagramOutlined />
            <XOutlined />
            <FacebookOutlined />
          </div>

          <b>Всё самое важное чтобы начать писать на React</b>

          {/* Вход в личный кабинет и регистрация*/}
          <div>
            <Button type="primary" danger onClick={showModal}>
              Войти
            </Button>
            <Modal
              title="Войти"
              open={open1}
              onOk={handleOk1}
              confirmLoading={confirmLoading}
              onCancel={handleCancel1}
            >
              <p>
                <AuthorizationForm />
              </p>
            </Modal>

            <Button type="primary" onClick={showModal2}>
              Зарегистрироваться
            </Button>
            <Modal
              title="Регистрация"
              open={open2}
              onOk={handleOk2}
              confirmLoading={confirmLoading}
              onCancel={handleCancel2}
            >
              <p>
                <RegistrationForm />
              </p>
            </Modal>
          </div>
        </Header>
      </Layout>
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\menu\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <Layout id="general_layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <MinusOutlined />,
                label: (
                  <NavLink to="/" activeClassName="active">
                    Быстрый старт
                  </NavLink>
                ),
              },
              {
                key: "2",
                icon: <MinusOutlined />,
                label: (
                  <NavLink to="/reactthis" activeClassName="active">
                    React - это...
                  </NavLink>
                ),
              },
              {
                key: "3",
                icon: <MinusOutlined />,
                label: (
                  <NavLink to="/inthebegining" activeClassName="active">
                    С чего начать?
                  </NavLink>
                ),
              },
              {
                key: "4",
                icon: <MinusOutlined />,
                label: (
                  <NavLink to="/constr_ptoject" activeClassName="active">
                    Структура проекта
                  </NavLink>
                ),
              },
            ]}
          />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Sider>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\content\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/reactthis" element={<ReactThis />}></Route>
            <Route path="/inthebegining" element={<InTheBegining />}></Route>
            <Route path="/constr_ptoject" element={<ConstrProject />}></Route>
          </Routes>
          <FloatButton.BackTop />
        </Content>
      </Layout>

      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\footer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
      <Layout>
        <Footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            textAlign: "center",
          }}
        >
          <div>Хотите видеть больше? Подписывайтесь!</div>
          <div>
            <YoutubeOutlined />
            <InstagramOutlined />
            <XOutlined />
            <FacebookOutlined />
          </div>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
