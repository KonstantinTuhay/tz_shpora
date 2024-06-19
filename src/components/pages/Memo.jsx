import React from "react";
// import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/NavigateHelpers";
import video1 from "./videos/memo_plus_lifecycle.mp4";

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
      <h2>Memo</h2>

      <p>
        React.memo - позволяет пропустить повторный рендеринг компонента, если
        его свойства не изменился. Это может быть неэффективно для компонентов,
        которые не зависят от изменений внешних данных и всегда отображают
        одинаковый результат.
      </p>

      <p>
        По умолчанию, при каждом изменении состояния или пропсов компонент
        перерисовывается, даже если результирующий визуальный вывод не
        изменился.{" "}
      </p>

      <p>
        React.memo использует механизм мемоизации, чтобы запоминать предыдущий
        результат рендеринга компоненты и сравнивать его с текущими пропсами.
        React.memo предотвращает повторный рендеринг компонента, возвращая
        сохранённый результат.
      </p>

      <p>
        Первым параметром примаются любые компоненты React, включая функции и
        компоненты Ref
      </p>

      <pre id="code">
        <code>
          {`
          import React from "react";

          const App = React.memo((props) => {
            //Компонент будет перерисовываться только
            // при изменении пропсов
            return <div>{props.text}</div>;
          });

          export default App;
          `}
        </code>
      </pre>

      <p>
        React.memo также принимает второй необязательный аргумент в виде функции
        сравнения (compareFunction), которая позволяет контролировать, какие
        пропсы должны считаться "равными". Если функция сравнения не указана,
        React.memo будет использовать поверхностное сравнение для сравнения
        пропсов.
      </p>

      <p>
        Второй параметр должен возвращать true, если старые и новые компоненты
        равны. В противном случае false. Обычно не указывают эту функцию. По
        умолчанию React сравнивает каждый компонент через Object.is
      </p>

      <p>
        memo возвращает новый компонент React. За исключением того случая, когда
        его свойства не изменились
      </p>

      <pre id="code">
        <code>
          {`
          import React from "react";

          const Mems = React.memo(
            ({ count }) => {
              console.log("--Memo--");
              return (
                <>
                  <p>{count}</p>
                </>
              );
            },
            (prevProps, nextProps) => {
              console.log("nextprops", nextProps);
              return nextProps.count % 2 === 0 ? true : false;
            }
          );

          export default Mems;
          `}
        </code>
      </pre>

      <p>А лучше всего посмотри видео:</p>

      <video width="100%" controls src={video1} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
