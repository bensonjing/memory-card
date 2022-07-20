export default function Card(props) {
  return (
    <div
      className="card_container"
      style={{
        backgroundColor: props.card.backgroundColor,
      }}
      onClick={() => props.handleClick(props.card.title)}
    >
      <img src={props.card.src} />
      <div className="card_title">{props.card.title}</div>
    </div>
  );
}
