import React, { useContext } from "react";
import MyContext from "../MyContext";

const DarkLightMode = ({ Switch }) => {
  const [theme, setTheme] = useContext(MyContext);
  return (
    <>
      <Switch
        checked={theme === "dark"}
        onChange={(value) => {
          setTheme(value ? "dark" : "light");
        }}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </>
  );
};

export default DarkLightMode;
