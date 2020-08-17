//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//spotify endpoint where we are sending user so that spotify can look into authorization using it's API
export const authEndpoint = 'https://accounts.spotify.com/authorize';

//as soon user get login it's gonna bring user back to home page of app
const redirectUri = 'https://spotify-clone-668e7.web.app/';

// Steps:
// 1. click LOGIN button
//2.Redirect to SPOTIFY login page
//3. Redirect to homepage once logged in

const clientId = 'd23e3556f0fe452981f5edf4e904d02b';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

//getting access token --> goes to hash tag in url
export const getTokenFromUrl = () => {
  // #accessToken=mysupersecretkey&name=abc&def
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
