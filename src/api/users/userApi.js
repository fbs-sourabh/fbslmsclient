import axios from "axios";
import { api } from "../instance";

const base = "api/v1/user";
const adminBase = "api/v1/admin";

//  returns list of all users
export const getAllUsers = async () => {
	try {
		const response = await api.get(`${adminBase}/get-all-users`, {
			withCredentials: true,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});

		const data = response.data;
		// console.log(data);

		return data;
	} catch (error) {
		console.log(error.message);
	}
};

// toggles access to content ; false implies user can see the content but cannot consume
export const handleAccessToggle = async (userToToggle) => {
	try {
		const response = await api.patch(
			`${adminBase}/toggle-content-access`,
			{
				id: userToToggle,
			},
			{
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		const updatedUserDetails = response.data;
		console.log(updatedUserDetails);
		return updatedUserDetails;
	} catch (error) {
		console.log(error.message);
	}
};

// adds new playlist to user account (to add new playlist in database, contact admin)
export const addPlaylist = async (userId, pl) => {
	try {
		const response = await api.patch(
			`${adminBase}/add-new-playlist-on-user`,
			{
				id: userId,
				playlist: pl,
			},
			{
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		const updatedUserDetails = response.data;
		console.log(updatedUserDetails);
		return updatedUserDetails;
	} catch (error) {
		console.log(error.message);
	}
};

// returns list of all playlists
export const getAllPlaylists = async () => {
	try {
		const response = await api.get(`${adminBase}/get-all-playlists`, {
			withCredentials: true,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const playlist = response.data;
		console.log(playlist);
		return playlist;
	} catch (error) {
		console.log(error.message);
	}
};
