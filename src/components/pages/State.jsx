import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/navigateHOC";

const InTheBegining = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>State</h2>

      <NavigateHelpers navigate={navigate} params="/" txt="На главную" />
      <NavigateHelpers
        navigate={navigate}
        params="/constr_ptoject"
        txt="Структура проекта"
      />
    </>
  );
};

export default InTheBegining;
