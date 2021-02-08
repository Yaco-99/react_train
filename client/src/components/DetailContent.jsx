function DetailContent(props) {
  return (
    <div className="d-flex">
      <h5 className="w-25">{props.title}</h5>
      <p className="w-75">{props.content}</p>
    </div>
  );
}

export default DetailContent;
