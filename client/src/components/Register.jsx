import Header from "./Header";
import background from "../images/homebg.jpg";
import FormPart from "./FormPart";

function Register() {
  document.body.style.background = "url(" + background + ")";

  return (
    <div className="register container my-3 dark_bg">
      <Header />
      <div className="row">
        <div className="col-md-4 offset-md-4 register_form d-flex flex-column align-items-center justify-content-center p-4 my-4">
          <h1>INSCRIPTION</h1>
          <form action="" method="POST" className="d-flex">
            <div id="firstPart">
              <FormPart
                type={["text", "email", "password", "confirmPassword"]}
                name={[
                  "Pseudo",
                  "Email",
                  "Mot de passe",
                  "Confimer le mot de passe",
                ]}
              />
              <button type="button" onClick={nextPart} class="btn btn-primary">
                Suivant
              </button>
            </div>
            <div id="secondPart" className="d-none">
              <FormPart
                type={["text", "text", "text", "number"]}
                name={["Nom", "Prénom", "Adresse", "Téléphone"]}
              />
              <button type="submit" class="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

function nextPart() {
  const secondPart = document.getElementById("secondPart");

  document.getElementById("firstPart").classList.add("disappear");
  secondPart.classList.remove("d-none");
  secondPart.classList.add("appear");
}
