export default function ScoreBoard(props) {
  return (
    <div id="score_board">
      <div>Score: {props.score}</div>
      <div>Highest Score: {props.highestScore}</div>
    </div>
  );
}
