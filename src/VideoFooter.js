import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
import { MusicNote } from "@material-ui/icons";
function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h2>@{channel}</h2>
        <p> {description}</p>
        <div className="videoFooter__ticker">
          <MusicNote className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://firebasestorage.googleapis.com/v0/b/mgtiktok-a486f.appspot.com/o/20190221180311_IMG_0061.jpg?alt=media&token=71bd1f03-945b-4358-87d0-4befd6fd1418"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
