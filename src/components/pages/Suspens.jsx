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
      <h2>Suspense</h2>

      <p>
        Suspense позволяет отображать резервный вариант до тех пор, пока его
        дочерние элементы не завершат загрузку. Это полезно для создания
        “плавного”, “положительного” пользовательского опыта, где загрузка
        данных происходит "за кулисами", и пользователь видит только готовый
        результат.
      </p>

      <h3>Компонент Suspense</h3>

      <p>
        Компонент {`<Suspense>`} позволяет обернуть часть твоего приложения,
        которая требует асинхронных данных. Он показывает запасной UI (например,
        индикатор загрузки) до тех пор, пока все асинхронные операции не будут
        завершены.
      </p>

      <pre id="code">
        <code>
          {`
          import React, { Suspense } from 'react';
          import MyComponent from './MyComponent';

          function App() {
            return (
              <div>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <MyComponent />
                </Suspense>
              </div>
            );
          }

          export default App;
          `}
        </code>
      </pre>

      <h3>Fallback (Запасной UI)</h3>

      <p>
        fallback — это проп, который принимает компонент, показываемый пока
        данные загружаются. В примере выше, fallback={<div>Загрузка...</div>}{" "}
        означает, что пока данные для MyComponent загружаются, пользователь
        увидит текст "Загрузка...".
      </p>

      <h4>Пример использования</h4>

      <pre id="code">
        <code>
          {`
          //useGetData.js
          import { useState, useEffect } from 'react'
          import axios from 'axios'

          const promiseWrapper = (promise, delay = 3000) => {
            let status = "pending";
            let result;

            const s = promise
              .then((value) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    status = "success";
                    result = value;
                    resolve(value);
                  }, delay);
                });
              })
              .catch((error) => {
                status = "error";
                result = error;
              });

            return () => {
              switch (status) {
                case "pending":
                  throw s;
                case "success":
                  return result;
                case "error":
                  throw result;
                default:
                  throw new Error("Unknown status");
              }
            };
          };

          function useGetData (url) {
            const [resource, setResource] = useState(null)

            useEffect(() => {
              const getData = async () => {
                const promise = axios.get(url).then(response => response.data)
                setResource(promiseWrapper(promise))
              }

              getData()
            }, [url])

            return resource
          }

          export default useGetData
          `}
        </code>
      </pre>
      <pre id="code">
        <code>
          {`
          //PostsComponent.jsx
          import React from "react";
          import useGetData from "./useGetData";

          function PostsComponent() {
            const data = useGetData("https://jsonplaceholder.typicode.com/posts");

            return (
              <div>
                {data &&
                  data.map((post) => (
                    <div key={post.id}>
                      <h2>{post.title}</h2>
                      <hr />
                      <p>{post.body}</p>
                    </div>
                  ))}
              </div>
            );
          }

          export default PostsComponent;
          `}
        </code>
      </pre>
      <pre id="code">
        <code>
          {`
          import React, { Suspense } from 'react'
          import PostsComponent from './components/PostsComponent'
          function App () {
            return (
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  <PostsComponent />
                </Suspense>
              </div>
            )
          }

          export default App
          `}
        </code>
      </pre>

      <h3>Управление несколькими Suspense</h3>

      <p>
        Вы можешь использовать несколько компонентов {`<Suspense>`}, чтобы
        управлять различными частями независимо.
      </p>

      <pre id="code">
        <code>
          {`
          import React, { Suspense, lazy } from 'react';

          const ComponentOne = lazy(() => import('./ComponentOne'));
          const ComponentTwo = lazy(() => import('./ComponentTwo'));

          function App() {
            return (
              <div>
                <Suspense fallback={<div>Loading Component One...</div>}>
                  <ComponentOne />
                </Suspense>
                <Suspense fallback={<div>Loading Component Two...</div>}>
                  <ComponentTwo />
                </Suspense>
              </div>
            );
          }

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
