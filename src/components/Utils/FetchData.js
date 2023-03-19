import axios from "axios";
const API_URL = "https://pixabay.com/api/"
const API_KEY = '33388520-da97c6f4f9d55a18accdd6f94'

async function fetchData(value, page) {
    const response = await axios.get(`${API_URL}?key=${API_KEY}&image_type=photo&q=${value}&page=${page}&per_page=12&orientation="horizontal"&safesearch=true`);
    return response;
}

export { fetchData };