import React from "react";
import { FloatButton } from "antd";
import { Routes, Route } from "react-router-dom";
import withAdditionalFunctions from "../../helpers/navigateHOC";

const PagesContent = ({ routes }) => {
  return (
    <>
      <Routes>
        {routes.map((item, index, array) => {
          const NewComponent = withAdditionalFunctions(item.component);
          return (
            <Route
              key={item.route}
              path={item.route}
              element={<NewComponent nextRoute={array[index + 1]?.route} />}
            />
          );
        })}

        {/* <Route path="/" element={<HomePage />}></Route>
              <Route path="/reactthis" element={<ReactThis />}></Route>
              <Route path="/inthebegining" element={<InTheBegining />}></Route>
              <Route path="/constr_ptoject" element={<ConstrProject />}></Route> */}
      </Routes>
      <FloatButton.BackTop />
    </>
  );
};

export default PagesContent;
