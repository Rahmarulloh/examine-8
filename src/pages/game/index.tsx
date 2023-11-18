import "./game.css";

export default function Game() {
  return (
    <div className="game-container">
      <div className="game-players">
        <div className="player">
          <div className="player-img">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="player-content">
            <p className="player-name">Player 1</p>
            <p className="player-score">
              Score: <span className="score-value">0</span>
            </p>
          </div>
        </div>

        <div className="player">
          <div className="player-img">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="player-content">
            <p className="player-name">Player 2</p>
            <p className="player-score">
              Score: <span className="score-value">0</span>
            </p>
          </div>
        </div>
      </div>

      <div className="game-subheader">
        <div className="game-status">
          {/* <p className="status-message">Game Started</p> */}
          <p className="status-message">X's Turn</p>
          {/* <p className="status-message">
          Winner is <span>Player 1</span>
        </p> */}
        </div>

        <div className="game-controls">
          <button className="control-btn d-none">New Game</button>

          <button className="control-btn d-none">Load</button>
          <button className="control-btn">Quit</button>
          <button className="control-btn">Help</button>
        </div>
      </div>

      <div className="game-board">
        <button className="cell">1</button>
        <button className="cell">2</button>
        <button className="cell">3</button>
        <button className="cell">4</button>
        <button className="cell">5</button>
        <button className="cell">6</button>
        <button className="cell">7</button>
        <button className="cell">8</button>
        <button className="cell">9</button>
      </div>

      <div className="game-controls">
        <button className="control-btn">Reset</button>
        <button className="control-btn">Undo</button>
        <button className="control-btn d-none">Redo</button>
        <button className="control-btn">Save</button>
      </div>
    </div>
  );
}
