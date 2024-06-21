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
      <h2>Profiler</h2>

      <p>
        {`<Profiler>`} позволяет программно измерить производительность
        рендеринга дерева React.
      </p>

      <p>
        Чтобы замерить производительность, необходимо обернуть дерево
        компонентов в {`<Profiler>`}
      </p>

      <pre id="code">
        <code>
          {`
          <Profiler id="App" onRender={onRender}>
            <App />
          </Profiler>;
          `}
        </code>
      </pre>

      <h3>Как использовать React.Profiler?</h3>

      <ol>
        <li>Импорт React.Profiler</li>
        <p>
          Для использования React.Profiler необходимо импортировать его из
          библиотеки React:
        </p>
        <pre id="code">
          <code>
            {`
            import React, { Profiler } from 'react;
          `}
          </code>
        </pre>

        <li>Обертывание компонентов в Profiler</li>
        <p>
          Компонент Profiler принимает два обязательных пропса: id и onRender.{" "}
        </p>
        <p>
          Проп id используется для идентификации профилируемого компонента, а
          onRenderCallback — это функция обратного вызова, которая вызывается
          при каждом рендеринге профилируемого компонента или дерева
          компонентов.
        </p>
      </ol>

      <pre id="code">
        <code>
          {`
          const onRenderCallback = (
            id, // ID профилируемого дерева, для идентификации данного профайлера
            phase, // "mount" (при первом монтировании) или "update" (при повторных рендерах)
            actualDuration, // Время, затраченное на рендеринг профилируемого дерева
            baseDuration, // Время, которое заняло бы рендеринг всего дерева без кеширования
            startTime, // Время начала рендеринга
            commitTime, // Время завершения рендеринга
            interactions // Набор "взаимодействий" для рендеринга
          ) => {
            console.log({
              id,
              phase,
              actualDuration,
              baseDuration,
              startTime,
              commitTime,
              interactions,
            });
          };

          const App = () => {
            return (
              <Profiler id="App" onRenderCallback={onRenderCallback}>
                <div>
                  <h1>App with Profiler</h1>
                  <MyComponent />
                </div>
              </Profiler>
            );
          };

          export default App;
          `}
        </code>
      </pre>

      <h3>Пример использования React.Profiler</h3>

      <p>
        Рассмотрим пример компонента, который отправляет данные на сервер, и
        обернем его в Profiler:
      </p>

      <pre id="code">
        <code>
          {`
          // MyComponent.js
          import React, { useState, useEffect } from 'react';

          const MyComponent = () => {
            const [data, setData] = useState(null);

            useEffect(() => {
              const fetchData = async () => {
                try {
                  console.log('Fetching data...');
                  const response = await fetch('https://dog.ceo/api/breeds/image/random');
                  const result = await response.json();
                  setData(result.message);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
              fetchData();
            }, []);

            return (
              <div>
                <h2>Random Dog Image</h2>
                <p>{data ? <img src={data} alt="Random Dog" /> : 'Loading...'}</p>
              </div>
            );
          };

          export default MyComponent;
          `}
        </code>
      </pre>

      <p>
        Теперь оберни компонент MyComponent в Profiler и добавь его в
        приложение:
      </p>

      <pre id="code">
        <code>
          {`
          // App.js
          import React, { Profiler } from 'react';
          import MyComponent from './MyComponent';

          const onRenderCallback = (
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions
          ) => {
            console.log({
              id,
              phase,
              actualDuration,
              baseDuration,
              startTime,
              commitTime,
              interactions,
            });
          };

          const App = () => {
            return (
              <Profiler id="MyComponent" onRenderCallback={onRenderCallback}>
                <div>
                  <h1>App with Profiler</h1>
                  <MyComponent />
                </div>
              </Profiler>
            );
          };

          export default App;
          `}
        </code>
      </pre>

      <h3>Анализ данных профилирования</h3>

      <p>Функция onRenderCallback получает несколько параметров:</p>

      <ul>
        <li>id: Идентификатор профилируемого дерева.</li>
        <li>
          phase: Фаза рендеринга ("mount" при первом монтировании и "update" при
          повторных рендерах).
        </li>
        <li>
          actualDuration: Время, затраченное на рендеринг профилируемого дерева.
        </li>
        <li>
          baseDuration: Время, которое заняло бы рендеринг всего дерева без
          кеширования.
        </li>
        <li>startTime: Время начала рендеринга.</li>
        <li>commitTime: Время завершения рендеринга.</li>
        <li>interactions: Набор "взаимодействий" для рендеринга.</li>
      </ul>

      <p>
        Используя эти данные, мы можем выявить компоненты, которые рендерятся
        слишком часто или занимают слишком много времени на рендеринг, и принять
        меры для оптимизации.
      </p>

      <h3>Оптимизация на основе данных профилирования</h3>

      <p>
        После того как собрали данные профилирования, мы можемпредпринять
        несколько шагов для оптимизации:
      </p>

      <ol>
        <li>
          Мемоизация компонентов: Используй React.memo для предотвращения
          ненужных повторных рендеров функциональных компонентов.
        </li>
        <pre id="code">
          <code>
            {`
            import React, { memo } from 'react';

            const MyComponent = memo(() => {
              //  компонент
            });
          `}
          </code>
        </pre>

        <li>
          Использование хуков useMemo и useCallback: Мемоизируй вычисления и
          функции, которые зависят от пропсов и состояния.
        </li>
        <pre id="code">
          <code>
            {`
            import React, { useMemo, useCallback } from 'react';

            const MyComponent = ({ data }) => {
              const computedValue = useMemo(() => {
                // Долгая вычислительная функция
                return expensiveComputation(data);
              }, [data]);

              const handleClick = useCallback(() => {
                // Обработчик клика
              }, []);

              return <div onClick={handleClick}>{computedValue}</div>;
            };
          `}
          </code>
        </pre>

        <li>
          Разделение кода: Используй React.lazy и Suspense для ленивой загрузки
          компонентов, которые не нужны при начальной загрузке.
        </li>
        <pre id="code">
          <code>
            {`
            import React, { Suspense, lazy } from 'react';

            const LazyComponent = lazy(() => import('./LazyComponent'));

            const App = () => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </Suspense>
              );
            };
          `}
          </code>
        </pre>
      </ol>

      <h3>Итог:</h3>

      <p>
        React.Profiler — инструмент для измерения производительности компонентов
        приложения. Он помогает выявить узкие места и оптимизировать рендеринг,
        предоставляя информацию о времени рендеринга и количестве рендеров.
        Используя React.Profiler, вы можем сделать приложение более
        производительным и отзывчивым.
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
