import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    nombre: yup.string().required("Este campo es obligatorio"),
    edad: yup.number().min(18, "Debes ser mayor de 18 años").required(),
  })
  .required();

const FormYup = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm( { resolver: yupResolver(schema)});
    
    const onSubmit = data => {
        console.log(data);
    }

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("nombre")}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
          <input
            type="number"
            {...register("edad")}
          />
          {errors.edad && <span>{errors.edad.message}</span>}
          <button type="submit"> Enviar</button>
        </form>
      </>
    );
}

export default FormYup;