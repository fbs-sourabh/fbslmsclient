// import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";
// import { devtools } from "zustand/middleware";
// import { z_fetchUserByEmailId } from "../../api/auth/authApi";

// const initialState = {
// 	user: null,
// 	isLoading: false,
// 	error: null,
// };

// export const useUserStore = create(
// 	immer(
// 		devtools((set, get) => ({
// 			user: null,
// 			isLoading: false,
// 			error: null,

// 			z_getUser: () => {
// 				let a_user = get().user;
// 				return a_user;
// 			},

// 			z_getUserData_0: async () => {
// 				z_fetchUserByEmailId()
// 					.then((data) => {
// 						set((state) => {
// 							state.user = data;
// 						});
// 					})
// 					.catch((error) => console.log(error.message));
// 			},

// 			z_getUserData: async () => {
// 				try {
// 					set((state) => {
// 						state.isLoading = true;
// 						state.error = null;
// 					});
// 					const data = await z_fetchUserByEmailId();
// 					set((state) => {
// 						state.user = data;
// 						state.isLoading = false;
// 					});
// 				} catch (error) {
// 					set((state) => {
// 						state.error = error.message;
// 						state.isLoading = false;
// 					});
// 					console.error(error);
// 				}
// 			},
// 		}))
// 	)
// );
