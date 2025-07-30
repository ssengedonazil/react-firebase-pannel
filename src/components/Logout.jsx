import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const handleLogout = async () => {
  await signOut(auth);
  window.location.reload();
};

<button className="btn btn-outline-danger mb-4" onClick={handleLogout}>
  Logout
</button>;
