import * as React from "react";

interface input {
  label_text: string;
  input_id: string;
  input_type: string;
  errorOccured: string
}


const InputForm = ({ label_text, input_id, input_type,errorOccured }: input) => {
  return (
    <>
      <label htmlFor={input_id} className="label_input">
        {label_text}
      </label>
      <input
        className="input_box " id={input_id} type={input_type} />
    </>
  );
};

export default InputForm;
