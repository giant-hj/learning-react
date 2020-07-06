import React, { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { props: { value, onChange }, utils: { setValue } };
};

const EventPractice = () => {
  const id = useInput("");
  const password = useInput("");
  const onClick = () => {
    alert(id.props.value + " " + password.props.value);
    id.utils.setValue("");
    password.utils.setValue("");
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="id" placeholder="ID" {...id.props} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        {...password.props}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
