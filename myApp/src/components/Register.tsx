import * as React from "react";
import { Link } from "react-router-dom";
import InputForm from "./InputForm";
import { useForm } from "react-hook-form";

const handleRequest = (data:any) => {
console.log(data);
  
};

const Register = () => {
  const { register,handleSubmit,setError } = useForm();

  return (
    <form
      onSubmit={handleSubmit(handleRequest)}
        method="GET"
        className="
bg-gradient-to-b from-violet-900
 to-violet-300
  rounded-md 
  flex
    px-9
    py-3
      self-center
      justify-between
      font-Poppin
       flex-col
      h-[70%]
        flex-[.5]
            gap-3 "
      >
        <div>
          <InputForm
            input_type={"email"}
            label_text={"Email"}
          input_id={"email"}
          errorOccured={""}
          />
          <InputForm
            input_type={"text"}
            label_text={"Product"}
          input_id={"product"}
          errorOccured={""}
        />
          <InputForm
            input_type={"number"}
            label_text={"Quntity"}
          input_id={"quntity"}
          errorOccured={""}
          />
        </div>

        <button
          type="submit"
          className="p-2 rounded-md hover:shadow bg-violet-500 shadow-lg text-white  font-semibold"
        >
          <Link to="/ThankYou">Submit</Link>
        </button>
      </form>
  );
};

export default Register;
