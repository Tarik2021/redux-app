import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song}) => {
  if (!song) return <div className="center">Click button</div>;
  return (
    <div className="center">
      <h3>Recommended from {song.artist} </h3>
      <p>Song title: {song.title}</p>
      <p>Duration: {song.duration}</p>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${song.embed}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);
