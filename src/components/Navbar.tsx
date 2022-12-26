import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import nhost from "../utils/nhost";

export default function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkAuth = async () => {
    const isAuthenticated = await nhost.auth.isAuthenticatedAsync();

    setLoggedIn(!!isAuthenticated);
  };

  const signOut = async () => {
    await nhost.auth.signOut();
    setLoggedIn(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Notes
          </Link>
        </div>
        <div className="flex-none">
          <button
            type="button"
            onClick={signOut}
            className={clsx(
              "btn btn-sm glass btn-error",
              isLoggedIn ? "block" : "hidden",
            )}
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}
