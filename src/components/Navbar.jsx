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
      } text-zinc-500 text-md font-semibold z-30`}
    >
      {currentUser && (
        <div>
          {/* <img
            width={35}
            className="rounded-full"
            src={currentUser?.photoURL}
            alt=""
          /> */}
          <span>{currentUser?.displayName}</span>
        </div>
      )}
      NotesKeeper.
      {currentUser && (
        <button onClick={signOut} className="btn btn-sm  bg-[#19191C]">
          signout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
