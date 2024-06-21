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
                Components
              </NavLink>
            ),
          },
          {
            key: "2",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/props" activeClassName="active">
                Props
              </NavLink>
            ),
          },
          {
            key: "3",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/state" activeClassName="active">
                useState
              </NavLink>
            ),
          },
          {
            key: "4",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/useEffect" activeClassName="active">
                useEffect
              </NavLink>
            ),
          },
          {
            key: "5",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/events" activeClassName="active">
                Events
              </NavLink>
            ),
          },
          {
            key: "6",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/refs" activeClassName="active">
                Refs
              </NavLink>
            ),
          },
          {
            key: "7",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/fragment" activeClassName="active">
                Fragment
              </NavLink>
            ),
          },
          {
            key: "8",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/key" activeClassName="active">
                key
              </NavLink>
            ),
          },
          {
            key: "9",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/memo" activeClassName="active">
                memo
              </NavLink>
            ),
          },
          {
            key: "10",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/useMemo" activeClassName="active">
                useMemo
              </NavLink>
            ),
          },
          {
            key: "11",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/useContext" activeClassName="active">
                useContext
              </NavLink>
            ),
          },
          {
            key: "12",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/forms" activeClassName="active">
                Forms
              </NavLink>
            ),
          },
          {
            key: "13",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/routing" activeClassName="active">
                Routing
              </NavLink>
            ),
          },
          {
            key: "14",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/storages" activeClassName="active">
                Storages
              </NavLink>
            ),
          },
          {
            key: "15",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/hoc" activeClassName="active">
                Hoc
              </NavLink>
            ),
          },
          {
            key: "16",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/useCallback" activeClassName="active">
                useCallback
              </NavLink>
            ),
          },
          {
            key: "17",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/lazy" activeClassName="active">
                lazy
              </NavLink>
            ),
          },
          {
            key: "18",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/suspens" activeClassName="active">
                Suspense
              </NavLink>
            ),
          },
          {
            key: "19",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/strictMode" activeClassName="active">
                StrictMode
              </NavLink>
            ),
          },
          {
            key: "20",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/profiler" activeClassName="active">
                Profiler
              </NavLink>
            ),
          },
          {
            key: "21",
            icon: <MinusOutlined />,
            label: (
              <NavLink to="/useId" activeClassName="active">
                useId
              </NavLink>
            ),
          },
        ]}
      />
    </>
  );
};

export default LeftMenu;
