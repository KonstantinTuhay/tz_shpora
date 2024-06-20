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
      <h2>useContext</h2>

      <p>
        useContext - это React Hook, который позволяет читать контекст
        компонента и подписываться на него
      </p>

      <p>
        Context предоставляет способ передачи данных через дерево компонентов
        без явной передачи пропсов от родительских компонентов к дочерним. Это
        особенно полезно, когда необходимо передать данные глубоко в иерархии
        компонентов, избегая промежуточных компонентов.
      </p>

      <p>
        useContext - решает проблему props drilling - это паттерн, который
        возникает, когда компоненту нужно передать данные через несколько
        уровней других компонентов. Он возникает, когда компоненты передают
        props другим компонентам, чтобы они могли использовать эти данные
      </p>

      <p>
        Пропс-дриллинг может стать проблемой, когда данные нужно передавать
        через несколько уровней компонентов, и при этом каждый компонент просто
        перенаправляет свойства следующему компоненту без реального
        использования этих свойств.
      </p>

      <pre id="code">
        <code>
          {`
          const GrandParentComponent = ({value}) => {
            return (
              <ParentComponent value={value}>
            )
          }

          const ParentComponent = ({value}) => {
            return (
              <ChildComponent value={value}/>
            )
          }

          const ChildComponent = ({value}) => {
            return (
              <p>{value}</p>
            )
          }
          `}
        </code>
      </pre>

      <p>
        В этом примере пропс у нас передаётся через ParentComponent который его
        не использует и дальше передаёт через пропсы в ChildComponent. Это может
        привести к избыточности и усложнению кода. Он также делает компоненты
        более зависимыми от их иерархии, что может затруднить их
        переиспользование и модификацию.{" "}
      </p>

      <p>
        Чтобы избежать проблемы пропс-дриллинга, можно использовать продвинутые
        паттерны, такие как контекст (context), который позволяет прокинуть
        пропс (значение) до нужного компонента, без прокидывания в каждый
        компонент.
      </p>

      <h2>Шаг 1: Создание контекста</h2>

      <p>
        Сначала мы должны создать контекст с помощью функции createContext() из
        модуля react. Пример:
      </p>

      <pre id="code">
        <code>
          {`
          // MyContext.js
          import React from 'react';

          const MyContext = React.createContext();

          export default MyContext;
          `}
        </code>
      </pre>

      <p>
        В этом примере создается новый контекст с помощью createContext() и
        экспортируется для дальнейшнего использования.
      </p>

      <h2>Шаг 2: Предоставление значения контекста</h2>

      <p>
        Затем нужно предоставить значение контекста внутри
        компонента-провайдера. Компонент-провайдер обертывает дерево
        компонентов, которым нужен доступ к контексту. Пример:
      </p>

      <pre id="code">
        <code>
          {`
          // App.js
          import React from 'react';
          import MyContext from './MyContext';
          import ComponentA from './ComponentA';

          const App = () => {
            const value = 'Hello, Context!';

            return (
              <MyContext.Provider value={value}>
                <ComponentA />
              </MyContext.Provider>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <p>
        В этом примере используется MyContext.Provider для предоставления
        значения контекста. Значение value будет доступно всем дочерним
        компонентам, которые подписаны на этот контекст.
      </p>

      <h2>Шаг 3: Использование хука useContext</h2>

      <p>
        Теперь можно использовать хук useContext внутри функционального
        компонента, чтобы получить доступ к значению контекста. Пример:
      </p>

      <pre id="code">
        <code>
          {`
          // ComponentA.js
          import React, { useContext } from 'react';
          import MyContext from './MyContext';
          import ComponentB from './ComponentB';

          function ComponentA() {
            const value = useContext(MyContext);

            return (
              <div>
                <h2>Component A</h2>
                <p>Received value from Context: {value}</p>
                <ComponentB />
              </div>
            );
          }

          export default ComponentA;
          `}
        </code>
      </pre>

      <h2>Шаг 4: Подписка на контекст (еще один вариант) </h2>

      <p>
        Есть еще один вариант подписаться на контекст в компонентах, где нужны
        переданные значения. Для этого используется MyContext.Consumer. Пример:
      </p>

      <pre id="code">
        <code>
          {`
          // ComponentA.js
          import React from 'react';
          import MyContext from './MyContext';
          import ComponentB from './ComponentB';

          function ComponentA() {
            return (
              <div>
                <h2>Component A</h2>
                <MyContext.Consumer>
                  {(value) => (
                    <p>Received value from Context: {value}</p>
                  )}
                </MyContext.Consumer>
                <ComponentB />
              </div>
            );
          }

          export default ComponentA;
          `}
        </code>
      </pre>

      <p>
        В этом примере используется MyContext.Consumer для получения значения
        контекста и отображения его внутри компонента. Значение контекста будет
        доступно внутри функции-рендерера в виде аргумента.
      </p>

      <p>
        Перегрузка контекстом всего приложения может привести к усложнению и
        запутыванию кода.
      </p>

      <p>
        Рекомендуется использовать контекст там, где он действительно необходим,
        например, для глобального состояния приложения или темизации
        (dark||light мод).
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
