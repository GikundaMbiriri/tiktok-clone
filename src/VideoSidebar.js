import React, { useState } from "react";
import "./VideoSidebar.css";
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";
function VideoSidebar() {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar">
      <div className="VideoSidebar__button">
        {liked ? (
          <Favorite onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? 300 + 1 : 300}</p>
      </div>
      <div className="VideoSidebar__button">
        <Message />
        <p>230</p>
      </div>
      <div className="VideoSidebar__button">
        <Share />
        <p>10</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
