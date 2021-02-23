import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseStoreActions } from "easy-peasy";

function DetailContent(props) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(props.schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    const addData = UseStoreActions((actions) => actions.addData);

    addData(data);

    if (props.next) {
      nextPart();
    }
  };

  let content = [];

  for (let i = 0; i < props.name.length; i++) {
    content.push(
      <div className="mb-3">
        <label for={props.name[i]} className="form-label">
          {props.content[i]}
        </label>
        <input
          type={props.type[i]}
          name={props.name[i]}
          className="form-control"
          ref={register({ required: true })}
        />
        <p className="text-danger">{errors[props.name[i]]?.message}</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {content}
      <button type="submit" className="btn btn-primary">
        {props.button}
      </button>
    </form>
  );
}

export default DetailContent;

function nextPart() {
  const secondPart = document.getElementById("secondPart");

  document.getElementById("firstPart").classList.add("disappear");
  secondPart.classList.remove("d-none");
  secondPart.classList.add("appear");
}
