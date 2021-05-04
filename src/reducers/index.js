import {combineReducers} from "redux";

const songsReducer = () => {
  return [
    {artist: "CUNAMI", title: "TELEPATIJA", duration: "2:31", embed: "EEe2lQru-SY"},
    {artist: "STOPOSTO", title: "ŠEĆERU", duration: "2:35", embed: "VGwq7vGWPdE"},
    {artist: "MUHA", title: "KOMFORTZONA", duration: "3:10", embed: "hS8CydrPGfs"},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
