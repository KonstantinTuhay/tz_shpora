import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../../helpers/NavigateHelpers";

const ReactThis = (props) => {
  const navigate = useNavigate();

  // const general = () => {
  //   navigate("/");
  // };

  // const nextPage = () => {
  //   navigate("/inthebegining");
  // };

  return (
    <div>
      <h2>Props</h2>

      <p>
        Props (properties) - это объект, который передаётся в компоненты React
        для передачи информации из родительского компонента в дочерний
        компонент.
      </p>

      <p>
        Пропсы передаются с родительского компонента в дочерний как параметр
        функции, а в дочернем они принимаются в виде объекта. Родительский
        компонент:
      </p>

      <pre id="code">
        <code>
          {`
          import "./App.css";
          import MyExample from "./components/MyExample";
          import { useState } from "react";

          function App() {
            const [name, setName] = useState("Vasya");
            return (
              <div className="App">
              <MyExample name={name} />
            </div>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <p>Дочерний компонент:</p>

      <pre id="code">
        <code>
          {`
          import React from "react";
          import OurExample from "./OurExample";

          const MyExample = (props) => {
            console.log(props);
            return (
               <>
                 {props.name}
                  <OurExample />
               </>
            );
          };

          export default MyExample;
          `}
        </code>
      </pre>

      <p>
        В дочернем компоненте мы получили props в виде объекта и посмотрим его в
        консоли
      </p>

      <pre id="code">
        <code>
          {`
          {name: 'Vasya'}
          `}
        </code>
      </pre>

      <p>Также можно сразу делать деструктуризацию:</p>

      <pre id="code">
        <code>
          {`
          import React from "react";
          import OurExample from "./OurExample";

          const MyExample = ({ name }) => {
            console.log(name);
            return (
              <>
                {name}
                <OurExample />
              </>
            );
          };

          export default MyExample;
          `}
        </code>
      </pre>

      <p>В классовых компонентах props доступен через this.props.name</p>

      <pre id="code">
        <code>
          {`
          import React from "react";

          class MyExample extends React.Component {
             render() {
              return <>{this.props.name}</>;
             }
          }

          export default MyExample;
          `}
        </code>
      </pre>

      <p>
        То есть в классовых компонентах не нужно передавать в параметры функции
        props он уже есть в классовых компонентах в объекте this, к нему нужно
        только достучаться через this.props
      </p>

      <p>
        В props могут храниться абсолютно любые данные: строки, числа, массивы,
        объекты, функции.
      </p>

      <p>
        Пропсы нельзя менять вручную, они неизменяемые, только если использовать
        state для их изменения{" "}
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
