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
      <h2>useId</h2>

      <p>
        useId - это React Hook для генерации уникальных идентификаторов, которые
        можно передавать в атрибуты.
      </p>

      <p>useId не принимает никаких параметров.</p>

      <p>
        useId возвращает уникальную строку идентификатора, связанную с
        конкретным вызовом useId в этом конкретном компоненте.
      </p>

      <p>
        useId нельзя вызывать внутри циклов или условий. useId не следует
        использовать для создания ключей в списке. Ключи должны быть
        сгенерированы на основе ваших данных.
      </p>

      <pre id="code">
        <code>
          {`
          import { useId } from "react";

          const MyExample = () => {
            const passwordHintId = useId();

            return (
              <>
                <input type="password" aria-describedby={passwordHintId} />
                <p id={passwordHintId}></p>
              </>
            );
          };
          `}
        </code>
      </pre>

      <p>
        Атрибуты достпуности HTMLб такие как aria-describedby, позволяют
        указать, что два тега связаны друг с другом.{" "}
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
