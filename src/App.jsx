import React, { Suspense, useState } from "react";
import "./App.css";
import { Layout } from "antd";

import { Footer } from "antd/es/layout/layout";

import ReactThis from "./components/pages/ReactThis";
// import withAdditionalFunctions from "./helpers/navigateHOC";
import HomePage from "./components/pages/HomePage";
import InTheBegining from "./components/pages/InTheBegining";
import ConstrProject from "./components/pages/ConstrProject";
import MainHeader from "./components/MainHeader";
import MyContext from "./components/MyContext";
import SocialMediaIcons from "./components/social_media/SocialMediaIcons";
import LeftMenu from "./components/content/LeftMenu";
import PagesContent from "./components/content/PagesContent";

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
