import axios from 'axios'

export let endpoints = {
    "movies": "/movies/",
    "oauth2-info": "/oauth2-info/",
    // "login": "/o/token/",
    "login": "/token/",
    "current-user": "/users/current-user/",
}

export default axios.create({
    baseURL: "http://localhost:8000/"
})

