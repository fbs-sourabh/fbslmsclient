import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../instance";

const base = "api/v1/auth";

export const fetchUserByEmail = createAsyncThunk(
	"users/fetchUserByEmail",
	async () => {
		try {
			const response = await api.get(`${base}/user-info`, {
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			// if (!response.ok) {
			// 	throw new Error("failed to load the data");
			// }
			const data = response.data;
			// console.log("from fetchUser auth api", data);
			return data;
		} catch (error) {
			console.log(error.message);
		}
	}
);

export const z_fetchUserByEmailId = async () => {
	try {
		const response = await api.get(`${base}/user-info`, {
			withCredentials: true,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const data = response.data;

		return data;
	} catch (error) {
		console.log("error", error.message);
	}
};
