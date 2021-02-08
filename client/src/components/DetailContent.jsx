function DetailContent(props) {
  return (
    <div className="d-flex">
      <h5 className="width-33">{props.title}</h5>
      <p className="width-66">{props.content}</p>
    </div>
  );
}

export default DetailContent;
