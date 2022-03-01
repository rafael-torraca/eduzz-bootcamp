function Item(props) {
  return (
    <a href="./#" className="list-group-item list-group-item-dark">
      {props.text}
    </a>
  );
}

export default Item;
