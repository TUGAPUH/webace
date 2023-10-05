import React, { useEffect, useState } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { logOut, login } from "../../Store/MainSlice/MainSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebaseInit";
import Logo from "./img/Logo.png";
import { Toaster } from "react-hot-toast";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();
  const [allPaths, isLoading] = useSelector((state) => [
    state.mainReducer.paths,
    state.mainReducer.isLoading,
  ]);
  const [user] = useAuthState(auth);
  const [isActive, setIsActive] = useState({
    active: false,
    target: null,
  });

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setScroll(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScroll(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const refInteract = (el) => {
    if (el && isActive.active) {
      isActive.target.classList.remove(style.underline);
      el.currentTarget.classList.add(style.underline);
      setIsActive({
        active: true,
        target: el.currentTarget,
      });
    }
    if (el && !isActive.active) {
      el.currentTarget.classList.add(style.underline);
      setIsActive({
        active: true,
        target: el.currentTarget,
      });
    }
  };

  return (
    <header
      className={
        scroll ? style.header + " " + style.opacityHeader : style.header
      }
    >
      <div className={style.headerWrapper}>
        <img src={Logo} alt="Logo" className={style.headerLogo} />

        <nav className={style.nav}>
          <ul className={style.list}>
            {allPaths.map(({ path, name }) => (
              <li className={style.item} key={name}>
                <Link
                  to={path}
                  className={style.itemLink}
                  onClick={refInteract}
                >
                  {name}
                </Link>
              </li>
            ))}

            <li className={style.item}>
              {user ? (
                <Button onClick={() => dispatch(logOut())}>Exit</Button>
              ) : (
                <Button onClick={() => dispatch(login())}>Login</Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Toaster position="top-right" reverseOrder={true} />
    </header>
  );
};

export default Header;
