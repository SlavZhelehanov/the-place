const SERVER_URL = "http://localhost:3030/jsonstore/users";
const SERVER_URL_ME = "http://localhost:3030/users/me";

export default async function auth(token) {
    if (token) return fetch(SERVER_URL_ME, { headers: { "X-Authorization": token } }).then(res => res.json());
    return fetch(SERVER_URL).then(res => res.json());
}