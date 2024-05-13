import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Button, Spin, Layout, Menu, theme, FloatButton } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import ReactThis from "./ReactThis";
import HomePage from "./HomePage";
import InTheBegining from "./InTheBegining";
import ConstrProject from "./ConstrProject";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [spinning, setSpinning] = useState(false);
  const showLoader = () => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  const [darkMode, setDarkMode] = useState("light");

  return (
    <div className="wrapper" id={darkMode}>
      <Layout>
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
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <b>Всё самое важное чтобы начать писать на React</b>
            <button>Войти</button>
            <button>Зарегистрироваться</button>
          </Header>
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
              <Route
                path="/reactthis"
                element={<ReactThis showLoader={showLoader} />}
              ></Route>
              <Route path="/inthebegining" element={<InTheBegining />}></Route>
              <Route path="/constr_ptoject" element={<ConstrProject />}></Route>
            </Routes>
            <FloatButton.BackTop />
          </Content>
        </Layout>
      </Layout>
      {/* ////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////// */}

      <Button onClick={showLoader}>Show fullscreen for 3s</Button>
      <Spin spinning={spinning} fullscreen />

      <label>
        <input
          type="checkbox"
          checked={darkMode === "dark"}
          onChange={(e) => {
            setDarkMode(e.target.checked ? "dark" : "light");
          }}
        />
        Use {darkMode === "light" ? "dark" : "light"} mode
      </label>
    </div>
  );
}

export default App;
