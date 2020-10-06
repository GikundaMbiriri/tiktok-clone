import React, { useRef, useState } from "react";
import "./Video.css";
import VideoSidebar from "./VideoSidebar";
import VideoFooter from "./VideoFooter";
import Vi from "./super.webm";
function Video() {
  const [playing, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (!playing) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();

      setPlay(false);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        loop
        onClick={onVideoPress}
        src={Vi}
      ></video>
      <VideoFooter
        channel="mgikunda"
        description="Am excited I completed this"
        song=" This is something close to tiktok "
      />
      <VideoSidebar />
    </div>
  );
}

export default Video;
