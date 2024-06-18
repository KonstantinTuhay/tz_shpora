import React from "react";
// import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/NavigateHelpers";

const ReactThis = (props) => {
  // const navigate = useNavigate();

  // const general = () => {
  //   navigate("/");
  // };

  // const nextPage = () => {
  //   navigate("/inthebegining");
  // };

  return (
    <div>
      <h2>Fragment</h2>

      <p>
        С помощью фрагментов можно сгруппировать список дочерних элементов без
        добавления дополнительных узлов в DOM.
      </p>

      <p>
        Используем React.Fragment или выполняем импорт, чтобы использовать
        Fragment:
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
