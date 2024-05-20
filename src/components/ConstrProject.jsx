import React from "react";
import { useNavigate } from "react-router-dom";
import NavigateHelpers from "../helpers/navigateHOC";

const ConstrProject = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>
        <img
          src="../image/home_on_structure_project.svg"
          alt="home"
          width="50px"
          height="50px"
        />
        Структура проекта
      </h1>

      <p>
        Структура проекта на React может различаться в зависимости от твоих
        предпочтений и специфики проекта. Однако, я могу рассказать о типичной
        структуре проекта на React, которую часто используют разработчики.
      </p>

      <img
        src="../image/im_pack_json.png"
        alt="Тут должна быть структура package.json"
        width="700px"
      />

      <h2>Структура проекта:</h2>

      <ul>
        <li>
          <mark>src</mark>: Все исходные файлы твоего проекта находятся внутри
          этой папки. <p>Внутри src обычно имеются следующие подпапки:</p>
          <ul>
            <li>
              <mark>components</mark>: Каталог для хранения компонентов React,
              которые создаются для приложения.
              <ul>
                <li>
                  <mark>App.js</mark>файл: Это главный компонент приложения,
                  который объединяет все остальные компоненты и определяет
                  основную структуру приложения.
                </li>
                <li>
                  <mark>Todo</mark> папка: в них хранить свои компоненты.
                </li>
              </ul>
            </li>
            <li>
              <mark>pages</mark>: Здесь располагаются компоненты, которые
              представляют собой отдельные страницы или экраны приложения.
            </li>
            <li>
              <mark>utils</mark>: Здесь можно разместить вспомогательные
              функции, утилиты и другие полезные модули.
            </li>
            <li>
              <mark>redux</mark>: Если ты используешь управление состоянием,
              например, Redux, здесь можно разместить директории и файлы,
              связанные с состоянием приложения.
            </li>
            <li>
              <mark>routes</mark>: В данной папке можно определить файлы,
              отвечающие за маршрутизацию в приложении.
            </li>
            <li>
              <mark>index.js</mark>файл: Входная точка твоего приложения, где
              происходит рендеринг корневого компонента React внутри корневого
              элемента из index.html.
            </li>
          </ul>
        </li>
        <li>
          <mark>public</mark>: используется для хранения статических ресурсов,
          таких как HTML-файлы, изображения, шрифты и другие файлы, которые
          должны быть доступны непосредственно из браузера без обработки
          React-кодом.
          <ul>
            <li>
              <mark>index.html</mark> файл: Это основной HTML-файл приложения,
              который обычно содержит корневой элемент с идентификатором, в
              который будет вставлен React-компонент.
            </li>
          </ul>
        </li>
        <li>
          <mark>node_modules</mark>: является местом, где хранятся все
          зависимости (библиотеки). Когда ты устанавливаешь новую зависимость в
          своем проекте с помощью менеджера пакетов, такого как npm или yarn,
          эти пакеты загружаются и устанавливаются в папку node_modules. Так
          вот, папка node_modules служит именно для хранения всех этих
          зависимостей.{" "}
          <i>
            !!!ЗАПОМНИ!! Ее не нужно заливать на github и включать в
            отслеживание git.
          </i>
        </li>
        <li>
          <mark>package.json</mark>: файл, содержащий информацию о зависимостях
          твоего проекта, скрипты сборки и другую конфигурацию проекта.
        </li>
        <li>
          <mark>package-lock.json</mark>: файл, создаваемый при установке
          пакетов с помощью менеджера пакетов npm. Он используется для фиксации
          версий всех установленных зависимостей в проекте.
        </li>
        <li>
          <mark>.env</mark>: файл, в котором можно задать переменные окружения
          для конфигурации приложения, такие как ключи API или настройки среды
          выполнения.
        </li>
        <li>
          <mark>.gitignore</mark>: файл, определяющий, какие файлы и папки
          должны быть игнорированы Git при коммите и публикации кода.
        </li>
        <li>
          <mark>README.md</mark>: файл с описанием проекта, инструкциями по
          установке и запуску приложения, а также другой полезной информацией
          для разработчиков и пользователей.
        </li>
      </ul>

      <h2>package.json</h2>

      <p>
        Файл package.json играет очень важную роль. Он содержит информацию о
        нашем проекте, его зависимостях и различных настройках.
      </p>

      <img
        src="../image/pack_json_red_yel.png"
        alt="Тут должна быть картинка pack_json_red_yel.png"
        width="700px"
      />

      <p>
        Вот некоторые ключевые моменты о файле package.json, объясненные простым
        языком:
      </p>

      <ol>
        <li>
          <b>Описание проекта:</b> В package.json мы можем указать название,
          описание, версию и автора проекта. Это помогает другим разработчикам и
          пользователям понять, что делает наш проект.
        </li>
        <li>
          <mark>dependencies</mark>(зависимости): Это одна из самых важных
          частей package.json. Здесь мы перечисляем все сторонние пакеты и
          библиотеки (зависимости), которые используются в проекте. Каждая
          зависимость состоит из имени пакета и его версии. Когда мы запускаем
          команду <mark>npm install</mark> или <mark>yarn install</mark>, npm
          или yarn смотрят в package.json, загружают и устанавливают все
          указанные зависимости в папку node_modules.
        </li>
        <li>
          <mark>scripts</mark>(cкрипты): В разделе "scripts" мы можем определить
          различные команды, которые можно выполнять внутри нашего проекта.
          Например, мы можем создать команду "start", которая будет запускать
          наше приложение, или команду "build", которая будет создавать
          оптимизированную версию проекта для развертывания на сервере. Команды
          в package.json могут быть запущены с помощью{" "}
          <mark>npm run команда</mark>
          <p>
            Так же можно прописывать свои скрипты. Например, я хочу чтобы проект
            запускал по команде “redev”
          </p>
          <img
            src="../image/red.png"
            alt="Тут должна быть картинка red.png"
            width="500px"
          />
          <p>
            Чтобы использовать новый скрипт нужно запустить его с помощью{" "}
            <mark>npm run redev</mark>
          </p>
        </li>
        <li>
          <b>Настройки проекта:</b> В package.json мы также можем определить
          различные настройки для нашего проекта. Например, мы можем указать
          точку входа нашего приложения, настройки сборки, поддержку различных
          браузеров и многое другое. Эти настройки помогают нам настроить проект
          так, как мы хотим.{" "}
          <i>
            (дальше, например при работе с github pages, ты с этим столкнешься)
          </i>
          <p>
            <b>Package.json</b> - это своего рода "сердце" проекта React. Он
            содержит всю важную информацию о проекте, его зависимостях,
            настройках и скриптах. Этот файл помогает управлять зависимостями,
            автоматизировать задачи и поддерживать порядок в проекте.
          </p>
        </li>
      </ol>

      <NavigateHelpers navigate={navigate} params={"/"} txt="На главную" />
    </>
  );
};

export default ConstrProject;
