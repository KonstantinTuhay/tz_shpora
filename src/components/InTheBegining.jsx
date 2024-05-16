import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../helpers/NavigateHelpers";

const InTheBegining = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>
        <img
          src="../image/people_on_begin.svg"
          alt="begin"
          width="50px"
          height="50px"
        />{" "}
        С чего начать?
      </h2>

      <p>Вот пошаговая инструкция для создания первого приложения на React:</p>

      <ol>
        <li>
          Установи Node.js на свой компьютер. Ты можешь скачать установочный
          файл с официального сайта Node.js. (надо будет перезагрузить компьютер
          если это windows)
        </li>
        <li>
          Проверь установлен ли Node.js и NPM
          <p>
            {" "}
            Открой консоль (терминал) и введи в консоли команду{" "}
            <mark>node -v</mark> и <mark>npm -v</mark>.{" "}
            <img
              src="..\image\npm_node_version.png"
              alt="npm_node_version"
              width="700px"
            />
          </p>
          <p>
            Если в консоли вывелись текущие версии node и npm, то всё
            установилось.
          </p>
        </li>
        <li>
          Следующий шаг это установить create-react-app.
          <p>Это самый просто способ начать писать на react.</p>
          <p>
            В терминале нужно прописать{" "}
            <mark>npm install -g create-react-app</mark>
          </p>
        </li>
        <li>
          Выполни команду <mark>npx create-react-app my-app</mark>. Эта команда
          создаст новый проект на React в папке <mark>my-app</mark>.
          <img
            src="..\image\create_react_app.png"
            alt="create_react_app"
            width="700px"
          />
        </li>
        <li>
          После этой команды, в текущей директории (папке) появится проект (это
          тоже папка) с тем названием, что было задано.
          <img
            src="..\image\just_open_folder_project.png"
            alt="just_open_folder_project"
            width="700px"
          />
        </li>
        <li>
          Теперь ты можешь запустить проект.
          <p>
            Перейди в консоли в нужную директорию <mark>cd my-app</mark>
          </p>{" "}
          <img
            src="..\image\switch_my_app.png"
            alt="switch_my_app"
            width="700px"
          />
        </li>
        <li>
          Запусти проект командой <mark>npm start</mark>
          <img src="..\image\npm_start.png" alt="npm_start" width="700px" />
        </li>
        <li>
          Открой браузер и перейди по адресу <mark>http://localhost:3000/</mark>
          , чтобы увидеть приложение на React!
        </li>
        <li>
          еперь ты можешь начать изменять приложение, редактируя файлы в папке
          <mark>src</mark>. Каждый раз, когда ты сохраняешь изменения,
          приложение автоматически перезагружается в браузере.
        </li>
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
