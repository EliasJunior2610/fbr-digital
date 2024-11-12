import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import "./Profile.css";

export default function Profile() {
  useEffect(() => {
    document.title = "FBR Digital";
  }, []);

  return (
    <>
      <Header />
      <div id="perfil">
        <div id="perfil-item">
          <h1>Dalton</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
