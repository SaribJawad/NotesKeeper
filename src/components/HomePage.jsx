/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function HomePage({ children }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
        navigate("/login");
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return loading == true ? (
    <span className="loading loading-spinner loading-lg absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></span>
  ) : (
    children
  );
}

export default HomePage;
