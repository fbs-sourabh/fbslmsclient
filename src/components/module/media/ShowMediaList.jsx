import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentMedia } from "../../../features/mediaSlice";
import { useNavigate } from "react-router-dom";

import play from "../../../assets/images/identity/icons/play.png";
import edit from "../../../assets/images/identity/icons/edit.png";
import deleteB from "../../../assets/images/identity/icons/delete.png";

function ShowMediaList() {
	const [media, setMedia] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/v1/admin/get-all-media", {
				withCredentials: true,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				const mediaData = response.data;
				// console.log(mediaData);
				setMedia(mediaData.allMedia);
			})
			.catch((error) => {
				console.error("Error fetching playlists:", error);
			});
	}, []);

	const navigate = useNavigate();

	const handlePlayMedia = (m) => {
		dispatch(setCurrentMedia(m));
		navigate("/video");
	};

	return (
		<div className="mediaContainer">
			{media.map((m) => {
				return (
					<div className="mediaCard" key={m._id}>
						<div className="mediaCard__thumbnail">
							<img
								src={m?.links?.thumbnailPath ? m.links.thumbnailPath : ""}
								alt={m.meta.title}
							/>
						</div>
						<div className="mediaCard__meta">
							<div className="mediaCard__title">{m.meta.title}</div>
							<div className="mediaCard__playlist">{m.playlist?.label}</div>
							<div className="mediaCard__desc">{m.meta.description}</div>
						</div>
						<div className="mediaCard__action">
							<div
								className="mediaCard__button mediaCard__edit"
								onClick={() => handlePlayMedia(m)}
							>
								<img src={play} alt="" srcset="" />
							</div>
							<div className="mediaCard__button mediaCard__edit">
								<img src={edit} alt="" srcset="" />
							</div>
							<div className="mediaCard__button mediaCard__delete">
								<img src={deleteB} alt="" srcset="" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ShowMediaList;
