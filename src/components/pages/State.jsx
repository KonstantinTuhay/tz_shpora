import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/navigateHOC";
import video1 from "./videos/state.mp4";
import video2 from "./videos/state_count.mp4";
import video3 from "./videos/state_hide_show.mp4";
import video4 from "./videos/state_input_onChange.mp4";
import video5 from "./videos/state_style.mp4";

const InTheBegining = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>useState</h1>

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

      <video width="100%" controls src={video1} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <h3>Отслеживания текущего счетчика и его отображения</h3>

      <pre id="code">
        <code>
          {`
          import "./App.css";
          import { useState } from "react";

          function App() {
            const [name, setName] = useState(0);

            const addLastName = () => {
              setName((prevName) => prevName + 1);
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

      <video width="100%" controls src={video2} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <h3>Управление отображением элементов</h3>

      <pre id="code">
        <code>
          {`
          import "./App.css";
          import { useState } from "react";

          function App() {
            const [txt, setTxt] = useState(false);

            const changeState = () => {
              setTxt((prevTxt) => !prevTxt);
            };

            return (
              <div className="App">
                {txt && <p>Show me \\ Hide me</p>}
                <button onClick={changeState}>Show \\ Hide</button>
              </div>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <video width="100%" controls src={video3} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <h3>Управление input</h3>

      <pre id="code">
        <code>
          {`
          import "./App.css";
          import { useState } from "react";

          function App() {
            const [name, setName] = useState("");

            const changeState = (e) => {
              setName(e.target.value);
            };

            return (
              <div className="App">
                <p>Name: {name}</p>
                <input onChange={changeState} />
              </div>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <video width="100%" controls src={video4} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <h3>Управление стилями</h3>

      <pre id="code">
        <code>
          {`
          import "./App.css";
          import { useState } from "react";

          function App() {
            const [color, setColor] = useState("green");

            const changeState = () => {
              setColor(color === "green" ? "red" : "green");
            };

            const style = {
              color,
            };

            return (
              <div className="App">
                <button onClick={changeState}>Change my color</button>
                <p style={style}>Lorem ipsum dollar</p>
              </div>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <video width="100%" controls src={video5} type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <p>
        Состояние state можно передавать в дочерние компоненты через пропсы
        (передача в родительском компоненте и принять через деструктуризацию или
        props в родительском компоненте)
      </p>

      <p>
        Если новое значение state совпадает с текущим, то React выполнит
        оптимизацию и не проведёт повторную отрисовку компонента
      </p>

      <p>Хуки можно использовать только внутри функциональных компонентов!!!</p>

      <h3>state с объектом</h3>

      <pre id="code">
        <code>
          {`
          import React, { useState } from 'react';

          const UserProfile = () => {
          const [user, setUser] = useState({
            name: '',
            age: '',
            email: ''
          });

          const handleChange = (e) => {
            const { name, value } = e.target;
            // создаем новый объект с обновленным свойством
            setUser(prevUser => ({
              ...prevUser,
              [name]: value
            }));
          };

          return (
            <div>
              <h1>Профиль пользователя</h1>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
              />
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Введите ваш возраст"
              />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Введите вашу почту"
              />
              <p>Имя: {user.name}</p>
              <p>Возраст: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            );
          };

          export default UserProfile;
          `}
        </code>
      </pre>

      <p>
        Мы инициализируем стейт user как объект с тремя свойствами: name, age и
        email.
      </p>

      <p>
        Используем функцию handleChange, чтобы обновить состояние при изменении
        любого из полей ввода. Эта функция:
      </p>

      <ul>
        <li>Извлекает name и value из события.</li>
        <li>
          Создает новый объект состояния, копируя существующие свойства с
          помощью оператора spread (...prevUser) и обновляя измененное свойство.
        </li>
      </ul>

      <p>
        Каждый элемент ввода (input) имеет атрибут name, который соответствует
        ключу объекта состояния. Это позволяет использовать один обработчик для
        всех полей ввода.
      </p>

      <p>
        <b>Не изменяй существующее состояние напрямую</b>: Вместо этого создавай
        новый объект с помощью оператора spread. Это позволяет React правильно
        отслеживать изменения состояния и ререндерить компонент при
        необходимости.
      </p>

      <p>
        <b>Используй функцию для обновления состояния:</b> Когда новое состояние
        зависит от предыдущего, всегда! используй функцию для обновления, чтобы
        избежать проблем с конкурентным обновлением состояния.
      </p>

      <h3>
        Функция-сеттер (функция, которая меняет наш state) - авинхронная
        операция
      </h3>

      <p>
        Когда мы вызываем функцию-сеттер React не обновляет состояние и не
        рендерит компонент немедленно. Вместо этого он помещает обновление в
        очередь. После этого React применяет все обновления состояния за один
        раз перед следующим рендером компонента.
      </p>

      <h4>Пример асинхронного поведения</h4>

      <pre id="code">
        <code>
          {`
          import React, { useState, useEffect } from 'react';

          const Counter = () => {
            const [count, setCount] = useState(0);

            const handleIncrement = () => {
              setCount(count + 1);
              setCount(count + 1);
              setCount(count + 1);
            };

            return (
              <div>
                <p>Count: {count}</p>
                <button onClick={handleIncrement}>Increment</button>
              </div>
            );
          };

          export default Counter;
          `}
        </code>
      </pre>

      <p>
        В этом примере, когда нажимаем кнопку, handleIncrement вызывается, и мы
        трижды вызываем setCount(count + 1). Интуитивно может показаться, что
        count должен увеличиться на 3, но это не так. Все три вызова setCount
        объединяются в одно обновление, и в итоге count увеличится только на 1.
      </p>

      <p>
        Чтобы корректно обновить состояние на основе предыдущего значения,
        следует использовать функциональный сеттер:
      </p>

      <pre id="code">
        <code>
          {`
          const handleIncrement = () => {
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
            setCount(prevCount => prevCount + 1);
          };
          `}
        </code>
      </pre>

      <p>
        В этом случае prevCount будет обновлено каждый раз, и состояние count
        увеличится на 3, как ожидается.
      </p>

      <h3>State в классах</h3>

      <ol>
        <li>Как создать state в компоненте React</li>
        <p>state создается в конструкторе компонента.</p>
        <pre id="code">
          <code>
            {`
          class Example extends React.Component {
            constructor(props) {
              super(props);
              this.state = { count: 0 };
            }
            ...
          }
          `}
          </code>
        </pre>

        <li>Как изменять state в компоненте React</li>
        <p>
          В React, метод setState используется для обновления состояния
          компонента. У этого метода есть две формы:
        </p>
        <pre id="code">
          <code>
            {`
            this.setState({ count: this.state.count + 1 });
            this.setState((state)=> { count: state.count + 1 });
          `}
          </code>
        </pre>
        <p>
          Разница между ними в том, что во втором случае мы смотрим на текущее
          состояние, а в первом случае сразу меняем состояние (не текущее)
        </p>
      </ol>

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
