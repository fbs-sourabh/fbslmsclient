import React from "react";
import "../../../assets/styles/modules/videoCard.css";
import { useDispatch } from "react-redux";
import { setCurrentMedia } from "../../../features/mediaSlice";
import { useNavigate } from "react-router-dom";

function VideoCard({ m }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleMediaClick = () => {
		dispatch(setCurrentMedia(m));
		navigate("/video");
	};
	return (
		<div className="videoCard__container" onClick={handleMediaClick}>
			<div className="videoCard__thumbnailContainer">
				<img
					src={m.links.thumbnailPath}
					alt="thumbnail"
					className="videoCard__thumbnail"
				/>
			</div>
			<h4 className="videoCard__title">{m.meta.title}</h4>
		</div>
	);
}

export default VideoCard;
