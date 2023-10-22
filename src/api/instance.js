import axios from "axios";

const baseURL = "https://fbs-lms-api.onrender.com";

export const api = axios.create({
	baseURL,
});
