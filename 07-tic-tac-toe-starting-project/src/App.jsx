import Player from "./Player";

function App() {
  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player key="player-1" initialName="Player 1" symbol="X" />
          <Player key="player-2" initialName="Player 2" symbol="O" />
        </ol>
      </div>
    </>
  );
}

export default App;
