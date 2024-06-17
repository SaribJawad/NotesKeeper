import { auth } from "../firebase/firebase";

/* eslint-disable react/prop-types */
function Navbar({ currentUser, setCurrentUser }) {
  // signing out user function
  function signOut() {
    auth
      .signOut()
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  }

  return (
    <nav
      className={`absolute w-full py-10 px-16 flex items-center ${
        currentUser ? "justify-between" : "justify-center"
      } text-zinc-500 text-md font-semibold`}
    >
      {currentUser && (
        <div>
          <img
            width={35}
            className="rounded-full"
            src={currentUser?.photoURL}
            alt=""
          />
        </div>
      )}
      NotesKeeper.
      {currentUser && (
        <button onClick={signOut} className="btn btn-sm">
          signout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
