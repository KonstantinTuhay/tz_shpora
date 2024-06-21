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
      <h2>StrictMode</h2>

      <p>
        {`<StrictMode>`} позволяет находить распространённые ошибки в
        компонентах на ранних этапах разработки. Он добавляет дополнительные
        проверки и предупреждения как для компонентов, так и для методов
        жизненного цикла, что позволяет более надежно разрабатывать и
        поддерживать кодовую базу.
      </p>

      <h3>Основные преимущества React.StrictMode</h3>

      <ul>
        <li>
          Выявление небезопасных методов жизненного цикла: Уведомляет о методах,
          которые могут вызвать проблемы в будущем.
        </li>
        <li>
          Предупреждения об использовании устаревших API: Помогает обнаружить и
          устранить использование устаревших и небезопасных API.
        </li>
        <li>
          Обнаружение побочных эффектов: Помогает находить и устранять ошибки,
          связанные с побочными эффектами в методах жизненного цикла.
        </li>
        <li>
          Улучшение производительности: Помогает оптимизировать приложение,
          выявляя потенциальные проблемы с производительностью.
        </li>
      </ul>

      <p>
        Использование React.StrictMode в приложении достаточно простое. Его
        можно обернуть вокруг всего приложения или вокруг отдельных компонентов.
      </p>

      <pre id="code">
        <code>
          {`
          // MyComponent.js
          import React, { useState, useEffect } from 'react';

          const MyComponent = () => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              console.log('Component mounted or updated');
              return () => {
                console.log('Component will unmount');
              };
            }, [count]);

            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
              </div>
            );
          };

          export default MyComponent;
          `}
        </code>
      </pre>

      <p>Теперь обернем этот компонент в React.StrictMode:</p>

      <pre id="code">
        <code>
          {`
          // App.js
          import React from 'react';
          import MyComponent from './MyComponent';

          const App = () => {
            return (
              <React.StrictMode>
                <div>
                  <h1>Strict Mode Example</h1>
                  <MyComponent />
                </div>
              </React.StrictMode>
            );
          };

          export default App;
          `}
        </code>
      </pre>

      <h3>Какие проблемы выявляет React.StrictMode?</h3>

      <ol>
        <li>
          Небезопасные методы жизненного цикла:
          <ul>
            <li>componentWillMount</li>
            <li>componentWillReceiveProps</li>
            <li>componentWillUpdate</li>
          </ul>
          <p>
            Эти методы считаются устаревшими и небезопасными, так как могут
            привести к ошибкам при асинхронных обновлениях.
          </p>
        </li>

        <li>
          Побочные эффекты:
          <ul>
            <li>
              В React.StrictMode компоненты могут монтироваться и
              размонтироваться дважды при разработке, что помогает выявить
              побочные эффекты и ошибки.
            </li>
          </ul>
        </li>

        <li>
          Проверка на устаревшие строки контекста:
          <ul>
            <li>
              React.StrictMode предупреждает, если используется устаревший
              контекст API.
            </li>
          </ul>
        </li>
        <li>
          Проверка на неправильное использование findDOMNode:
          <ul>
            <li>
              Метод findDOMNode устарел, и его использование может привести к
              проблемам.
            </li>
          </ul>
        </li>
      </ol>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
