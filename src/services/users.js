import { URL } from "./constants"
export async function loginUser(user) {
    console.log(user);
    
    const response =
        await fetch(`${URL}/users?email=${user.userEmail}&password=${user.userPassword}`)
    if (!response.ok) throw new Error("Error desde la peticion aiuda!")
    return await response.json()
}