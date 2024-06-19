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
      <h2>Key</h2>

      <p>
        Ключи помогают React определять, какие элементы были изменены, добавлены
        или удалены. Их необходимо указывать, чтобы React мог сопоставлять
        элементы массива с течением времени.
      </p>

      <p>
        Лучший способ выбрать ключ - это использовать строку, которая будет
        отличать элемент спсика от его соседей. Такие id-ключи можно найти,
        используя библиотеку uuid, или в VSCode id="crypto.randomUUID()"
      </p>

      <pre id="code">
        <code>
          {`
            const arr2 = arr1.map((item) => <p id={crypto.randomUUID()}>Something...</p>);
          `}
        </code>
      </pre>

      <p>Если же мы не укажем ключи, то в консоли увидим сообщение:</p>

      <mark>
        Warning: Each child in an array or iterator should have a unique "key"
        prop.
      </mark>

      <p>
        Дабавляя key, мы помогаем механизму reconciliation тем, что с key он
        сверяет не попарно, а ищет компоненты с тем же key - это уменьшает
        количество перерисовок интерфейса. Обновлены/добавлены будут только те
        элементы, которые были изменены/не встречались в предыдущем дереве.
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
