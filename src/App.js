import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

const App = () => {
  return (
    <div>
      <div>
        <SongList />
      </div>
      <div>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
