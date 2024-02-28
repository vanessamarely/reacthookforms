import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Definición del esquema de validación con Yup
const schema = yup
  .object({
    username: yup
      .string()
      .required("El nombre de usuario es obligatorio")
      .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
    email: yup
      .string()
      .required("El correo electrónico es obligatorio")
      .email("Debe ser un correo electrónico válido"),
    password: yup
      .string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .required();

function ExerciseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Nombre de Usuario</label>
        <input id="username" {...register("username")} />
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input id="email" type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default ExerciseForm;