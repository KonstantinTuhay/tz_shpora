import React from "react";
import { Button } from "antd";

const NavigateHelpers = ({ navigate, params, txt }) => {
  const callback = () => {
    navigate(params);
  };

  return <Button onClick={callback}>{txt}</Button>;
};

export default NavigateHelpers;
