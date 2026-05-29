import { loginUser } from "../services/users"
export default function handleLoginEvents() {
    const loginForm = document.getElementById("login-form")
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const data = new FormData(loginForm)
        if (!data) throw new Error("error de capa 8-no existe el form data usuario")
        const userData = Object.fromEntries(data)
        if (userData.userEmail?.length <= 0 || userData.userPassword?.length <= 0) {
            throw new Error("error de capa 8 - el usuario debe tener contraseña y nombre")
        }
        const user = await loginUser(userData)
        console.log(user);
    })
}
