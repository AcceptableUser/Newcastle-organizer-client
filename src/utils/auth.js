let inMemoryToken = "";


export function login(jwt_token = "", noRedirect) {
    inMemoryToken = jwt_token;
    if (!noRedirect) {

    }
}

export async function logout() {
    inMemoryToken = null;
    await fetch('/auth/logout', {
        method: 'POST',
        credentials: 'include',
    })

    // to support logging out from all windows
    window.localStorage.setItem('logout', new Date())
}

export function getAccessToken() {
    return inMemoryToken
}