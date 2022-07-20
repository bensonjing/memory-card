export default function Card(props) {
  return (
    <div
      className="card_container"
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: props.card.backgroundColor,
      }}
      onClick={props.handleClick}
    >
      <img
        src={props.card.src}
        style={{
          width: "300px",
          height: "300px",
        }}
      />
      <div className="card_title">{props.card.title}</div>
    </div>
  );
}
