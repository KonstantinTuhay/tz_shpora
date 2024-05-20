import React from "react";
import { Button } from "antd";

const NavigateHelpers = ({ callback, txt = "Следующая", path }) => {
  return <Button onClick={() => callback(path)}>{txt}</Button>;
};

export default NavigateHelpers;
