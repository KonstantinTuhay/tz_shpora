import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/navigateHOC";
import ReactPlayer from "react-player";

const InTheBegining = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>useState</h2>

      <p>
        Состояние (state) - представляет собой данные, которые используются
        внутри компонента для отслеживания и обновления информации. Состояние
        позволяет компонентам быть динамичными и реагировать на изменения или
        взаимодействия пользователя. State - это то, что изменяется в
        компонента, нежели props.{" "}
      </p>

      <p>
        Хук useState возвращает массив с текущим состоянием и функцией которая
        меняет это текущее состояние
      </p>

      <p>Начальный параметр необязателен и он может быть любым типом данных.</p>

      <h3>Обновление состояния</h3>

      <p>
        Для обновления состояния используется функция setName. При вызове
        setName внутрь функции передаётся новое состояние или функция, если наше
        новое состояние зависит от предыдущего состояния то лучше использовать
        функциональное обновление:
      </p>

      <pre id="code">
        <code>
          {`
          import "./App.css";
          import { useState } from "react";

          function App() {
            const [name, setName] = useState("Vasya");

            const addLastName = () => {
              setName((prevName) => prevName + " Krugly");
            };
            return (
              <div className="App">
                <p>{name}</p>
                <button onClick={addLastName}>Add last name</button>
              </div>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <p>Так у нас изменяется наш SPA (Single Page Application)</p>

      <video width="100%" controls src="./videos/state.mp4">
        {/* <source src="./videos/state.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <video width="750" height="500" controls>
        <source src="./videos/state.mp4" type="video/mp4" />
      </video>
      <ReactPlayer url="./videos/state.mp4" />
      <NavigateHelpers navigate={navigate} params="/" txt="На главную" />
      <NavigateHelpers
        navigate={navigate}
        params="/constr_ptoject"
        txt="Структура проекта"
      />
    </>
  );
};

export default InTheBegining;
