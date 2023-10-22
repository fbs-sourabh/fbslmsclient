import { createSlice } from "@reduxjs/toolkit";
import { getPlaylistByName } from "../api/media/mediaApi";

const initialState = {
	currentPlaylist: null,
	currentMedia: null,
	isLoading: false,
	error: null,
};

export const mediaState = createSlice({
	name: "mediaState",
	initialState,
	reducers: {
		setCurrentPlaylist: (state, action) => {
			state.currentPlaylist = action.payload;
		},
		setCurrentPlaylistToNull: (state) => {
			state.currentPlaylist = null;
		},
		getCurrentPlaylist: (state) => {
			return state.currentPlaylist;
		},
		setCurrentMedia: (state, action) => {
			state.currentMedia = action.payload;
		},
		getCurrentMedia: (state) => {
			return state.currentMedia;
		},
		extraReducers: (builder) => {
			builder
				.addCase(getPlaylistByName.pending, (state) => {
					state.isLoading = true;
					state.error = null;
				})
				.addCase(getPlaylistByName.fulfilled, async (state, action) => {
					console.log(action.payload, "action payload");
					state.currentPlaylist = await action.payload.playlist;
					state.isLoading = false;
					state.error = null;
				})
				.addCase(getPlaylistByName.rejected, (state, action) => {
					state.isLoading = false;
					state.error = action.error.message;
				});
		},
	},
});

export const {
	getCurrentPlaylist,
	setCurrentPlaylist,
	getCurrentMedia,
	setCurrentMedia,
	setCurrentPlaylistToNull,
} = mediaState.actions;
export default mediaState.reducer;
