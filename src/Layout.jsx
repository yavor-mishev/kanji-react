import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import HeaderActions from "./components/HeaderActions/HeaderActions.jsx";

export default function Layout() {
  const location = useLocation();
  function currHeader(location) {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/courses":
        return "Мойте курсове";
      case "/chat":
        return "Чат";
      case "/settings":
        return "Настройки";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        gap: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <NavBar />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <HeaderActions header={currHeader(location)} />
        <Outlet />
      </main>
    </div>
  );
}
