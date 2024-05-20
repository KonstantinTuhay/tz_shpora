import React from "react";
import { useNavigate } from "react-router-dom";

const withAdditionalFunctions = (WrappedComponent) => {
  return (props) => {
    console.log("props", props);

    const navigate = useNavigate();
    const goToPage = (route) => {
      navigate(route ? route : props.nextRoute);
    };

    return <WrappedComponent {...props} goToPage={goToPage} />;
  };
};

export default withAdditionalFunctions;
