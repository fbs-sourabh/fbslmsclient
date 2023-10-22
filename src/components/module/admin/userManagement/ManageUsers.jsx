import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../../../api/users/userApi";
import BasicTable from "./table/BasicTable";
import { useSelector } from "react-redux";
import "../../../../assets/styles/modules/userTable.css";

function ManageUsers() {
	const updateMark = useSelector((state) => state.uiState.updateMark);
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		getAllUsers().then((data) => {
			setTableData(data);
		});
	}, [updateMark]);

	return (
		<div className="tableContainer">
			<BasicTable tableData={tableData} />
		</div>
	);
}

export default ManageUsers;
