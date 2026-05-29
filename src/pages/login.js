import { authLayout } from "../components/authLayout";
import { loginForm } from "../components/loginComponent";
import handleLoginEvents from "../events/loginEvents";
import { navigateTo } from "../router/router";

export const loginPage = (app) => {
  app.innerHTML = authLayout(loginForm());

  handleLoginEvents()
 /*  document
    .querySelector("#loginBtn")
    .addEventListener("click", () => {
      navigateTo("/dashboard");
    });  */
};