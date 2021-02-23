import Header from "./Header";
import background from "../images/homebg.jpg";
import FormPart from "./FormPart";
import * as yup from "yup";

function Register() {
  document.body.style.background = "url(" + background + ")";

  return (
    <div className="register container my-3 dark_bg">
      <Header />
      <div className="row">
        <div className="col-md-4 offset-md-4 register_form d-flex flex-column align-items-center justify-content-center p-4 my-4">
          <h1>INSCRIPTION</h1>
          <div id="firstPart">
            <FormPart
              type={["text", "email", "password", "password"]}
              content={[
                "Pseudo",
                "Email",
                "Mot de passe",
                "Confimer le mot de passe",
              ]}
              name={["pseudo", "email", "password", "confirmPassword"]}
              button={"next"}
              schema={yup.object().shape({
                pseudo: yup.string().required(),
                email: yup.string().email().required(),
                password: yup.string().required(),
                confirmPassword: yup
                  .string()
                  .required()
                  .oneOf(
                    [yup.ref("password"), null],
                    "Passwords does not match"
                  ),
              })}
              next={true}
            />
          </div>
          <div id="secondPart" className="d-none">
            <FormPart
              type={["text", "text", "text", "number"]}
              content={["Nom", "Prénom", "Adresse", "Téléphone"]}
              name={["firstName", "lastName", "address", "phone"]}
              button={"register"}
              schema={yup.object().shape({
                firstName: yup.string().required(),
                lastName: yup.string().required(),
                address: yup.string().required(),
                phone: yup.string().required(),
              })}
              next={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
