import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../instance";

const base = "api/v1/user";

export const getPlaylistByName = createAsyncThunk(
	"media/getPlaylistByName",
	async (playlist) => {
		try {
			const response = await api.get(
				`${base}/get-videos-by-playlist/${playlist}`,
				{
					withCredentials: true,
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				}
			);
			const data = response.data;
			console.log(data);
			return data;
		} catch (error) {
			console.log(error.message);
		}
	}
);

export const getMediaByPlaylist = async (p) => {
	try {
		let media = await api.get(`${base}/get-videos-by-playlist/${p}`, {
			withCredentials: true,
		});
		console.log(media.data);
		return media.data;
	} catch (error) {
		console.log(error);
	}
};

export const getCurrentMediaDetails = async (m) => {
	let path = m.links.mediaPath;
	console.log(path, "from get current media details");
	try {
		const response = await api.get(
			`${base}/get-current-media-details/${path}`,
			{
				withCredentials: true,
			}
		);

		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
};
