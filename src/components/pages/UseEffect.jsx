import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/navigateHOC";

const ConstrProject = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useEffect</h1>

      <NavigateHelpers navigate={navigate} params={"/"} txt="На главную" />
    </>
  );
};

export default ConstrProject;
