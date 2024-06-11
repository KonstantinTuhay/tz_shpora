import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import InTheBegining from "./pages/InTheBegining";
import ConstrProject from "./pages/ConstrProject";
import MainHeader from "./MainHeader";
import MyContext from "./MyContext";
import SocialMediaIcons from "./social_media/SocialMediaIcons";
import LeftMenu from "./content/LeftMenu";
import PagesContent from "./content/PagesContent";
import ReactThis from "./pages/ReactThis";

import { Layout } from "antd";

import { Footer } from "antd/es/layout/layout";

const AllPage = () => {
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

  return (
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
        <Sider className="side_menu" id={theme}>
          <LeftMenu theme={theme} />
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
          <PagesContent routes={routes} />
        </Content>

        <Sider className="side_menu" id={theme}></Sider>
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
            <div>
              <p>Хотите видеть больше? Подписывайтесь!</p>

              <SocialMediaIcons />
            </div>
          </Footer>
        </div>
      </Layout>
    </div>
  );
};

export default AllPage;
