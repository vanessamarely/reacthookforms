import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </label>
      <label>
        Email:
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <input type="submit" />
    </form>
  );
}

export default FormYup;
