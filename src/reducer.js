import { findAllByDisplayValue } from '@testing-library/react';
//this is where we basically do a lot of things which allow the app to work in way you saw it work happen

//initialState of data layer --> (empty)
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  playing: false,
  item: null,
  discover_weekly: null,
  top_artists: null,
  token: null,
  //Remove after finished developing
  //token:
  //  'BQClap8p7QRyq0UPG67pARGmWAvqORpdEaGxB3C7sS10LoZQYsJEB3e-wGdKwWVPnFVOnjW9-gcOLnKy5IrofS9Ya2z31_Aln447eeiTy1DnMxKm0WKtabit9cGQktNZ5dbrK_iqfIUtTrQ4S4HfIlQuV2CNN1J1emVTLihXmJ7Mn0kyxUxo',
};

//creating reducer --> which takes 2 thing state of datalayer, action --> action is how we manipulate how the datalayer looks like
const reducer = (state, action) => {
  //this is where magic happens
  console.log(action);
  //action has 2 things --> type, [payload] --> type is 'SET_USER' and payload is action.user

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, //keep whatever was in current state
        user: action.user, //update user with whatever action.user has
      }; //this is how the new state will look like

    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };

    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case 'SET_TOP_ARTISTS':
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state; //if nothing happens --> return state
  }
};
//primary job of reducer is to listen to the action

export default reducer;

//when we push something into datalayer we dispatch something called action and that action has 2 thing--->type and payload
