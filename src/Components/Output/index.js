import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./output.css";

export default function Output(props) {
  let videos = props.videos;
  const history = useHistory();
  return (
    <div className="output">
      {videos ? (
        videos.map((video) => {
          return (
            <div className="outputcard" key={video.id.videoId}>
              <div
                onClick={() => {
                  history.push("/detail/" + video.id.videoId);
                  window.location.reload();
                }}
                key={video.id.videoId}
              >
                <iframe
                  title="prop"
                  className="video"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                ></iframe>
                <h5>{video.snippet.title}</h5>
                <h5>CHANNEL: {video.snippet.channelTitle}</h5>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  );
}
