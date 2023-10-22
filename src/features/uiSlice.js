import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sideBarOpen: true,
	updateMark: 1,
	modalVisible: false,
	userInQuestion: {},
};

export const uiStateSlice = createSlice({
	name: "uiState",
	initialState,
	reducers: {
		handleSideBarToggle: (state) => {
			state.sideBarOpen = !state.sideBarOpen;
		},
		toggleUpdateState: (state) => {
			state.updateMark = state.updateMark * -1;
		},
		handleModalVisibility: (state, action) => {
			state.modalVisible = !state.modalVisible;
			state.userInQuestion = action.payload;
		},
	},
});

export const { handleSideBarToggle, toggleUpdateState, handleModalVisibility } =
	uiStateSlice.actions;
export default uiStateSlice.reducer;
