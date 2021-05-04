import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends Component {
  render() {
    return (
      <div>
        <h1 className="center">Support Your Local Artists!</h1>

        {this.props.songs.map((song) => (
          <div className="item" key={song.artist}>
            <div className="left">{song.artist} </div>
            <div className="right">
              <button onClick={() => this.props.selectSong(song)} className="primary">
                Show me something good
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {songs: state.songs};
};

export default connect(mapStateToProps, {selectSong})(SongList);
