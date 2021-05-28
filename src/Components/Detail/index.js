import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API, APIKEY, IDAPI } from "../../config";
import Output from "../Output";
import "./detail.css";

export default function Detail(props) {
  const [id, setId] = React.useState();
  const [videos, setVideos] = useState();
  const [video, setVideo] = useState();
  useEffect(() => {
    let id = props.match.params.id;
    setId(id);
    getVideos();
    getVideosbyId(id);
  }, []);
  const getVideos = async () => {
    const req = await fetch(API + APIKEY);
    const resp = await req.json();
    setVideos(resp.items);
  };
  const getVideosbyId = async (id) => {
    const req = await fetch(IDAPI + id + APIKEY);
    const resp = await req.json();
    setVideo(resp.items[0]);
  };
  return (
    <div className="container">
      {video ? (
        <>
          <div className="card">
            <div className="detail">
              <iframe
                width="800"
                height="450"
                src={"https://www.youtube.com/embed/" + video.id}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="detail2">
              <p>
                Channel:{" "}
                {video.snippet.channelTitle
                  ? video.snippet.channelTitle
                  : "none"}
              </p>
              <p>{video.snippet.title ? video.snippet.title : "none"}</p>
              <p>
                Published:{" "}
                {video.snippet.publishedAt ? video.snippet.publishedAt : "none"}
              </p>
              <p>
                {video.snippet.description ? video.snippet.description : "none"}
              </p>
            </div>
          </div>
          <div className="detailout">
            <Output videos={videos} />
          </div>
        </>
      ) : (
        "none"
      )}
    </div>
  );
}
