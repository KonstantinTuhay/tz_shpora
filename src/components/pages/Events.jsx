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
      <h2>Events</h2>

      <p>
        Events (события) - позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие.
      </p>

      <ol>
        <li>onClick (Клик):</li>
        <p>
          Событие onClick возникает при клике на элементе. Это одно из наиболее
          распространенных событий в React.
        </p>

        <pre id="code">
          <code>
            {`
            const handleClick = () => {
              console.log('Кликнули!');
            }

            const MyComponent = () => {
              return (
                <button onClick={handleClick}>Нажми меня</button>
              );
            }
          `}
          </code>
        </pre>

        <li>onChange (Изменение):</li>

        <p>
          Событие onChange возникает при изменении значения элемента формы,
          такого как текстовое поле (input), флажок (checkbox) или выбор
          элемента списка (radio).
        </p>

        <pre id="code">
          <code>
            {`
            const handleChange = (event) => {
              console.log('Изменилось значение:', event.target.value);
            }

            const MyComponent = () => {
              return (
                <input type="text" onChange={handleChange} />
                или
                <input type="text" onChange={event => handleChange(event)} />
              );
            }
          `}
          </code>
        </pre>

        <p>event.target.value - содержит текущее значение input</p>

        <li>onSubmit (Отправка формы):</li>

        <p>
          Событие onSubmit возникает при отправке формы. Оно позволяет выполнить
          действия, связанные с отправкой данных формы на сервер.
        </p>

        <pre id="code">
          <code>
            {`
            const handleSubmit = (event) => {
              event.preventDefault();
              console.log('Форма отправлена!');
            }

            const MyComponent = () => {
              return (
                <form onSubmit={handleSubmit}>
                  {/* поля формы */}
                  <button type="submit">Отправить</button>
                </form>
              );
          `}
          </code>
        </pre>

        <li>onMouseOver (Наведение курсора):</li>

        <p>
          Событие onMouseOver возникает, когда курсор наводится на элемент. Оно
          может использоваться для отображения дополнительной информации или
          изменения состояния компонента при наведении.
        </p>

        <pre id="code">
          <code>
            {`
            const handleMouseOver = () => {
              console.log('Курсор наведен!');
            }

            const MyComponent = () => {
              return (
                <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
              );
            }
          `}
          </code>
        </pre>

        <li>onKeyDown (Нажатие клавиши):</li>

        <p>
          Событие onKeyDown возникает при нажатии клавиши на клавиатуре. Оно
          позволяет реагировать на определенные комбинации клавиш или выполнять
          действия на основе нажатых клавиш.
        </p>

        <pre id="code">
          <code>
            {`
            const handleKeyDown = (event) => {
              console.log('Нажата клавиша:', event.key);
            }

            const MyComponent = () => {
              return (
                <input type="text" onKeyDown={handleKeyDown} />
              );
            }
          `}
          </code>
        </pre>
      </ol>

      <h3>Ссылки на документацию по событиям:</h3>

      <p>Ссылки на другие обработчики события:</p>

      <ol>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event">
            onClick
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/change_event">
            onChange
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/HTMLFormElement/submit_event">
            onSubmit
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Window/focus_event">
            onFocus
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Window/blur_event">
            onBlur
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/scroll_event">
            onScroll
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/keypress_event">
            onKeyPress
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/keyup_event">
            onKeyUp
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/ru/docs/Web/API/Element/keydown_event">
            onKeyDown
          </a>
        </li>
      </ol>

      <h3>target VS currentTarget</h3>

      <p>
        Отличие между event.target.value и event.currentTarget.value состоит в
        том, как React интерпретирует их в контексте обработчика событий.
      </p>

      <ol>
        <li>
          <p>
            event.target.value: Это значение, которое было изменено в результате
            действия пользователя. Например, если есть текстовое поле{" "}
            {`<input>`} и пользователь вводит в него текст, то
            event.target.value будет содержать значение этого текста.
          </p>
        </li>
        <li>
          <p>
            event.currentTarget.value: Это значение, которое ассоциировано с
            элементом, к которому привязан обработчик событий. В контексте React
            currentTarget обычно ссылается на элемент, к которому был привязан
            обработчик событий, и значение value будет доступно только если этот
            элемент имеет свойство value, например, {`<input>`}, {`<textarea>`}{" "}
            или {`<select>`}.
          </p>
        </li>
      </ol>

      <p>
        Для большинства случаев использования в формах в React обычно
        используется event.target.value, поскольку это значение напрямую
        отражает ввод пользователя и удобно для контроля состояния формы. Однако
        в некоторых случаях event.currentTarget.value может быть полезным,
        например, когда у вас есть несколько элементов управления и вы хотите
        иметь общий обработчик для них.
      </p>

      <pre id="code">
        <code>
          {`
          const App = () => {
            const [targetValue, setTargetValue] = useState('')
            const [currentTargetValue, setCurrentTargetValue] = useState('')

            const handleClick = event => {
              // event.target.value — значение элемента, который был непосредственно изменен
              setTargetValue(event.target.value)

              // event.currentTarget.value — значение элемента, к которому привязан обработчик событий
              setCurrentTargetValue(event.currentTarget.value)
            }

            return (
              <div>
                <h1>
                  Демонстрация сравнения event.target.value и event.currentTarget.value
                </h1>
                <button value='Parent Button' onClick={handleClick}>
                  Parent Button
                  <input type='button' value='Child Button' onClick={handleClick} />
                </button>

                <p>event.target.value: {targetValue}</p>
                <p>event.currentTarget.value: {currentTargetValue}</p>
              </div>
            )
          }
          `}
        </code>
      </pre>

      <p>
        Когда кликнешь на кнопку "Parent Button", event.target и
        event.currentTarget будут указывать на один и тот же элемент (кнопку),
        поэтому оба значения будут "Parent Button".
      </p>

      <p>
        Когда кликнешь на "Child Button", event.target укажет на "Child Button",
        а event.currentTarget укажет на "Parent Button", так как обработчик
        события привязан к элементу {`<button>`} родительского уровня.
      </p>

      <NavigateHelpers callback={props.goToPage} txt="На глвыную" path="/" />
      <NavigateHelpers callback={props.goToPage} />
    </div>
  );
};

export default ReactThis;
