import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { MinusOutlined } from "@ant-design/icons";

const LeftMenu = ({ theme }) => {
  return (
    <>
      <Menu
        theme={theme}
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
    </>
  );
};

export default LeftMenu;
