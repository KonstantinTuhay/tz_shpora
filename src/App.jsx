import React, { Suspense, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Button, Layout, Menu, Switch, FloatButton, Modal } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  YoutubeOutlined,
  MinusOutlined,
  InstagramOutlined,
  XOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import ReactThis from "./components/ReactThis";
import withAdditionalFunctions from "./helpers/navigateHOC";
import HomePage from "./components/HomePage";
import InTheBegining from "./components/InTheBegining";
import ConstrProject from "./components/ConstrProject";
import RegistrationForm from "./components/RegistrationForm";
import AuthorizationForm from "./components/AuthorizationForm";
import { Footer } from "antd/es/layout/layout";

export default function App() {
  const routes = [
    { route: "/", component: HomePage },
    {
      route: "/reactthis",
      component: ReactThis,
    },
    { route: "/inthebegining", component: InTheBegining },
    { route: "/constr_ptoject", component: ConstrProject },
  ];

  const [theme, setTheme] = useState("dark");

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

  function SuspLoad() {
    return <h2>🌀 Loading...</h2>;

    // {
    //   /* Не работает Suspense */
    // }

    // return (
    //   <>
    //     <p>sdsadsadas</p>
    //     <img
    //       src="..\public\image\react-logo-7B3CE81517-seeklogo.com.png"
    //       alt="imgReact"
    //     />
    //   </>
    // );
  }

  const [reactSpin, setReactSpin] = useState(false);

  function SpinReact() {
    return (
      <>
        <Suspense fallback={<h2>🌀 Loading...</h2>}>
          <div className="wrapper">
            <Layout>
              <Header
                className="h_f"
                id={theme}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: 0,
                  textAlign: "center",
                  color: "white",
                }}
              >
                <div>
                  <a
                    href="https://www.youtube.com/"
                    style={{
                      margin: 10,
                    }}
                  >
                    <YoutubeOutlined />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    style={{
                      margin: 10,
                    }}
                  >
                    <InstagramOutlined />
                  </a>
                  <a
                    href="https://twitter.com/i/flow/signup"
                    style={{
                      margin: 10,
                    }}
                  >
                    <XOutlined />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    style={{
                      margin: 10,
                    }}
                  >
                    <FacebookOutlined />
                  </a>
                </div>

                <h1>
                  <b>Всё самое важное, чтобы начать писать на React</b>
                </h1>

                {/* Вход в личный кабинет и регистрация*/}
                <div>
                  <Switch
                    checked={theme === "dark"}
                    onChange={(value) => {
                      setTheme(value ? "dark" : "light");
                    }}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                  />

                  <Button
                    id="form_btn"
                    type="primary"
                    danger
                    onClick={showModal}
                    style={{
                      margin: 10,
                    }}
                  >
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
            <Layout className="between" id={theme}>
              <Sider
                // className="sider"
                // id={theme}
                trigger={null}
                collapsible
                collapsed={collapsed}
              >
                <div className="demo-logo-vertical" />
                <Menu
                  theme="dark"
                  // className="menu"
                  // id={theme}
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
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
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
                id={theme}
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  // background: colorBgContainer,
                  // borderRadius: borderRadiusLG,
                }}
              >
                <Routes>
                  {routes.map((item, index, array) => {
                    const NewComponent = withAdditionalFunctions(
                      item.component
                    );
                    return (
                      <Route
                        key={item.route}
                        path={item.route}
                        element={
                          <NewComponent nextRoute={array[index + 1]?.route} />
                        }
                      />
                    );
                  })}

                  {/* <Route path="/" element={<HomePage />}></Route>
          <Route path="/reactthis" element={<ReactThis />}></Route>
          <Route path="/inthebegining" element={<InTheBegining />}></Route>
          <Route path="/constr_ptoject" element={<ConstrProject />}></Route> */}
                </Routes>
                <FloatButton.BackTop />
              </Content>

              <Sider></Sider>
            </Layout>

            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\footer\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <Layout>
              <Footer
                className="h_f"
                id={theme}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  textAlign: "center",
                }}
              >
                <div>
                  <p>Хотите видеть больше? Подписывайтесь!</p>
                  <a
                    href="https://www.youtube.com/"
                    style={{
                      margin: 10,
                    }}
                  >
                    <YoutubeOutlined />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    style={{
                      margin: 10,
                    }}
                  >
                    <InstagramOutlined />
                  </a>
                  <a
                    href="https://twitter.com/i/flow/signup"
                    style={{
                      margin: 10,
                    }}
                  >
                    <XOutlined />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    style={{
                      margin: 10,
                    }}
                  >
                    <FacebookOutlined />
                  </a>
                </div>
              </Footer>
            </Layout>
          </div>
        </Suspense>
        {/* Не работает Suspense */}
      </>
    );
  }

  if (reactSpin) {
    return <SpinReact />;
  } else {
    return (
      <div id="btnWrapper">
        <button id="btnStart" onClick={() => setReactSpin(true)}>
          Изучить React
        </button>
      </div>
    );
  }
}
