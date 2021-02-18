function DetailContent(props) {
  let content = [];
  for (let i = 0; i < props.name.length; i++) {
    content.push(
      <div class="mb-3">
        <label for={props.name[i]} class="form-label">
          {props.name[i]}
        </label>
        <input type={props.type[i]} class="form-control" name={props.name[i]} />
      </div>
    );
  }
  return <div>{content}</div>;
}

export default DetailContent;
