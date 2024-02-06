import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const baseURL = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseURL}/movie/top_rated?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const getMoviePopular = async () => {
    const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const getDetailList = async (q) => {
    const detail = await axios.get(`${baseURL}/movie/${q}?page=1&api_key=${apiKey}`)
    return detail.data 
}

export const searchMovie = async (q) => {
    try {
        const handleSearch = await axios.get(`${baseURL}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
        return handleSearch.data
    }
    catch (error) {
        alert(error + 'Cannot find a movie just refresh the browser')
    }
}