import { fetchUserData } from "../../services/userData";

function AuthModal() {
  const user = fetchUserData(1);

  return (
    <div className="profile-card">
      <div className="profile-info">
        <div className="profile-user">
          <h1 className="profile-greting">Вітаю!</h1>
          <p className="profile-name">
            {user.name} {user.surname}
          </p>
        </div>
        <div className="profile-body-main">
          <p className="profile-bonus">
            У вас є <span className="bonus">{user.bonus}</span> бонусів
          </p>
          <a className="profile">Мій профіль</a>
          <button className="profile-logOut">Вийти</button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
