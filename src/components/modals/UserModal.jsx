import NotAuthModal from "../authentificate/NotAuthModal";
import AuthModal from "../authentificate/AuthModal";
import { isAuthentificate } from "../../services/userData";

function UserModal({ modal }) {
  modal
    ? document.body.classList.add("active-modal")
    : document.body.classList.remove("active-modal");

  const isAuthentificated = isAuthentificate("token");

  return (
    <>{modal ? isAuthentificated ? <AuthModal /> : <NotAuthModal /> : ""}</>
  );
}
export default UserModal;
