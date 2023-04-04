import { useState, useEffect } from "react";
import { useRef } from "react";

function UserModal({ modal, backgroundColor, size, animate }) {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const btnBg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  const btnSize = size ? "btn-" + size : "";
  const btnAnimate = animate ? "btn-animate" : "";

  const [flip, setFlip] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();

  return (
    <>
      {modal && (
        <div className={`card ${flip ? "flip" : ""}`}>
          <div className="front" ref={frontEl}>
            <form className="form">
              <p className="user__sign">Sign up</p>
              <input type="text" placeholder="username"></input>
              <input type="password" placeholder="password"></input>
              <input type="email" placeholder="email"></input>
              <button
                className={`btn reg-btn ${btnBg} ${btnSize} ${btnAnimate}`}
              >
                Registration
              </button>
              <a className="have-account" onClick={() => setFlip(!flip)}>
                You have account?
              </a>
            </form>
          </div>
          <div className="back" ref={backEl}>
            <form className="form">
              <p className="user__sign">Login</p>
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
              <button
                className={`btn login-btn ${btnBg} ${btnSize} ${btnAnimate}`}
              >
                login
              </button>
              <a className="go-to" onClick={() => setFlip(!flip)}>
                Go to registration
              </a>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default UserModal;
