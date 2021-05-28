import React, { useEffect, useState } from "react";
import { API, APIKEY } from "../../config";
import Output from "../Output";
import Search from "../Search";

export default function Home(props) {
  const [videos, setVideos] = useState();
  useEffect(() => {
      if(props.match.params.name){
        getVideosbyName(props.match.params.name)
      }else{
        getVideos()
      }
   
  },[props.match.params?.name]);

  const getVideos = async () => {
    const req = await fetch(API + APIKEY);
    const resp = await req.json();
    setVideos(resp.items);
  };
  const getVideosbyName = async (name) => {
    const req = await fetch(API + name + APIKEY);
    const resp = await req.json();
    setVideos(resp.items);
  };

  return (
    <div>
      
      <Output videos={videos} />
    </div>
  );
}
