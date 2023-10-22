import React, { useEffect, useState } from "react";

import PlaylistComponent from "./PlaylistComponent";
import "../../../assets/styles/modules/mediaModule.css";
import { useSelector } from "react-redux";
import ShowMediaListCards from "./ShowMediaListCards";

import { getAllPlaylists } from "../../../api/users/userApi";

function MediaModule() {
	const [playlistArray, setPlaylistArray] = useState([]);

	const currentPlaylist = useSelector(
		(state) => state.mediaState.currentPlaylist
	);

	useEffect(() => {
		getAllPlaylists()
			.then((data) => {
				console.log(data);
				setPlaylistArray(data);
			})
			.catch((error) => {
				console.error("Error fetching playlists:", error);
			});
	}, []);

	return (
		<div className="mediaModule">
			{currentPlaylist ? (
				<div>
					<h1>{currentPlaylist.label}</h1>
					<ShowMediaListCards currentPlaylist={currentPlaylist} />
				</div>
			) : (
				<>
					{playlistArray?.map((p) => (
						<PlaylistComponent p={p} />
					))}
				</>
			)}
		</div>
	);
}

export default MediaModule;
