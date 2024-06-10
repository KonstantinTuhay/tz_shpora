import React, { Suspense, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { Button, Layout, Menu, FloatButton } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Footer } from "antd/es/layout/layout";

import ReactThis from "./components/pages/ReactThis";
import withAdditionalFunctions from "./helpers/navigateHOC";
import HomePage from "./components/pages/HomePage";
import InTheBegining from "./components/pages/InTheBegining";
import ConstrProject from "./components/pages/ConstrProject";
import MainHeader from "./components/MainHeader";
import MyContext from "./components/MyContext";
import SocialMediaIcons from "./components/social_media/SocialMediaIcons";

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

  const { Header, Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  function SuspLoad() {
    return <h2>🌀 Loading...</h2>;
  }

  // const [reactSpin, setReactSpin] = useState(false);
  // function Loading() {
  //   return <h2>🌀 Loading...</h2>;
  // }

  // function SpinReact() {
  return (
    <>
      {/* <Suspense fallback={<Loading />}> */}
      <div className="wrapper">
        <Layout>
          <MyContext.Provider value={[theme, setTheme]}>
            <Header
              className="main_header"
              id={theme}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                padding: 0,
                textAlign: "center",
              }}
              // Почему когда прописываю эти же стили в css, оно не срабатывает?
            >
              <MainHeader />
            </Header>
          </MyContext.Provider>
        </Layout>
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\menu\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <Layout className="between" id={theme}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            {/* <LeftMenu /> */}
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
            id={theme}
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              {routes.map((item, index, array) => {
                const NewComponent = withAdditionalFunctions(item.component);
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
          <div className="main_footer">
            <Footer
              id={theme}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                textAlign: "center",
                // Почему когда прописываю эти же стили в css, оно не срабатывает?
              }}
            >
              {/* <FullFooter /> */}
              <div>
                <p>Хотите видеть больше? Подписывайтесь!</p>

                <SocialMediaIcons />
              </div>
            </Footer>
          </div>
        </Layout>
      </div>
      {/* </Suspense> */}
    </>
  );
}

//   if (reactSpin) {
//     return <SpinReact />;
//   } else {
//     return (
//       <div id="btnWrapper">
//         <button id="btnStart" onClick={() => setReactSpin(true)}>
//           Изучить React
//         </button>
//       </div>
//     );
//   }
// }
