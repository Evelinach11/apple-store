import { Link } from "react-router-dom";

function UserModal({ modal, backgroundColor, size, animate }) {
  const btnBg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  const btnSize = size ? "btn-" + size : "";
  const btnAnimate = animate ? "btn-animate" : "";

  return (
    <>
      {modal && (
        <div className="user__modal">
          <div>
            <form>
              <p className="user__sign">Sign up</p>
              <input type="text" placeholder="username"></input>
              <input type="password" placeholder="password"></input>
              <button className={`btn ${btnBg} ${btnSize} ${btnAnimate}`}>
                login
              </button>
              <Link to="/registration" className="user__registration">
                Registration
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default UserModal;
