import { useState } from "react";
import { useRef } from "react";

function NotAuthModal(backgroundColor, size, animate) {
  const btnBg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  const btnSize = size ? "btn-" + size : "";
  const btnAnimate = animate ? "btn-animate" : "";

  const [flip, setFlip] = useState(false);
  const frontEl = useRef();
  const backEl = useRef();

  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <div className="front" ref={frontEl}>
        <form className="form">
          <p className="user__sign">Реєстрація</p>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <input type="email" placeholder="email"></input>
          <button className={`btn reg-btn ${btnBg} ${btnSize} ${btnAnimate}`}>
            Зареєстуватись
          </button>
          <a className="have-account" onClick={() => setFlip(!flip)}>
            Вже є аккаунт?
          </a>
        </form>
      </div>
      <div className="back" ref={backEl}>
        <form className="form">
          <p className="user__sign">Увійти</p>
          <input
            className="input-back"
            type="text"
            placeholder="username"
          ></input>
          <input
            className="input-back"
            type="password"
            placeholder="password"
          ></input>
          <button className={`btn login-btn ${btnBg} ${btnSize} ${btnAnimate}`}>
            Увійти
          </button>
          <a className="go-to" onClick={() => setFlip(!flip)}>
            Перейти до реєстрації
          </a>
        </form>
      </div>
    </div>
  );
}

export default NotAuthModal;
