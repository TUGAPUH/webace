import React from "react";
import "./style.css";
import Header from "./Components/Header/Header";
import AppRouter from "./LogicComponents/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./Firebase/firebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from "./Components/Loader/Loader";

function App() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
