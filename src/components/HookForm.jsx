import React from "react";
import { useForm } from "react-hook-form";

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register("name", { required: true })} />
        {errors.name && <p>This field is required</p>}
      </label>
      <label>
        Email:
        <input {...register("email", { required: true })} />
        {errors.email && <p>This field is required</p>}
      </label>
      <input type="submit" />
    </form>
  );
}

export default HookForm;
