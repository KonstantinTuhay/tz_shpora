import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/NavigateHelpers";

const HomePage = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Components</h1>

      <p>
        Компоненты - это небольшие, переиспользуемые элементы пользовательского
        интерфейса, которые объединены вместе, чтобы создать более крупные
        приложения.
      </p>

      <p>
        Компоненты React — это функции JavaScript, которые возвращают разметку:
      </p>

      <pre id="code">
        <code>
          {`
          function MyButton() {
            return (
              <button>I'm a button</button>
            );
          }
          `}
        </code>
      </pre>

      <p>
        Теперь, когда вы объявили MyButton, вы можете вложить его в другой
        компонент:
      </p>

      <pre id="code">
        <code>
          {`
          export default function MyApp() {
            return (
              <div>
                <h1>Welcome to my app</h1>
                <MyButton />
              </div>
            );
          }
          `}
        </code>
      </pre>

      <p>
        Обратите внимание, что оно MyButton начинается с заглавной буквы. Вот
        откуда вы знаете, что это компонент React. Имена компонентов React
        всегда должны начинаться с заглавной буквы, а теги HTML должны быть
        строчными.
      </p>

      <p>React компоненты могут быть классовыми или функциональными. </p>

      <p>Пример объявления классового компонента в React:</p>

      <pre id="code">
        <code>
          {`
          class MyComponent extends React.Component {
            render() {
               return <div>Hello, Redev!</div>;
            }
          }
          export default MyComponent;
          `}
        </code>
      </pre>

      <p>Пример объявления функционального компонента в React:</p>

      <pre id="code">
        <code>
          {`
          const MyComponent = () => {
            return <div>Hello, Redev!</div>;
          }
          export default MyComponent;
          `}
        </code>
      </pre>

      <h2>Stateless VS Stateful</h2>

      <h3>Stateless компоненты </h3>

      <p>
        Они просто принимают props и возвращают JSX, который описывает, как
        должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не
        могут изменять свое поведение в зависимости от событий или действий
        пользователя.
      </p>

      <pre id="code">
        <code>
          {`
          const Greeting = ({name}) => {
            return <h1>Hello, {name}!</h1>;
          };
          `}
        </code>
      </pre>

      <h3>Stateful компоненты</h3>

      <p>
        Stateful компоненты могут управлять состоянием и изменять свое поведение
        в зависимости от событий. Они используют внутреннее состояние, чтобы
        отслеживать изменения и обновлять UI в ответ на действия пользователя
        или другие события. (useState, useEffect)
      </p>

      <pre id="code">
        <code>
          {`
          import React, { useState } from 'react';

          const Counter = () => {
            const [count, setCount] = useState(0);

            const increment = () => {
              setCount(count => count + 1);
            };

            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={increment}>Increment</button>
              </div>
            );      
          };
          `}
        </code>
      </pre>

      <NavigateHelpers callback={props.goToPage} />
    </>
  );
};

export default HomePage;
