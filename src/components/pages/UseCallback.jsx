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
      <h2>useCallback</h2>

      <p>
        useCallback - это React Hook, который позволяет кэшировать определение
        функции между повторными рендерингами.
      </p>

      <p>useCallback принимает два параметра, функция и зависимости.</p>

      <p>
        Первым параметром передаётся функция которую мы хотим кэшировать между
        повторными рендерингами. React вернёт, <mark>не вызовет</mark> функцию
        во время первоначального рендеринга. При повторном рендеринге снова
        предоставит ту же функцию, если зависимости не изменились.
      </p>

      <p>
        Вторым параметром передаётся массив (список зависимостей), включающий
        все значения компонента, используемые внутри функции. Сравнивается через
        Object.is
      </p>

      <p>
        При оптимизации производительности рендеринга иногда требуется
        кэшировать функции, которые передаются дочерним компонентам.
      </p>

      <p>
        При первоначальном рендеринге возвращаемая функция, которую мы получим
        от useCallback будет переданной нами функцией первым параметром.
      </p>

      <p>
        При следующих рендерингах React сравнит зависимости с зависимостями,
        которые передали во время предыдущего рендеринга. Если ни одна из
        зависимостей не изменилась, useCallback вернет ту же функцию, что и
        раньше. В противном случае useCallback вернет функция, которую передали
        при этом рендеринге.
      </p>

      <p>
        Другими словами, useCallback кэширует функцию между повторными
        рендерингами до тех пор, пока её зависимости не изменятся.
      </p>

      <pre id="code">
        <code>
          {`
          import { useCallback } from "react";

          const MyExample = ({ productId, referrer, theme }) => {
            const handleSubmit = useCallback(
              (otherDetails) => {
                <p>{productId}</p>;
              },
              [productId, referrer]
            );

            return (
              <div className="theme">
                <ShippingForm onSubmit={handleSubmit} />
              </div>
            );
          };
          };
          `}
        </code>
      </pre>

      <p>
        Предположим, я передал функцию handleSubmit из MyExample в компонент
        ShippingForm. Если заметили, что при переключении темы придлжения на
        мгновение зависает, но если удалим {`<ShippingForm/>`} из JSX, это
        произойдёт быстро. Это говорит о том, что надо как то оптимизировать
        компонент ShippingForm
      </p>

      <pre id="code">
        <code>
          {`
          const memoizedCallback = useCallback(
            () => doSomething(a, b), 
            [a, b]
          );
          `}
        </code>
      </pre>

      <p>
        В этом примере useCallback создаёт мемоизированную версию функции
        doSomething, и эта версия будет обновляться только в случае изменений
        значений a или b. Если a и b не изменяется между рендерами компонента,
        то useCallback вернёт ту же самую мемоизированную функцию.
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
