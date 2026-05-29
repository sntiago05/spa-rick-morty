export function setLoggedUser(user) {
    localStorage.setItem("loggedUser", JSON.stringify(user))
}

export function getLoggedUser() {
    const user = localStorage.getItem("loggedUser")
    if (!user) return undefined
    return JSON.parse(user)
}