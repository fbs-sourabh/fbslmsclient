import "../../assets/styles/sidebar/sidebar.css";
import SideTab from "./SideBarComponents/SideTab";
import { useDispatch, useSelector } from "react-redux";
import AdminSideTabDrop from "./SideBarComponents/AdminSideTabDrop";
import close from "../../assets/images/identity/icons/close3.png";
import { handleSideBarToggle } from "../../features/uiSlice";

function Sidebar() {
	const role = useSelector((state) => state.userState?.user?.user?.role);
	const sideBarOpen = useSelector((state) => state.uiState.sideBarOpen);

	const dispatch = useDispatch();

	return (
		<div className="sidebar" style={sideBarOpen ? {} : { display: "none" }}>
			<button
				onClick={() => dispatch(handleSideBarToggle())}
				className="sidebarCloseButton"
			>
				<img
					src={close}
					alt="close menu"
					className="sidebarCloseButton__icon"
				/>
			</button>
			{role === "admin" ? <AdminSideTabDrop /> : null}
			<SideTab heading="Courses" />
		</div>
	);
}

export default Sidebar;
