import { useDispatch } from "react-redux";
import { handleAccessToggle } from "../../../../../api/users/userApi";
import {
	handleModalVisibility,
	toggleUpdateState,
} from "../../../../../features/uiSlice";
import { useUiStore } from "../../../../../app/store/useUiStore";

export const COLUMNS = [
	{
		Header: "Name",
		accessor: "firstName",
		Cell: ({ row }) => {
			return (
				<span
					onClick={() => {
						alert(row.original.firstName);
					}}
				>
					{row.original.firstName + " " + row.original.lastName}
				</span>
			);
		},
	},
	{
		Header: "Email",
		accessor: "email",
	},
	{
		Header: "Access",
		accessor: "accessDetails",
		Cell: ({ row }) => {
			const dispatch = useDispatch();
			return (
				<button
					className="tableButton"
					onClick={() => {
						handleAccessToggle(row.original._id);
						dispatch(toggleUpdateState());
					}}
				>
					{row.original.accessDetails.hasAccess
						? "Revoke Access"
						: "Allow Access"}
				</button>
			);
		},
	},

	{
		Header: "Actions",
		// accessor: "Actions",
		Cell: ({ row }) => {
			const dispatch = useDispatch();
			return (
				<>
					<button
						className="tableButton"
						onClick={() => dispatch(handleModalVisibility(row.original))}
					>
						Visit Profile
					</button>
				</>
			);
		},
	},
];

// {
// 	Header: "Subscriptions",
// 	accessor: "hasAccess",
// 	Cell: ({ row }) => {
// 		let p = row.original.accessDetails.playlists;
// 		const dispatch = useDispatch();
// 		return (
// 			<span>
// 				<div className="accessList">
// 					{p.length > 0 ? p.toString() : "none"}
// 				</div>
// 				<button
// 					onClick={() => {
// 						addPlaylist(row.original._id);
// 						dispatch(toggleUpdateState());
// 					}}
// 				>
// 					A
// 				</button>
// 			</span>
// 		);
// 	},
// },
