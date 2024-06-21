import React, { useState } from "react";
import Components from "./pages/Components";
import State from "./pages/State";
import UseEffect from "./pages/UseEffect";
import MainHeader from "./MainHeader";
import MyContext from "./MyContext";
import SocialMediaIcons from "./social_media/SocialMediaIcons";
import LeftMenu from "./content/LeftMenu";
import PagesContent from "./content/PagesContent";
import Props from "./pages/Props";
import Events from "./pages/Events";
import Refs from "./pages/Refs";
import Fragment from "./pages/Fragment";
import Key from "./pages/Key";
import Memo from "./pages/Memo";
import Forms from "./pages/Forms";
import Routing from "./pages/Routing";
import Hoc from "./pages/Hoc";
import UseCallback from "./pages/UseCallback";
import Lazy from "./pages/Lazy";
import Suspens from "./pages/Suspens";
import StrictMode from "./pages/StrictMode";
import Profiler from "./pages/Profiler";
import UseId from "./pages/UseId";
import UseMemo from "./pages/UseMemo";
import UseContext from "./pages/UseContext";
import Storages from "./pages/Storages";

import { Layout } from "antd";
import "../App.css";
import { Footer } from "antd/es/layout/layout";

const AllPage = () => {
  const routes = [
    { route: "/", component: Components },
    { route: "/props", component: Props },
    { route: "/state", component: State },
    { route: "/useEffect", component: UseEffect },
    { route: "/events", component: Events },
    { route: "/refs", component: Refs },
    { route: "/fragment", component: Fragment },
    { route: "/key", component: Key },
    { route: "/memo", component: Memo },
    { route: "/forms", component: Forms },
    { route: "/routing", component: Routing },
    { route: "/hoc", component: Hoc },
    { route: "/useCallback", component: UseCallback },
    { route: "/lazy", component: Lazy },
    { route: "/suspens", component: Suspens },
    { route: "/strictMode", component: StrictMode },
    { route: "/profiler", component: Profiler },
    { route: "/useId", component: UseId },
    { route: "/useMemo", component: UseMemo },
    { route: "/useContext", component: UseContext },
    { route: "/storages", component: Storages },
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
