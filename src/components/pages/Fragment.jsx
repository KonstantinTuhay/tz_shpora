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

      <pre id="code">
        <code>
          {`
          import React, { Fragment } from 'react';

          //Заменяем теги div на Fragment:
          const ChildComponent = () => <Fragment>
              <h1>Hello Child Component</h1>
              <h1>Hello Child Component</h1>
          </Fragment>
          `}
        </code>
      </pre>

      <p>
        Существуют сокращенная запись. Недостаток сокращённой записи: нельзя
        использовать атрибуты, например className или key:
      </p>

      <pre id="code">
        <code>
          {`
          import React from "react";

          const App = () => {
            return (
              <>
                <p>Something ...</p>
                <p>Something ...</p>
              </>
            );
          };

          export default App;
          `}
        </code>
      </pre>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
