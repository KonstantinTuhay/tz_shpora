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
      <h2>HOC</h2>

      <p>
        HOC — это функции высшего порядка, которые принимают компонент и
        возвращают новый компонент с расширенным функционалом.{" "}
      </p>

      <p>
        Они помогают избежать дублирования кода, управлять состоянием,
        обеспечивают абстракцию поведения и позволяют добавлять функциональность
        к компонентам без изменения их кода.
      </p>

      <p>HOC решает несколько проблем в разработке React-приложений:</p>

      <ol>
        <li>
          Логическое переиспользование: HOC позволяют выделить общую логику
          компонентов, такую как обработка аутентификации или получение данных,
          и применять ее ко множеству компонентов без дублирования кода.
        </li>
        <li>
          Прокинуть дополнительные props: HOC позволяют добавлять или
          модифицировать props компонентов. Это удобно, например, для передачи
          данных из контекста или оборачивания компонентов в дополнительные
          компоненты высшего порядка.
        </li>
        <li>
          Обертывание компонентов: HOC могут использоваться для обертывания
          компонентов дополнительным функциональным слоем, например, для
          логирования, манипуляции с состоянием и т.д.
        </li>
      </ol>

      <p>Создание HOC - это простой процесс:</p>

      <ol>
        <li>
          Напиши функцию, которая принимает компонент в качестве аргумента.
        </li>
        <li>
          Внутри функции определи новый компонент, который использует переданный
          компонент и может добавлять ему дополнительную функциональность.
        </li>
        <li>Верни этот новый компонент.</li>
      </ol>

      <pre id="code">
        <code>
          {`
          const withLogger = (WrappedComponent) => {
            return (props) => {
              console.log('Component rendered:', WrappedComponent.name);
              return <WrappedComponent {...props} />;
            };
          };
          `}
        </code>
      </pre>

      <h3>Как прокинуть props?</h3>

      <p>
        Props могут быть переданы из HOC в оборачиваемый компонент следующим
        образом:
      </p>

      <pre id="code">
        <code>
          {`
          const withExtraProps = (WrappedComponent) => {
            return (props) => {
              const extraProps = { additionalProp: "I'm extra!" };
              return <WrappedComponent {...props} {...extraProps} />;
            };
          };
          `}
        </code>
      </pre>

      <h3>Примеры использования HOC</h3>

      <ol>
        <li>Логирование</li>
        <pre id="code">
          <code>
            {`
            import React, { useEffect } from 'react';

            const withLogger = (WrappedComponent) => {
              return (props) => {
                useEffect(() => {
                  console.log(Component {WrappedComponent.name} mounted.);
                }, []);

                return <WrappedComponent {...props} />;
              };
            };
          `}
          </code>
        </pre>

        <li>Аутентификация</li>
        <pre id="code">
          <code>
            {`
            const withAuth = (WrappedComponent) => {
              return (props) => {
                const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
                if (isAuthenticated) {
                  return <WrappedComponent {...props} />;
                } else {
                  return <p>Please log in to access this content.</p>;
                }
              };
            };

            const AuthenticatedComponent = withAuth(ProfileComponent);
          `}
          </code>
        </pre>

        <li>Локализация</li>
        <pre id="code">
          <code>
            {`
            const withLocalization = (WrappedComponent) => {
              return (props) => {
                const locale = getCurrentLocale(); // Получение текущей локали.
                const localizedContent = getLocalizedContent(locale);
                return <WrappedComponent {...props} localizedContent={localizedContent} />;
              };
            };

            const LocalizedProfile = withLocalization(ProfileComponent);
          `}
          </code>
        </pre>

        <li>Управление состоянием</li>
        <pre id="code">
          <code>
            {`
            import React, { useState } from 'react';

            // HOC
            const withCounter = (WrappedComponent) => {
              return (props) => {
                const [count, setCount] = useState(0);

                const incrementCount = () => {
                  setCount(count + 1);
                };

                return (
                  <WrappedComponent
                    count={count}
                    incrementCount={incrementCount}
                    {...props}
                  />
                );
              };
            };

            // Компонент, который будет обернут HOC
            const Counter = ({ count, incrementCount }) => {
              return (
                <div>
                  <p>Count: {count}</p>
                  <button onClick={incrementCount}>Increment</button>
                </div>
              );
            };

            // Применение HOC к компоненту
            const CounterWithHOC = withCounter(Counter);

            // Компонент, использующий обернутый компонент с HOC
            const App = () => {
              return (
                <div>
                  <h1>Counter App</h1>
                  <CounterWithHOC />
                </div>
              );
            };
          `}
          </code>
        </pre>
      </ol>

      <p>
        В этом примере withCounter - это функция высшего порядка компонентов,
        которая принимает компонент WrappedComponent и возвращает новый
        компонент, который добавляет состояние count и функцию incrementCount.
        Counter - это компонент, который отображает текущее значение count и
        кнопку для увеличения счетчика. CounterWithHOC - это Counter, обернутый
        в withCounter.
      </p>

      <p>
        В итоге, когда ты используешь CounterWithHOC в App, он будет иметь
        состояние count и функцию incrementCount, добавленные благодаря HOC.
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
