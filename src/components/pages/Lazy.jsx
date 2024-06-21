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
      <h2>Lazy</h2>

      <p>
        lazy позволяет отложить загрузку когда компонента до тех пор, пока он не
        будет отображён в первый раз. То есть загружает компоненты тогда, когда
        они действительно нужны. Вместо загрузки всего приложения сразу, lazy
        делит код на части и загружает их по мере необходимости.
      </p>

      <h2>Импорт lazy и Suspense</h2>

      <p>
        Для использования React.lazy необходимо импортировать его вместе с
        компонентом Suspense:
      </p>

      <pre id="code">
        <code>
          {`
          import React, { Suspense, lazy } from 'react';
          `}
        </code>
      </pre>

      <h2>Создание ленивого компонента</h2>

      <p>Создай ленивый компонент с помощью React.lazy и функции импорта:</p>

      <pre id="code">
        <code>
          {`
          const LazyComponent = lazy(() => import('./LazyComponent'));
          `}
        </code>
      </pre>

      <h2>Использование Suspense для обертки ленивого компонента</h2>

      <p>
        Suspense позволяет указать резервный контент (например, индикатор
        загрузки), который будет отображаться, пока ленивый компонент
        загружается:
      </p>

      <pre id="code">
        <code>
          {`
          const App = () => {
            return (
              <div>
                <h1>My App</h1>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyComponent />
                </Suspense>
              </div>
            );
          };
          `}
        </code>
      </pre>

      <p>
        Допустим, есть компонент DogImage, который загружает случайное
        изображение собаки:
      </p>

      <pre id="code">
        <code>
          {`
          // DogImage.jsx
          import React, { useState, useEffect } from 'react';

          const DogImage = () => {
            const [data, setData] = useState(null);

            useEffect(() => {
              const fetchData = async () => {
                try {
                  const response = await fetch('https://dog.ceo/api/breeds/image/random');
                  const result = await response.json();
                  setData(result);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };

              fetchData();
            }, []);

            if (!data) {
              return null; // Suspense fallback will handle the loading state
            }

            return <img src={data.message} alt="Random Dog" />;
          };

          export default DogImage;
          `}
        </code>
      </pre>

      <p>Теперь мы используем lazy и Suspense для ленивой загрузки DogImage:</p>

      <pre id="code">
        <code>
          {`
          // App.js
          import React, { Suspense, lazy } from 'react';

          const DogImage = lazy(() => import('./DogImage'));

          const App = () => {
            return (
              <div>
                <h1>Random Dog Image</h1>
                <Suspense fallback={<div>Loading...</div>}>
                  <DogImage />
                </Suspense>
              </div>
            );
          };

          export default App;
          `}
        </code>
      </pre>

      <h3>Лучшие практики использования lazy</h3>

      <ol>
        <li>
          Разделение по маршрутам (Route-based splitting): Используй lazy для
          ленивой загрузки страниц на уровне маршрутов (routes) в приложении.
          Это поможет загружать только необходимые части приложения при
          навигации.
        </li>
        <li>
          Разделение по компонентам (Component-based splitting): Ленивая
          загрузка больших компонент, которые не используются при начальной
          загрузке, например, модальные окна или сложные формы.
        </li>
        <li>
          Оптимизация производительности: Старайся минимизировать количество
          данных, необходимых для первоначальной загрузки. Загружай тяжелые
          компоненты и их зависимости только тогда, когда они действительно
          нужны.
        </li>
        <li>
          Резервный контент: Всегда предоставляй информативный и привлекательный
          fallback в Suspense, чтобы пользователь понимал, что данные
          загружаются. Это может быть анимация загрузки или короткое сообщение.
        </li>
        <li>
          Ошибка загрузки: Обрабатывай возможные ошибки загрузки компонентов,
          чтобы приложение не крашилось. Ты можешь использовать компонент
          ErrorBoundary для этого.
        </li>
      </ol>

      <p>Пример ErrorBoundary:</p>

      <pre id="code">
        <code>
          {`
          // ErrorBoundary.js
          import React, { Component } from 'react';

          class ErrorBoundary extends Component {
            constructor(props) {
              super(props);
              this.state = { hasError: false };
            }

            static getDerivedStateFromError(error) {
              return { hasError: true };
            }

            componentDidCatch(error, errorInfo) {
              console.error('ErrorBoundary caught an error', error, errorInfo);
            }

            render() {
              if (this.state.hasError) {
                return <h1>Something went wrong.</h1>;
              }

              return this.props.children;
            }
          }

          export default ErrorBoundary;
          `}
        </code>
      </pre>

      <p>Использование ErrorBoundary в приложении:</p>

      <pre id="code">
        <code>
          {`
          // App.js
          import React, { Suspense, lazy } from 'react';
          import ErrorBoundary from './ErrorBoundary';

          const DogImage = lazy(() => import('./DogImage'));

          const App = () => {
            return (
              <ErrorBoundary>
                <div>
                  <h1>Random Dog Image</h1>
                  <Suspense fallback={<div>Loading...</div>}>
                    <DogImage />
                  </Suspense>
                </div>
              </ErrorBoundary>
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
