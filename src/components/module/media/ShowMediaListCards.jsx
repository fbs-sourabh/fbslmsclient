import React, { useEffect } from "react";
import { getMediaByPlaylist } from "../../../api/media/mediaApi";
import PlaylistComponent from "./PlaylistComponent";

function ShowMediaListCards({ currentPlaylist }) {
	useEffect(() => {
		getMediaByPlaylist(currentPlaylist._id);
	}, []);

	return <PlaylistComponent p={currentPlaylist} />;
}

export default ShowMediaListCards;
