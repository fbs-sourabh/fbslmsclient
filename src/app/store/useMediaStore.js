// import { create } from "zustand";
// import { devtools } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";

// export const useMediaStore = create(
// 	immer(
// 		devtools((set, get) => ({
// 			currentPlaylist: null,
// 			currentMedia: null,
// 			isLoading: false,
// 			error: null,

// 			z_setCurrentPlaylist: (playlist) => {
// 				set((state) => {
// 					state.currentPlaylist = playlist;
// 				});
// 			},

// 			z_getCurrentPlaylist: () => {
// 				return get().currentPlaylist;
// 			},

// 			z_setCurrentMedia: (media) => {
// 				set((state) => {
// 					state.currentMedia = media;
// 				});
// 			},

// 			z_getCurrentMedia: () => {
// 				return get().currentMedia;
// 			},
// 		}))
// 	)
// );
