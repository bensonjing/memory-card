import ScoreBoard from "./ScoreBoard";

export default function Header(props) {
  return (
    <div id="header">
      <div id="title">Memory Card</div>
      <ScoreBoard score={props.score} highestScore={props.highestScore} />
    </div>
  );
}
