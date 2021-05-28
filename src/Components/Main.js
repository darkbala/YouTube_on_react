
import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router'
import { API, APIKEY } from '../config'
import Detail from './Detail'

import Home from './Home'
import Search from './Search'



export default function Main() {
    const [videos, setVideos] = useState();
    const [name, setName] = useState ();
    useEffect(() => {
      getVideos();
    }, []);
    const history = useHistory()
    const getVideos = async () => {
      const req = await fetch(API + APIKEY);
      const resp = await req.json();
      setVideos(resp.items);
    };
    const getVideosbyName = async (event) => {
      event.preventDefault();
      history.push('/'+name)
    };
    return (
        <div>
         <Search name={name} changeName={setName} send={getVideosbyName} />
            <Switch>
                <Route path='/' exact component ={Home}/>
                <Route path='/:name' exact component ={Home}/>
                <Route path='/detail/:id'  exact component={Detail}/>
            </Switch>
        </div>
    )
}
