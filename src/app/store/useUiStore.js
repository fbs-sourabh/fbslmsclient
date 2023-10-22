// import { create } from "zustand";
// import { devtools } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";

// export const useUiStore = create(
// 	immer(
// 		devtools((set, get) => ({
// 			isSideBarOpen: false,
// 			isLoading: false,
// 			isModalOpen: false,
// 			updateMark: -1,
// 			userInQuestion: {},

// 			z_handleSideBarToggle: () => {
// 				set((state) => {
// 					state.isSideBarOpen = !state.isSideBarOpen;
// 				});
// 			},

// 			z_handleModalVisibility: (userData) => {
// 				set((state) => {
// 					state.isModalOpen = !state.isModalOpen;
// 					state.userInQuestion = userData;
// 				});
// 			},
// 		}))
// 	)
// );
