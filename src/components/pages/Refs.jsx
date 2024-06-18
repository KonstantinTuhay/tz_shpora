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
      <h2>Refs</h2>

      <p>
        Refs - предоставляет способ доступа к DOM-узлам или React-элементам,
        созданным в методе render()
      </p>

      <p>Использование рефов:</p>

      <ol>
        <li>Управление фокусом, выделение текста.</li>
        <li>Выполнение анимаций.</li>
        <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
      </ol>

      <p>Пример с управлением фокусом</p>

      <pre id="code">
        <code>
          {`
          import React, { useEffect, useState, Fragment, useRef } from 'react'

          const Test = () => {
              const [text, setText] = useState('')
              const textInput = useRef(null)
              const valid = () => {
                  textInput.current.focus()
              }
              return (
                  <div>
                      <input ref={textInput} value={text} />
                      <button onClick={() => valid()}>
                          Click to focus
                      </button>
                  </div>
              )
          }

          export default Test
          `}
        </code>
      </pre>

      <p>Или при первом render, чтобы сразу был фокус:</p>

      <pre id="code">
        <code>
          {`
          const refFocus = useRef(null);

          useEffect(() => {
            refFocus.current.focus();
          }, []);
          
          <input
            placeholder="Введите имя"
            ref={refFocus}
          />
          `}
        </code>
      </pre>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
