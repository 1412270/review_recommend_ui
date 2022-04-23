import axios from 'axios'

export let endpoints = {
    "movies": "http://127.0.0.1:8000/movies/"
}

export default axios.create({
    baseUrl: "http://127.0.0.1:8000"
})