import axios from "axios";

const baseURL = "https://fbslms.onrender.com";

export const api = axios.create({
	baseURL,
});
