import axios from "axios";

const BASEURL: string = 'https://imdb8.p.rapidapi.com'

export default axios.create({
    baseURL: BASEURL,
    headers: {
        'X-RapidAPI-Key': '50e5875042mshc342f1fcf2d5632p14862ajsnc51b3f2e63c7',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
})