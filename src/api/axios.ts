import axios from "axios";

const BASEURL: string = 'https://imdb8.p.rapidapi.com'

export default axios.create({
    baseURL: BASEURL,
    headers: {
        'X-RapidAPI-Key': import.meta.env.API_KEY,
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
})