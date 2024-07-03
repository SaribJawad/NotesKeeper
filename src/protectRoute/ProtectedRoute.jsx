import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function ProtectedRoute({ Component }) {
  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
