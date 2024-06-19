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
      <h2>useMemo</h2>

      <p>
        useMemo - это React Hook, который позволяет кэшировать результат
        вычислений между повторными рендерингами.
      </p>

      <p>
        Первым параметром принимает функцию, вычисляющая значение, которое хотим
        кэшировать. Функция не должна принимать аргументов. Возвращает функция
        значения любого типа. React вызовет функцию во время первоначального
        рендеринга. При следующем рендеринг React вернёт снова то же значение,
        если зависимости не изменились с момента последнего рендеринга. Иначе -
        вызовет функцию вернёт результат его и сохранит его, чтобы можно было
        повторно использовать позже.{" "}
      </p>

      <p>
        Вторым параметром принимаются зависимости, список зависимостей должен
        быть записан в виде массива []. React сравнит каждую зависимость с
        предыдущим значением, используя Object.is
      </p>

      <p>При первом рендеринге возвращает результат функции</p>

      <p>
        При последующих ре-рендерх он либо вернёт уже сохранённое значение из
        последнего рендеринга или снова вызовет первый параметр.
      </p>

      <pre id="code">
        <code>
          {`
          import React, { useMemo } from "react";

          const App = ({ data }) => {
            const processData = useMemo(() => {
              //Вычисления (фильтрация, сортировка)...............
              return processData(data);
            }, [data]); //Зависимость - значение пропса "data"

            return <div>{processData}</div>;
          };

          export default App;
          `}
        </code>
      </pre>

      <p>
        В этом примере результат вычисления processData будет сохраняться и
        пересчитываться только при изменении значения пропса data. При
        последующих рендерах, если data не изменилось, будет использован
        сохранённый результат.
      </p>

      <pre id="code">
        <code>
          {`
          import React, { useMemo } from "react";

          const App = ({ propA, propB }) => {
            //Нейки сложны компонент

            return (
              // ...
              <></>
            );
          };

          const MyComponent = ({ data }) => {
            const cached = useMemo(() => {
              //Компонент будет кеширован при каждом изменении propA или propB

              return <App propA={propA} propB={propB} />;
            }, [propA, propB]);

            return <div>{cached}</div>;
          };
          `}
        </code>
      </pre>

      <p>
        В этом примере компонент App будет перерисовываться только при изменении
        пропсов propA или propB. При остальных рендерах будет использоваться
        кэшированный компонент, что помогает снизить нагрузку на рендеринг
        сложных компонентов.
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
