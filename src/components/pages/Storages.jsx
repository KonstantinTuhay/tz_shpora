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
      <h2>Storages</h2>

      <p>
        Local Storage - это механизм, который позволяет веб-приложениям
        сохранять данные локально в браузере. Это означает, что данные будут
        сохранены после закрытия браузера и перезагрузки страницы.
      </p>

      <p>
        LocalStorage может быть использован для хранения различных типов данных,
        таких как строки, числа, булевы значения и объекты. Он может быть
        полезен для хранения пользовательских настроек (например темная тема на
        сайте), предпочтений пользователя и других данных, которые могут быть
        использованы для персонализации пользовательского опыта.
      </p>

      <p>
        Для записи данных в LocalStorage можно использовать localStorage объекта
        window в JavaScript. Например, чтобы записать строку "Hello, Redev!" в
        LocalStorage, можно использовать:
      </p>

      <pre id="code">
        <code>
          {`
          localStorage.setItem('myData', 'Hello, Redev!');
          `}
        </code>
      </pre>

      <p>
        В этом примере мы записываем строку "Hello, Redev!" в LocalStorage с
        ключом "myData".
      </p>

      <p>
        Чтобы получить данные из LocalStorage, можно использовать метод
        getItem() объекта localStorage. Например, чтобы получить значение,
        которое мы только что записали, можно использовать следующий код:
      </p>

      <pre id="code">
        <code>
          {`
          const myData = localStorage.getItem('myData');
          console.log(myData); // Выводится "Hello, Redev!"
          `}
        </code>
      </pre>

      <p>
        В этом примере мы получаем значение из LocalStorage с ключом "myData" и
        записываем его в переменную myData.{" "}
      </p>

      <p>
        Обрати внимание, что данные в LocalStorage хранятся в виде строк. При
        необходимости данные могут быть преобразованы в другие типы данных с
        помощью методов JavaScript, например parseInt() или JSON.parse().
      </p>

      <p>
        LocalStorage является безопасным механизмом хранения данных, поскольку
        данные сохраняются локально на компьютере пользователя и не передаются
        на сервер. Это также означает, что данные хранятся в пределах
        ограниченного объема памяти, доступного для браузера.
      </p>

      <p>
        Использование LocalStorage может улучшить пользовательский опыт,
        позволяя сохранять данные между визитами на сайт.
      </p>

      <h3>
        Использование Cookies в React приложениях: Хранилище состояния и работа
        с ним
      </h3>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
