import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

//super object which is basically responsible for interaction b/w react app and spotify
const spotify = new SpotifyWebApi(); //create an instance of spotify inside our app which allow us to interact and communicate back and forth with spotify

function App() {
  //if i need to pull anything from datalayer you'll have to use this (here user)  --> if u are doing this [datalayer] then you can use datalayer.user which is same as destructring [{user}]
  const [{ user, token }, dispatch] = useDataLayerValue(); //dispatch is like a gun --> we use it to shoot at data layers --> we can send update it with the values and things so for doing that we need dispatch.

  //Run code based on condition
  //reason why we want this to fire up because when we get redirected back from spotify --> App component loads for 1st time --> which means this useEffect piece of code fires up and -->> we'll grab the access token from the url at that point
  useEffect(() => {
    //code...
    const hash = getTokenFromUrl();
    window.location.hash = ''; //clear the access token from URL

    //storing token value which we got
    const _token = hash.access_token;

    //if token present store it to state now it's present in memory
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token); //giving access token to spotify api --> that will allow you to talk back and forth b/w react and spotify api

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response,
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });

      //getting logged in user from spotify
      spotify.getMe().then((user) => {
        //it will get the user and dispatch --> i.e pop the user into the datalayer
        dispatch({
          type: 'SET_USER',
          user: user,
        }); //this would dispatch the user at this point
      });

      //call to spotify api to get the user playlist --> which returns a promise (which gives us playlist)
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('0GB9chRwz1EI9MkT3BjfbO').then((response) =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );
    }

    // console.log('I have a token 👉 ', token);
  }, [token, dispatch]);
  //useEffect runs only once if emty bracket is present else it run whenever there is change in the varible provided in the brackets. we can use any no. of variables. we can also have multiple useEffects

  // console.log('🧑', user); //displaying the pulled data from datalayer --> (here user)
  // console.log('👽', token);

  return (
    <div className='app'>
      {/* //here if there is token  then display i'm logged in else display the login page*/}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
